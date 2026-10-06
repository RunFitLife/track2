# RunFitLife: guía para publicarla

Esta carpeta es la app completa, lista para subir a internet. No necesitas saber programar.
Todos los archivos están sueltos (sin carpetas) para que sea fácil subirlos.

## Qué hay dentro

- `index.html`: la app.
- `manifest.webmanifest`: datos para que se pueda instalar en el móvil como app.
- `sw.js`: permite que funcione sin conexión.
- `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` y `favicon.png`: iconos.

**No renombres ni borres ninguno.** Tienen que estar todos juntos en el mismo sitio.

## Opción A: GitHub Pages (gratis)

1. Crea una cuenta en github.com e inicia sesión.
2. Pulsa "New" para crear un repositorio nuevo. Ponle de nombre `runfitlife` y déjalo en **Public**.
3. En el repositorio nuevo, pulsa "uploading an existing file" (o "Add file" y "Upload files").
4. Arrastra **todos los archivos de esta carpeta** (descomprímela antes) y pulsa "Commit changes".
5. Ve a "Settings", luego "Pages". En "Branch" elige `main` y la carpeta `/ (root)`, y pulsa "Save".
6. Espera uno o dos minutos. Arriba te aparecerá la dirección, parecida a `https://TU-USUARIO.github.io/runfitlife/`.

## Opción B: Netlify (gratis, aún más simple)

1. Entra en app.netlify.com/drop e inicia sesión (puedes usar tu correo).
2. Arrastra la carpeta descomprimida a la zona indicada.
3. En segundos tendrás una dirección web. Crea la cuenta o inicia sesión para que no caduque.

Los pasos de estas webs pueden cambiar un poco con el tiempo. Si algún botón se llama distinto, busca el equivalente.

## Instalarla en el móvil

- **iPhone:** abre la dirección en Safari, pulsa el botón de compartir y elige "Añadir a pantalla de inicio".
- **Android:** abre la dirección en Chrome y elige "Instalar app" en el menú de los tres puntos (también aparece un botón en Ajustes de la app).

## Dominio propio (opcional)

Si quieres una dirección tipo `runfitlife.com`, compra el dominio (unos 10-15 € al año) y conéctalo desde los ajustes de GitHub Pages o Netlify. Antes, comprueba que el nombre esté libre.

## Cómo actualizarla

1. Sustituye `index.html` (y lo que cambie) en GitHub o Netlify.
2. Abre `sw.js` y sube el número de versión: cambia `runfitlife-v1` por `runfitlife-v2`, y así sucesivamente. Así todos los móviles reciben la versión nueva.

## Importante sobre los datos

Los entrenos se guardan en el móvil de cada persona, en el navegador, y no se envían a ningún sitio. Los datos que tengas ahora en el enlace de prueba **no pasan solos** a la nueva dirección: en Ajustes del enlace de prueba copia la copia de seguridad, y pégala en "Recuperar datos" de la nueva dirección.
