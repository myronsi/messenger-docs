# Datenschutzerklärung

Version 0.1 (Entwurf) · Zuletzt aktualisiert: [DATE OF PUBLICATION]

Diese Erklärung erläutert, welche personenbezogenen Daten Messenger verarbeitet, warum, auf welcher Rechtsgrundlage,
wie lange und welche Rechte du hast. Sie gilt für die Messenger-Web-App, die installierte App und die Hilfeseite.

## 1. Kurzfassung

- Messenger ist ein kostenloser, nicht kommerzieller Dienst, den eine Privatperson betreibt. Es gibt keine Werbung,
  kein Tracking, keine Nutzungsanalyse und keinen Verkauf von Daten.
- Wir speichern, was nötig ist, um dein Konto zu betreiben, deine Nachrichten zuzustellen und den Dienst sicher zu
  halten.
- **Nachrichten sind nicht Ende-zu-Ende-verschlüsselt.** Sie werden auf dem Weg zum Server verschlüsselt, aber auf
  dem Server in einer Form gespeichert, die der Betreiber technisch lesen kann. Nur **Audioanrufe** sind
  Ende-zu-Ende-verschlüsselt.
- **Nachrichten werden nicht automatisch gelöscht.** Sie bleiben bestehen, bis du oder andere Personen sie löschen,
  wie in Abschnitt 6 beschrieben.
- Der Server steht in den **USA** (Amazon Web Services, Region us-east-1). Siehe Abschnitt 8.
- Du kannst dich jederzeit wegen deiner Daten an uns wenden: myron.ilchenko@gmail.com.

## 2. Wer verantwortlich ist

Verantwortlicher nach Art. 4 Nr. 7 DSGVO:

Myron Ilchenko  
Bergstraße 5  
79761 Waldshut-Tiengen  
Deutschland  
E-Mail: myron.ilchenko@gmail.com

Ein Datenschutzbeauftragter ist nicht erforderlich und wurde nicht benannt.

## 3. Welche Daten wir verarbeiten, Zwecke und Rechtsgrundlagen

Die Rechtsgrundlagen beziehen sich auf Art. 6 Abs. 1 DSGVO: (b) Erfüllung des Vertrags über den Dienst, für den du
dich nach den [Nutzungsbedingungen](#/terms) angemeldet hast, (c) Erfüllung einer rechtlichen Verpflichtung,
(f) unser berechtigtes Interesse. Soweit wir uns auf (f) stützen, kannst du jederzeit widersprechen (Abschnitt 10).

### 3.1 Dein Konto

| Daten | Zweck | Rechtsgrundlage |
|---|---|---|
| Benutzername, Anzeigename, Passwort (nur als Argon2id-Hash gespeichert) | Dein Konto anlegen und betreiben | (b) |
| Wiederherstellungsschlüssel (nur als schlüsselbasierter Hash gespeichert), Zwei-Faktor-Geheimnis und Passkeys (verschlüsselt gespeichert), Backup-Codes (gehasht) | Anmeldung und Kontowiederherstellung | (b) |
| Optionale E-Mail-Adresse zur Wiederherstellung | Dein Konto wiederherstellen und dich vor sicherheitsrelevanten Änderungen warnen | (b) |

Dein Benutzername ist innerhalb von Messenger öffentlich und kann nicht geändert werden. Nachdem du dein Konto
gelöscht hast, wird der Benutzername für andere verfügbar.

### 3.2 Dein Profil und deine Einstellungen

Foto, Bio, Pronomen, Geburtstag, Profilmusik, Profilhintergrund, verknüpfte Konten (nur Name und Link), Zeitzone,
Datenschutzeinstellungen, blockierte Nutzer, Namen, die du deinen Kontakten gibst, Benachrichtigungs- und
Chateinstellungen.

Zweck: dein Profil anderen so anzeigen, wie du es in den Datenschutzeinstellungen festlegst, und deine Einstellungen
anwenden. Rechtsgrundlage: (b). Alle zusätzlichen Profilangaben sind freiwillig. Du entscheidest unter
**Datenschutz**, wer dein Foto, deine Bio, deinen Geburtstag und deinen Online-Status sehen kann.

### 3.3 Nachrichten, Dateien und Anrufe

| Daten | Zweck | Rechtsgrundlage |
|---|---|---|
| Nachrichten (Text, Antworten, Weiterleitungen, Bearbeitungen), Reaktionen, Lesebestätigungen | Deine Unterhaltungen zustellen und anzeigen | (b) |
| Dateien, Fotos, Videos, Sprachnachrichten, Sticker, eigene Emoji, Zeichnungen | Sie zustellen und anzeigen | (b) |
| Eine durchsuchbare Kopie des Nachrichtentexts | Suche innerhalb eines Chats | (b) |
| Nachrichten, die noch nicht gesendet werden konnten (mit ihrem Text) | Zustellung erneut versuchen | (b) |
| Anrufdaten: wer wen wann und wie lange angerufen hat | Anrufverlauf im Chat anzeigen | (b) |

Anrufe: Der Ton ist Ende-zu-Ende-verschlüsselt. Der Server und unser Medienserver leiten den verschlüsselten Ton
weiter, besitzen aber nie den Schlüssel.

Fotos werden neu kodiert, und ihre Metadaten (zum Beispiel der Aufnahmeort) werden entfernt. **Videos im Original und
andere Dateien behalten ihre Metadaten**, die einen Standort enthalten können. Entferne sie vor dem Senden, wenn du
ihn nicht teilen möchtest.

### 3.4 Sicherheit und Schutz vor Missbrauch

| Daten | Zweck | Rechtsgrundlage |
|---|---|---|
| Angemeldete Sitzungen: vollständige IP-Adresse, Browser und Gerät (User-Agent), ungefährer Standort (Stadt, Land) | Dich angemeldet halten, deine angemeldeten Geräte anzeigen, Missbrauch erkennen | (f) Sicherheit deines Kontos und des Dienstes |
| Sicherheitsprotokoll: Art des Ereignisses (zum Beispiel Anmeldung, fehlgeschlagene Anmeldung, Passwortänderung), IP-Adresse, User-Agent, ungefährer Standort | Dir deine Kontoaktivität anzeigen; Angriffe untersuchen | (f) |
| Ratenbegrenzung: Hashwerte deiner IP-Adresse und deines Benutzernamens | Brute-Force-Angriffe und Spam stoppen | (f) |

Der ungefähre Standort wird in einer Offline-Datenbank auf unserem Server ermittelt. Deine IP-Adresse wird an keinen
anderen Dienst gesendet. IP-Geolokalisierung durch [DB-IP](https://db-ip.com), lizenziert unter CC BY 4.0.

Hinweis: Wenn eine andere Person versucht, sich bei deinem Konto anzumelden, erscheint ihre IP-Adresse in deinem
Sicherheitsprotokoll.

### 3.5 Benachrichtigungen

Wenn du Benachrichtigungen einschaltest, speichern wir ein Push-Abonnement für dein Gerät. Benachrichtigungen werden
über den Push-Dienst deines Browsers oder Betriebssystems zugestellt (Abschnitt 7). Nachrichtenvorschauen sind
standardmäßig ausgeschaltet. Wenn du sie einschaltest, sind der Name des Absenders und die ersten 160 Zeichen der
Nachricht Teil der Benachrichtigung. Rechtsgrundlage: (b).

### 3.6 Linkvorschauen

Wenn eine Nachricht einen Link enthält, ruft unser Server diese Seite ab, um einen Titel und ein Bild anzuzeigen. Die
Website sieht die Adresse unseres Servers, den Link und den Zeitpunkt, aber nichts über dich. Vorschauen werden
24 Stunden lang zwischengespeichert, Vorschaubilder 7 Tage lang. Rechtsgrundlage: (f), ein besseres Erlebnis beim
Austausch von Nachrichten.

### 3.7 Verknüpfte Konten

Wenn du ein Konto eines anderen Dienstes verknüpfst, meldest du dich dort an oder veröffentlichst dort selbst einen
Code. Dieser Dienst verarbeitet dann Daten nach seiner eigenen Datenschutzerklärung. Wir speichern nur den
Kontonamen und den Link, niemals dein Passwort oder deine Tokens. Rechtsgrundlage: (b).

### 3.8 Meldungen und Moderation

| Daten | Zweck | Rechtsgrundlage |
|---|---|---|
| Meldungen, die du sendest oder die über dich eingehen: Grund, optionale Anmerkung, eine Momentaufnahme des gemeldeten Profils, wie die beiden Konten miteinander verbunden sind | Meldungen bearbeiten | (c) Digital Services Act, (f) Sicherheit der Nutzer |
| Kontostatus, sein Verlauf, Einsprüche | Einschränkungen nach Meldungen anwenden | (c), (f) |

Die gemeldete Person erfährt nie, wer sie gemeldet hat. Abschnitt 9 erläutert die automatisierten Entscheidungen.

### 3.9 Serverprotokolle und Sicherungen

Serverprotokolle erfassen technische Daten zu Anfragen (Methode, Route, Status, Dauer, eine Anfrage-ID) und bei
Fehlern interne IDs wie deine Benutzer-ID. Sie enthalten keine IP-Adressen und keinen Nachrichtentext. Wenn Anrufe
aktiviert sind, protokolliert der Medienserver die Namen der Anrufräume, die IDs der Teilnehmer und IP-Adressen. Vor
jeder Aktualisierung des Dienstes wird eine Sicherung der Hauptdatenbank erstellt. Rechtsgrundlage: (f), Betrieb und
Absicherung des Dienstes.

## 4. Auf deinem Gerät gespeicherte Daten

Messenger speichert Daten in deinem Browser, damit Messenger funktioniert und schnell bleibt:

- Ein Cookie, das dich angemeldet hält (`refresh_token`, HttpOnly, Secure).
- Im Browserspeicher: ein kurzlebiges Zugriffstoken, dein Profil, Einstellungen (Design, Sprache, Darstellung),
  zuletzt verwendete Emoji, Entwürfe und nicht gesendete Nachrichten, eine Kopie der letzten Chats und Nachrichten
  für einen schnellen Start und die Offline-Nutzung (bis zu 7 Tage), zwischengespeicherte Einstellungen und Profile
  (bis zu 30 Tage), dein Schlüssel für die Anrufverschlüsselung und heruntergeladene Dateien (bis zu 64 MB).

All dies ist unbedingt erforderlich, um den von dir gewünschten Dienst bereitzustellen, daher ist keine Einwilligung
nötig (§ 25 Abs. 2 Nr. 2 TDDDG). Wir verwenden keine Tracking-Cookies. Wenn du dich abmeldest oder deine Browserdaten
löschst, werden diese Daten entfernt. Wer Zugriff auf dein entsperrtes Gerät hat, kann diese Daten sehen.

## 5. Wie lange wir Daten speichern

| Daten | Speicherdauer |
|---|---|
| Konto, Profil, Einstellungen | Bis du sie oder dein Konto löschst |
| Nachrichten, Dateien, Reaktionen | **Keine zeitliche Begrenzung**, bis zur Löschung wie in Abschnitt 6 beschrieben |
| Nachrichten, die auf einen erneuten Sendeversuch warten | Bis sie gesendet oder verworfen werden |
| Nicht verwendete Uploads | 24 Stunden |
| Anrufdaten | 90 Tage nach dem Anruf |
| Angemeldete Sitzungen | Bis zur Abmeldung oder zum Ablauf, plus 30 Tage |
| Sicherheitsprotokoll | Solange dein Konto besteht |
| Daten zur Ratenbegrenzung | 1 Minute bis 1 Stunde |
| Meldungen | 180 Tage |
| Kontostatus und Verlauf | Solange dein Konto besteht |
| Cache der Linkvorschauen | 24 Stunden (Bilder 7 Tage) |
| Datenbanksicherungen | Bis sie ersetzt werden, nach 10 weiteren Aktualisierungen des Dienstes |
| Serverprotokolle | [TO DECIDE: rotation period] |

## 6. Was Löschen bewirkt

- **Für mich löschen**, **Verlauf für mich leeren** und **Chat für mich löschen** blenden Nachrichten nur für dich
  aus. Für die anderen Personen bleiben sie bestehen.
- **Für alle löschen** entfernt den Text und die Datei einer Nachricht. Dass eine Nachricht existiert hat, ihr
  Absender, ihr Zeitpunkt und die Reaktionen darauf bleiben erhalten.
- **Verlauf für alle leeren** und **Chat für beide löschen** entfernen die Nachrichten, Reaktionen und Dateien.
- **Konto löschen** entfernt dein Konto, dein Profil, deine Einstellungen, Sitzungen, dein Sicherheitsprotokoll,
  Meldungen, Push-Abonnements, deine Wiederherstellungs-E-Mail, Passkeys, verknüpften Konten und deine Direktchats
  (für beide Personen). **Erhalten bleiben:** Nachrichten, Reaktionen und Dateien, die du in noch bestehenden
  Gruppen gesendet hast (angezeigt als „Gelöschtes Konto“), Kopien deiner Nachrichten, die andere weitergeleitet
  haben, von dir erstellte eigene Emoji-Pakete (ohne deinen Namen), Stickerbilder und Anrufdaten für bis zu 90 Tage.
- Gelöschte Daten können in Sicherungen verbleiben, bis diese ersetzt werden (Abschnitt 5), und etwa 10 Tage lang
  in der internen Bereinigung der Datenbank.

## 7. Empfänger

Wir verkaufen oder vermieten deine Daten nicht und geben sie nicht für Werbung weiter. Wir nutzen folgende Empfänger:

| Empfänger | Rolle | Daten |
|---|---|---|
| Amazon Web Services EMEA SARL / Amazon Web Services, Inc. | Hosting (Auftragsverarbeiter nach Art. 28 DSGVO) | Alle Daten auf dem Server |
| Google, Mozilla, Apple, Microsoft | Push-Dienste deines Browsers oder Betriebssystems | Verschlüsselte Benachrichtigung; mit Vorschau: Name des Absenders und Anfang der Nachricht |
| [TO DECIDE: email provider, country] | Versand von Wiederherstellungs- und Sicherheits-E-Mails (Auftragsverarbeiter) | Deine Wiederherstellungs-E-Mail-Adresse und die E-Mail |
| Andere Nutzer | Wie du es festlegst | Was du sendest und was deine Datenschutzeinstellungen anzeigen |
| In Nachrichten verlinkte Websites | Linkvorschauen | Die Adresse unseres Servers und der Link |
| Dienste, mit denen du dein Konto verknüpfst | Auf deinen Wunsch | Was dieser Dienst anfordert |
| Behörden | Nur soweit gesetzlich vorgeschrieben | Im erforderlichen Umfang |

## 8. Übermittlungen in Drittländer außerhalb der EU

Unser Server steht in den USA (AWS-Region us-east-1). Push-Dienste befinden sich überwiegend in den USA.
Übermittlungen stützen sich auf das EU-US Data Privacy Framework, soweit der Empfänger zertifiziert ist
(Art. 45 DSGVO), und andernfalls auf die EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO). Du kannst von
uns eine Kopie der geeigneten Garantien verlangen.

## 9. Automatisierte Entscheidungen bei der Moderation

Wenn Personen ein Konto melden, berechnet Messenger aus den Meldungen einen Punktwert und ändert den Status des
Kontos automatisch: verwarnt, begrenzt, eingeschränkt oder gesperrt. Jede Stufe sperrt bestimmte Aktionen; die Seite
**Kontostatus** zeigt, welche und warum. Keine Person prüft diese Entscheidungen, und Einsprüche in der App werden
ebenfalls automatisch bearbeitet.

Diese Entscheidungen können dich erheblich beeinträchtigen. Du hast das Recht, eine Überprüfung durch eine Person zu
verlangen, deinen Standpunkt darzulegen und die Entscheidung anzufechten (Art. 22 Abs. 3 DSGVO). Schreibe an
myron.ilchenko@gmail.com. Einzelheiten stehen in den [Community-Richtlinien und Moderation](#/guidelines).

## 10. Deine Rechte

Du hast das Recht auf:

- **Auskunft** über deine Daten und eine Kopie davon (Art. 15),
- **Berichtigung** falscher Daten (Art. 16),
- **Löschung** deiner Daten (Art. 17); du kannst dein Konto selbst unter Sicherheit und Geräte löschen,
- **Einschränkung der Verarbeitung** (Art. 18),
- **Datenübertragbarkeit**, also deine Daten in einem maschinenlesbaren Format zu erhalten (Art. 20),
- **Widerspruch** gegen eine Verarbeitung, die auf berechtigtem Interesse beruht (Art. 21),
- **Beschwerde** bei einer Datenschutz-Aufsichtsbehörde (Art. 77). Für uns zuständig ist: Der Landesbeauftragte für
  den Datenschutz und die Informationsfreiheit Baden-Württemberg, Lautenschlagerstraße 20, 70173 Stuttgart,
  Deutschland.

Messenger hat noch keine Exportfunktion. Sende Anfragen an myron.ilchenko@gmail.com und gib deinen Benutzernamen an.
Zum Schutz deines Kontos können wir dich bitten, die Anfrage über dein angemeldetes Konto zu bestätigen. Wir
antworten innerhalb eines Monats.

## 11. Kinder

Du musst mindestens 13 Jahre alt sein, um Messenger zu nutzen. Wenn du unter 16 bist, muss ein Elternteil oder eine
sorgeberechtigte Person der Verarbeitung deiner Daten zustimmen. Wenn wir erfahren, dass ein Kind unter 13 ein Konto
hat, löschen wir das Konto. Eltern können uns unter myron.ilchenko@gmail.com kontaktieren.

## 12. Sicherheit

Verbindungen zu Messenger sind verschlüsselt (HTTPS). Passwörter werden mit Argon2id gehasht; Zwei-Faktor-Geheimnisse
und Passkeys werden verschlüsselt gespeichert. Audioanrufe sind Ende-zu-Ende-verschlüsselt. Nachrichten und Dateien
sind nicht Ende-zu-Ende-verschlüsselt. Kein System ist vollkommen sicher; bitte teile keine Passwörter oder andere
Geheimnisse in Chats.

## 13. Änderungen

Wir aktualisieren diese Erklärung, wenn sich Messenger ändert. Version und Datum stehen oben. Wichtige Änderungen
kündigen wir in der App an, bevor sie wirksam werden.
