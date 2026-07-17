# The Fluent Edge

Sitio de práctica de conversación en inglés para estudiantes avanzados. Pensado para practicar solo, sin compañero.

## Publicar en GitHub Pages

1. Creá un repositorio nuevo en GitHub (por ejemplo `the-fluent-edge`).
2. Subí todo el contenido de esta carpeta a la raíz del repositorio.
3. En el repositorio: **Settings → Pages → Source**, elegí la rama `main` y la carpeta `/ (root)`.
4. Guardá. GitHub te va a dar una URL del estilo `https://tu-usuario.github.io/the-fluent-edge/`.
5. Después de cada actualización, si el navegador muestra la versión vieja, forzá el refresco con `Ctrl+Shift+R`.

## Estructura

```
index.html                     página principal, lista los ejercicios
style.css                      estilos y colores de todo el sitio
js/exercises-registry.js       lista de ejercicios que aparecen en la home
js/app.js                      arma las tarjetas de la home a partir del registro
exercises/
  invitations.html             ejercicio "Invitations"
  data/invitations.js          las 79 frases del ejercicio (español + inglés)
  js/practice-engine.js        motor genérico: cola, reintentos, resumen
```

## Cómo agregar un ejercicio nuevo

1. Copiá `exercises/data/invitations.js` a `exercises/data/nombre.js` y reemplazá las frases,
   manteniendo el formato `{ category: "...", es: "...", en: "..." }`.
2. Copiá `exercises/invitations.html` a `exercises/nombre.html` y cambiá:
   - el `<title>`
   - el texto del `<h1>` y del `<p class="lead">`
   - las dos líneas `<script src="data/...">` para que apunten al nuevo archivo de datos
   - la variable que se le pasa a `initPracticeSession(root, NOMBRE_DATA)`
3. Abrí `js/exercises-registry.js` y agregá un objeto nuevo al array `EXERCISES`, con
   `href: "exercises/nombre.html"` y `dataVar: "NOMBRE_DATA"`. La tarjeta va a aparecer sola
   en la página principal, con la cantidad de frases calculada automáticamente.

No hace falta tocar el motor de práctica (`practice-engine.js`): es el mismo para todos los ejercicios.

## Cómo funciona el ejercicio

- Las frases aparecen de a una, en español, en orden aleatorio.
- El botón **Mostrar respuesta** revela la traducción al inglés.
- Después de revelar, elegís **Correcto** o **Me equivoqué**.
- Si te equivocás, la frase vuelve a aparecer 3 frases más adelante (no inmediatamente).
- El ejercicio termina cuando todas las frases fueron marcadas correctas al menos una vez.
- Al final aparece un resumen con las frases que costaron más, y un botón para repasar
  solamente esas, con el mismo sistema.
