# The Fluent Edge

Sitio de práctica de conversación en inglés para estudiantes avanzados. Pensado para practicar solo, sin compañero.

## Publicar en GitHub Pages

1. Creá un repositorio nuevo en GitHub (por ejemplo `the-fluent-edge`).
2. Subí todo el contenido de esta carpeta a la raíz del repositorio.
3. En el repositorio: **Settings → Pages → Source**, elegí la rama `main` y la carpeta `/ (root)`.
4. Guardá. GitHub te va a dar una URL del estilo `https://tu-usuario.github.io/the-fluent-edge/`.
5. Después de cada actualización, si el navegador muestra la versión vieja, forzá el refresco con `Ctrl+Shift+R`.

## Importante: cómo probar la página en tu computadora

El sitio ahora guarda el nombre del alumno y su progreso en el navegador (`localStorage`).
Por una restricción de seguridad de los navegadores, **esto no funciona si abrís
`index.html` haciendo doble clic** (protocolo `file://`) — el navegador no deja guardar
datos locales en ese caso, así que el botón de guardar nombre y "Save & continue later"
no van a andar.

Para probarlo antes de subirlo a GitHub, corré un servidor local desde la carpeta:

```
python3 -m http.server 8000
```

y abrí `http://localhost:8000/` en el navegador. Una vez publicado en GitHub Pages
(paso anterior), todo funciona normalmente porque ahí sí es una URL `https://` real.

## Estructura

```
index.html                     página principal, lista los ejercicios
style.css                      estilos y colores de todo el sitio
js/profile.js                  sistema de nombre + progreso guardado (local al navegador)
js/exercises-registry.js       lista de ejercicios que aparecen en la home
js/app.js                      arma las tarjetas de la home a partir del registro
exercises/
  invitations.html             ejercicio "Invitations"
  data/invitations.js          las 79 frases del ejercicio (español + inglés)
  js/practice-engine.js        motor genérico: cola, reintentos, guardado, resumen
```

## Cómo agregar un ejercicio nuevo

1. Copiá `exercises/data/invitations.js` a `exercises/data/nombre.js` y reemplazá las frases,
   manteniendo el formato `{ category: "...", es: "...", en: "..." }`. Cambiá también el nombre
   de la variable (`window.NOMBRE_DATA = [...]`).
2. Copiá `exercises/invitations.html` a `exercises/nombre.html` y cambiá:
   - el `<title>`
   - el texto del `<h1>` y del `<p class="lead">`
   - la línea `<script src="data/invitations.js">` para que apunte al nuevo archivo de datos
   - la variable que se le pasa a `initPracticeSession(root, NOMBRE_DATA, { exerciseId: "nombre" })`
     (el `exerciseId` tiene que ser único, se usa para guardar el progreso de cada alumno)
3. Abrí `js/exercises-registry.js` y agregá un objeto nuevo al array `EXERCISES`, con
   `id: "nombre"` (mismo valor que el `exerciseId` de arriba), `href: "exercises/nombre.html"`
   y `dataVar: "NOMBRE_DATA"`. La tarjeta va a aparecer sola en la página principal, con la
   cantidad de frases calculada automáticamente y el estado (sin empezar / en progreso /
   completado) según el alumno que esté conectado.

No hace falta tocar el motor de práctica (`practice-engine.js`) ni el sistema de perfiles
(`profile.js`): son los mismos para todos los ejercicios.

## Cómo funciona el ejercicio

- Las frases aparecen de a una, en español, en orden aleatorio.
- El botón **Show answer** revela la traducción al inglés.
- Después de revelar, el alumno elige **Correct** o **I got it wrong**.
- Si se equivoca, la frase vuelve a aparecer 3 frases más adelante (no inmediatamente).
- El ejercicio termina cuando todas las frases fueron marcadas correctas al menos una vez.
- Al final aparece un resumen con las frases que costaron más, y un botón para repasar
  solamente esas, con el mismo sistema.

## Cómo funciona el sistema de cuentas

No es un login real: es un "nombre guardado" en el navegador, sin contraseña ni servidor.

- La primera vez, el alumno escribe su nombre en el recuadro de arriba a la derecha
  (aparece en cualquier página del sitio).
- A partir de ahí, el nombre queda guardado en ese navegador. Si otro alumno usa la
  misma computadora, puede tocar **Switch** y poner el suyo.
- Dentro de un ejercicio, el botón **Save & continue later** guarda exactamente dónde
  se quedó (qué frases le faltan, cuáles falló) para retomarlo después. Al volver a
  entrar aparece un cartel para elegir "Continue" o "Start over".
- En la página principal, cada tarjeta de ejercicio muestra si está "In progress"
  o "Completed" para el alumno conectado en ese momento.
- **Límite importante**: como no hay servidor, el progreso queda guardado solo en esa
  computadora y ese navegador — no se sincroniza si el alumno entra desde el celular
  o desde otra compu.
