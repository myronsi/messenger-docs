# Política de privacidad

Versión 0.2 (borrador) · Última actualización: [DATE OF PUBLICATION]

Esta es una traducción de cortesía. La versión alemana es la jurídicamente vinculante.

Esta política explica qué datos personales trata Messenger, por qué, con qué base jurídica, durante cuánto tiempo y
qué derechos tienes. Se aplica a la aplicación web de Messenger, a la aplicación instalada y al sitio de ayuda.

## 1. Resumen breve

- Messenger es un servicio gratuito y sin fines comerciales gestionado por una persona particular. No hay publicidad, ni
  seguimiento, ni analítica, ni venta de datos.
- Almacenamos lo necesario para gestionar tu cuenta, entregar tus mensajes y mantener la seguridad del servicio.
- **Los mensajes no están cifrados de extremo a extremo.** Se cifran en su trayecto hacia el servidor, pero se almacenan en
  el servidor de una forma que el operador puede leer técnicamente. Solo las **llamadas de audio** están cifradas de extremo
  a extremo.
- **Los mensajes no caducan automáticamente.** Se conservan hasta que tú u otras personas los eliminen, como se describe en
  la sección 6.
- El servidor está ubicado en **EE. UU.** (Amazon Web Services, región us-east-1). Consulta la sección 8.
- Puedes contactarnos en cualquier momento sobre tus datos: myron.ilchenko@gmail.com.

## 2. Quién es el responsable

Responsable del tratamiento conforme al art. 4 (7) del Reglamento General de Protección de Datos (RGPD):

Myron Ilchenko  
Bergstraße 5  
79761 Waldshut-Tiengen  
Alemania  
Correo electrónico: myron.ilchenko@gmail.com

No se requiere un delegado de protección de datos y no se ha designado ninguno.

## 3. Datos que tratamos, finalidades y bases jurídicas

Las bases jurídicas se refieren al art. 6 (1) RGPD: (b) ejecución de un contrato, para prestarte el servicio en el que te
registraste conforme a las [Condiciones de uso](#/terms); (c) cumplimiento de una obligación legal; (f) nuestro interés
legítimo. Cuando nos basamos en (f), puedes oponerte en cualquier momento (sección 10).

### 3.1 Tu cuenta

| Datos | Finalidad | Base jurídica |
|---|---|---|
| Nombre de usuario, nombre visible, contraseña (almacenada solo como hash Argon2id) | Crear y gestionar tu cuenta | (b) |
| Clave de recuperación (almacenada solo como hash con clave), secreto de la autenticación en dos pasos y llaves de acceso (almacenados cifrados), códigos de respaldo (almacenados como hash) | Inicio de sesión y recuperación de la cuenta | (b) |
| Dirección de correo electrónico de recuperación opcional | Recuperar tu cuenta y avisarte de cambios de seguridad | (b) |

Tu nombre de usuario es público dentro de Messenger y no se puede cambiar. Después de que elimines tu cuenta, el nombre de
usuario queda disponible para otras personas.

### 3.2 Tu perfil y tus ajustes

Foto, biografía, pronombres, fecha de nacimiento, música del perfil, fondo del perfil, cuentas conectadas (solo nombre y
enlace), zona horaria, ajustes de privacidad, usuarios bloqueados, nombres que asignas a tus contactos, ajustes de
notificaciones y de chats.

Finalidad: mostrar tu perfil a otras personas según lo que elijas en los ajustes de privacidad, y aplicar tus ajustes.
Base jurídica: (b). Todos los extras del perfil son opcionales. En **Privacidad** decides quién puede ver tu foto, tu
biografía, tu fecha de nacimiento y tu estado en línea.

### 3.3 Mensajes, archivos y llamadas

| Datos | Finalidad | Base jurídica |
|---|---|---|
| Mensajes (texto, respuestas, reenvíos, ediciones), reacciones, confirmaciones de lectura | Entregar y mostrar tus conversaciones | (b) |
| Archivos, fotos, videos, mensajes de voz, stickers, emojis personalizados, dibujos | Entregarlos y mostrarlos | (b) |
| Una copia del texto de los mensajes que permite hacer búsquedas | Buscar dentro de un chat | (b) |
| Mensajes que todavía no se han podido enviar (con su texto) | Reintentar la entrega | (b) |
| Registros de llamadas: quién llamó a quién, cuándo y durante cuánto tiempo | Mostrar el historial de llamadas en el chat | (b) |

Llamadas: el audio está cifrado de extremo a extremo. El servidor y nuestro servidor multimedia reenvían el audio cifrado,
pero nunca tienen la clave.

Las fotos se vuelven a codificar y se eliminan sus metadatos (como la ubicación de la cámara). **Los videos originales y
otros archivos conservan sus metadatos**, que pueden incluir una ubicación. Elimínalos antes de enviar el archivo si no
quieres compartirlos.

### 3.4 Seguridad y protección contra abusos

| Datos | Finalidad | Base jurídica |
|---|---|---|
| Sesiones iniciadas: dirección IP completa, navegador y dispositivo (agente de usuario), ubicación aproximada (ciudad, país) | Mantener tu sesión iniciada, mostrar los dispositivos en los que has iniciado sesión, detectar usos indebidos | (f) seguridad de tu cuenta y del servicio |
| Registro de seguridad: tipo de evento (por ejemplo, inicio de sesión, inicio de sesión fallido, cambio de contraseña), dirección IP, agente de usuario, ubicación aproximada | Mostrarte la actividad de tu cuenta; investigar ataques | (f) |
| Límites de frecuencia: hashes de tu dirección IP y de tu nombre de usuario | Detener ataques de fuerza bruta y spam | (f) |

La ubicación aproximada se consulta en una base de datos sin conexión en nuestro servidor. Tu dirección IP no se envía a
ningún otro servicio. Geolocalización IP de [DB-IP](https://db-ip.com), con licencia CC BY 4.0.

Nota: si otra persona intenta iniciar sesión en tu cuenta, su dirección IP aparece en tu registro de seguridad.

### 3.5 Notificaciones

Si activas las notificaciones, almacenamos una suscripción push para tu dispositivo. Las notificaciones se entregan a
través del servicio push de tu navegador o sistema operativo (sección 7). Las vistas previas de los mensajes están
desactivadas de forma predeterminada. Si las activas, el nombre del remitente y los primeros 160 caracteres del mensaje
forman parte de la notificación. Base jurídica: (b).

### 3.6 Vistas previas de enlaces

Cuando un mensaje contiene un enlace, nuestro servidor accede a esa página para mostrar un título y una imagen. El sitio
web ve la dirección de nuestro servidor, el enlace y la hora, pero nada sobre ti. Las vistas previas se guardan en caché
durante 24 horas; las imágenes de vista previa, durante 7 días. Base jurídica: (f), una mejor experiencia de mensajería.

### 3.7 Cuentas conectadas

Si conectas una cuenta de otro servicio, inicias sesión allí o publicas allí un código tú mismo. A partir de ese momento,
ese servicio trata los datos conforme a su propia política de privacidad. Solo guardamos el nombre de la cuenta y el
enlace, nunca tu contraseña ni tus tokens. Base jurídica: (b).

### 3.8 Denuncias y moderación

| Datos | Finalidad | Base jurídica |
|---|---|---|
| Denuncias sobre cuentas que envías o recibes: motivo, nota opcional, una instantánea del perfil denunciado, cómo están relacionadas las dos cuentas | Gestionar las denuncias | (c) Reglamento de Servicios Digitales (DSA), (f) seguridad de los usuarios |
| Denuncias sobre un mensaje o un grupo: motivo, nota opcional y una **copia** del mensaje denunciado con hasta 5 mensajes anteriores y posteriores, tal como la persona que denuncia ve el chat (nombre y nombre de usuario del remitente, texto o leyenda, nombres de archivo, hora); en la denuncia de un grupo, el nombre, la descripción y la foto del grupo | Permitir que una persona examine la denuncia | (c), (f) |
| Estado de la cuenta, su historial, apelaciones, solicitudes de revisión por una persona (con tu texto y tu estado en ese momento) | Aplicar restricciones tras las denuncias; revisarlas | (c), (f) |
| Decisiones del equipo de moderación: estado, motivo y el texto que se te muestra; mensajes eliminados con su motivo; paquetes ocultados | Tomar medidas sobre las denuncias y comunicarte el motivo | (c), (f) |
| Resultados de las denuncias: si se tomaron medidas sobre una denuncia que hiciste | Comunicar el resultado a quienes denuncian, como exige el Reglamento de Servicios Digitales | (c) |
| Denuncias de contenido ilegal enviadas por correo electrónico: nombre y dirección de correo electrónico del remitente, el contenido, dónde se encuentra, por qué es ilegal | Gestionar la denuncia y comunicar el resultado al remitente | (c) |

La persona denunciada nunca sabe quién la ha denunciado. El resultado de una denuncia nunca indica qué medida se tomó.

**Quién ve estos datos.** El operador y los moderadores designados por el operador los ven en una consola de moderación
independiente en nuestro servidor, tras iniciar sesión con una contraseña y un segundo factor. Los moderadores están
sujetos a confidencialidad. Ven cuentas, denuncias y las copias adjuntas a las denuncias de mensajes, **nunca tus
chats**: los mensajes no se leen ni se analizan con fines de moderación. Cada vez que un moderador abre una cuenta, una
lista o una denuncia, la consola registra quién consultó qué (sección 5). Las decisiones aparecen en la aplicación como
tomadas por "Moderación de Messenger", nunca con el nombre de un moderador.

La sección 9 explica las decisiones automatizadas y cómo las revisa una persona.

### 3.9 Registros del servidor y copias de seguridad

Los registros del servidor recogen datos técnicos sobre las solicitudes (método, ruta, estado, duración, un identificador
de solicitud) y, en caso de errores, identificadores internos como tu identificador de usuario. No contienen direcciones
IP ni texto de mensajes. Cuando las llamadas están habilitadas, el servidor multimedia registra los nombres de las salas
de llamada, los identificadores de los participantes y las direcciones IP. Nuestro servidor web registra cada solicitud
con una dirección IP **acortada** (sin la última parte), la hora, la dirección solicitada, el estado y el navegador. Antes
de cada actualización del servicio se hace una copia de seguridad de la base de datos principal. Base jurídica: (f),
operar y proteger el servicio.

## 4. Datos almacenados en tu dispositivo

Messenger almacena datos en tu navegador para funcionar y seguir siendo rápido:

- Una cookie que mantiene tu sesión iniciada (`refresh_token`, HttpOnly, Secure).
- En el almacenamiento del navegador: un token de acceso de corta duración, tu perfil, tus ajustes (tema, idioma,
  apariencia), emojis recientes, borradores y mensajes no enviados, una copia de los chats y mensajes recientes para un
  inicio rápido y el uso sin conexión (hasta 7 días), ajustes y perfiles en caché (hasta 30 días), tu clave de cifrado de
  llamadas y los archivos descargados (hasta 64 MB).

Todo ello es estrictamente necesario para prestar el servicio que solicitas, por lo que no se requiere consentimiento
(§ 25 (2) n.º 2 TDDDG). No usamos cookies de seguimiento. Al cerrar sesión o borrar los datos de tu navegador, estos datos
se eliminan. Cualquier persona con acceso a tu dispositivo desbloqueado puede ver estos datos.

## 5. Cuánto tiempo conservamos los datos

| Datos | Plazo de conservación |
|---|---|
| Cuenta, perfil, ajustes | Hasta que los elimines o elimines tu cuenta; una cuenta que nadie ha usado durante 1 año se elimina (sección 6) |
| Mensajes, archivos, reacciones | **Sin límite de tiempo**, hasta que se eliminen como se describe en la sección 6 |
| Mensajes en espera de un nuevo intento de envío | Hasta que se envíen o se descarten |
| Archivos subidos sin usar | 24 horas |
| Registros de llamadas | 90 días después de la llamada |
| Sesiones iniciadas | Hasta que se cierre la sesión o caduque, más 30 días |
| Registro de seguridad | 1 año |
| Datos de límites de frecuencia | De 1 minuto a 1 hora |
| Denuncias sobre cuentas | 180 días |
| Denuncias sobre mensajes y grupos, con sus copias | 6 meses, también después de que se elimine el chat o el mensaje |
| Resultados de las denuncias | 90 días |
| Estado de la cuenta e historial, solicitudes de revisión | Mientras exista tu cuenta |
| Casos y decisiones de moderación, denuncias de contenido ilegal por correo electrónico | 2 años después de la decisión; los casos abiertos se conservan hasta que se decidan |
| Registro de accesos de moderación (qué moderador consultó qué cuenta) | 2 años |
| Caché de vistas previas de enlaces | 24 horas (imágenes, 7 días) |
| Copias de seguridad de la base de datos | Hasta que se sustituyan, después de 10 actualizaciones posteriores del servicio |
| Registros del servidor, registros del servidor multimedia | Hasta 30 MB por servicio; después se sobrescriben (normalmente al cabo de unos días) |
| Registros del servidor web (direcciones IP acortadas) | 14 días |

## 6. Qué implica eliminar

- **Eliminar para mí**, **vaciar el historial para mí** y **eliminar el chat para mí** ocultan los mensajes solo para ti.
  Se conservan para las demás personas.
- **Eliminar para todos** elimina el texto y el archivo de un mensaje. Se conservan el hecho de que el mensaje existió, su
  remitente, su hora y las reacciones a él.
- **Vaciar el historial para todos** y **eliminar el chat para ambos** eliminan los mensajes, las reacciones y los
  archivos.
- **Eliminar cuenta** elimina tu cuenta, perfil, ajustes, sesiones, registro de seguridad, denuncias, suscripciones push,
  correo electrónico de recuperación, llaves de acceso, cuentas conectadas y tus chats directos (para ambas personas).
  Las denuncias que hiciste sobre mensajes o grupos se conservan sin tu nombre hasta que terminen sus 6 meses.
  **Se conservan:** los mensajes, reacciones y archivos que enviaste en grupos que siguen existiendo (se muestran como
  "Cuenta eliminada"), las copias de tus mensajes que otras personas reenviaron, los paquetes de emojis personalizados que
  creaste (sin tu nombre), las imágenes de los stickers y los registros de llamadas durante un máximo de 90 días.
- **Cuentas inactivas:** si nadie inicia sesión en una cuenta ni la usa durante 1 año, la eliminamos exactamente igual
  que **Eliminar cuenta**. Si la cuenta tiene un correo electrónico de recuperación confirmado, te escribimos a esa
  dirección 30 días antes; si inicias sesión antes de esa fecha, la cuenta se conserva.
- Los datos eliminados pueden permanecer en las copias de seguridad hasta que se sustituyan (sección 5) y en la limpieza
  interna de la base de datos durante unos 10 días.

## 7. Destinatarios

No vendemos ni alquilamos tus datos, ni los compartimos con fines publicitarios. Recurrimos a los siguientes
destinatarios:

| Destinatario | Función | Datos |
|---|---|---|
| Amazon Web Services EMEA SARL / Amazon Web Services, Inc. | Alojamiento (encargado del tratamiento conforme al art. 28 RGPD) | Todos los datos del servidor |
| Google, Mozilla, Apple, Microsoft | Servicios push de tu navegador o sistema operativo | Notificación cifrada; con vistas previas: nombre del remitente e inicio del mensaje |
| [TO DECIDE: email provider, country] | Envío de correos electrónicos de recuperación y de seguridad (encargado del tratamiento) | Tu dirección de correo electrónico de recuperación y el correo electrónico |
| Otros usuarios | Según lo que elijas | Lo que envías y lo que muestran tus ajustes de privacidad |
| Sitios web enlazados en los mensajes | Vistas previas de enlaces | La dirección de nuestro servidor y el enlace |
| Servicios a los que conectas tu cuenta | A petición tuya | Lo que solicite ese servicio |
| Autoridades | Solo cuando la ley lo exija | En la medida en que se exija |

## 8. Transferencias a países fuera de la UE

Nuestro servidor está en EE. UU. (región us-east-1 de AWS). Los servicios push se encuentran principalmente en EE. UU.
Las transferencias se basan en el Marco de Privacidad de Datos UE-EE. UU. cuando el destinatario está certificado
(art. 45 RGPD) y, en caso contrario, en las cláusulas contractuales tipo de la UE (art. 46 (2)(c) RGPD). Puedes
solicitarnos una copia de las garantías.

## 9. Decisiones automatizadas en la moderación

Cuando alguien denuncia una cuenta, Messenger calcula una puntuación a partir de las denuncias y cambia el estado de la
cuenta automáticamente: advertida, limitada, restringida o suspendida. Cada nivel bloquea determinadas acciones; la página
**Estado de la cuenta** muestra cuáles y por qué. Las apelaciones en la aplicación se tramitan automáticamente.

Una persona del equipo de moderación revisa cada cuenta **restringida** o **suspendida** automáticamente y cada paquete
ocultado tras denuncias, y puede confirmarlo, rebajarlo o levantarlo. Los demás niveles se revisan cuando lo solicitas.

Estas decisiones pueden afectarte de forma significativa. Tienes derecho a obtener la revisión por parte de una persona, a
expresar tu punto de vista y a impugnar la decisión (art. 22 (3) RGPD). Usa **Pedir una revisión por una persona** en la
página **Estado de la cuenta** o escribe a myron.ilchenko@gmail.com. Encontrarás los detalles en las
[Normas de la comunidad y moderación](#/guidelines).

## 10. Tus derechos

Tienes derecho:

- de **acceso** a tus datos y a obtener una copia (art. 15),
- de **rectificación** de los datos incorrectos (art. 16),
- de **supresión** de tus datos (art. 17); puedes eliminar tu cuenta tú mismo en Seguridad y dispositivos,
- a la **limitación del tratamiento** (art. 18),
- a la **portabilidad** de tus datos en un formato legible por máquina (art. 20),
- de **oposición** al tratamiento basado en un interés legítimo (art. 21),
- a **presentar una reclamación** ante una autoridad de control de protección de datos (art. 77). La autoridad competente
  para nosotros es: Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg,
  Lautenschlagerstraße 20, 70173 Stuttgart, Alemania.

Messenger aún no tiene un botón de exportación. Envía tus solicitudes a myron.ilchenko@gmail.com e indica tu nombre de
usuario. Para proteger tu cuenta, podemos pedirte que confirmes la solicitud desde tu cuenta con la sesión iniciada.
Respondemos en el plazo de un mes.

## 11. Menores

Debes tener al menos 13 años para usar Messenger. Si tienes menos de 16 años, uno de tus padres o tu tutor legal debe dar
su consentimiento al tratamiento de tus datos. Si sabemos que un menor de 13 años tiene una cuenta, la eliminamos. Los
padres pueden contactarnos en myron.ilchenko@gmail.com.

## 12. Seguridad

Las conexiones con Messenger están cifradas (HTTPS). Las contraseñas se almacenan como hash con Argon2id; los secretos de
la autenticación en dos pasos y las llaves de acceso se almacenan cifrados. Las llamadas de audio están cifradas de
extremo a extremo. Los mensajes y los archivos no están cifrados de extremo a extremo. Ningún sistema es completamente
seguro; por favor, no compartas contraseñas ni otros secretos en los chats.

## 13. Cambios

Actualizamos esta política cuando Messenger cambia. La versión y la fecha figuran al principio. Anunciamos los cambios
importantes en la aplicación antes de que entren en vigor.
