import { defineConfig } from "vitest/config";
import type { Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const escapeScript = (code: string) => code.replace(/<\/script/gi, "<\\/script");
const escapeStyle = (code: string) => code.replace(/<\/style/gi, "<\\/style");

export const inlineIntoHtml = (): Plugin => ({
  name: "inline-into-html",
  apply: "build",
  enforce: "post",
  generateBundle(_options, bundle) {
    const html = bundle["index.html"];
    if (!html || html.type !== "asset") return;
    const fileFor = (url: string) => url.replace(/^\.?\//, "");
    let source = String(html.source);
    source = source.replace(/<script type="module" crossorigin src="([^"]+)"><\/script>/g, (tag, url: string) => {
      const chunk = bundle[fileFor(url)];
      if (!chunk || chunk.type !== "chunk") return tag;
      delete bundle[chunk.fileName];
      return `<script type="module">${escapeScript(chunk.code)}</script>`;
    });
    source = source.replace(/<link rel="stylesheet" crossorigin href="([^"]+)">/g, (tag, url: string) => {
      const asset = bundle[fileFor(url)];
      if (!asset || asset.type !== "asset") return tag;
      delete bundle[asset.fileName];
      return `<style>${escapeStyle(String(asset.source))}</style>`;
    });
    html.source = source;
  },
});

export default defineConfig({
  build: {
    target: ["chrome107", "edge107", "firefox104", "safari16"],
    assetsInlineLimit: Number.MAX_SAFE_INTEGER,
    cssCodeSplit: false,
    modulePreload: false,
  },
  server: {
    host: "::",
    port: 8090,
  },
  plugins: [react(), inlineIntoHtml()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
  },
});
