---
title: Códigos .htaccess (Apache) - Redirecciones, seguridad y rendimiento
description: "Listado de códigos .htaccess listos para usar en Apache: redirecciones 301, forzar HTTPS y www, seguridad, caché, compresión y directivas SEO."
lang: es_ES
permalink: codigos-htaccess-apache
date: 14/03/2022
date_modified: 19/11/2026
author: Emirodgar
layout: default_1
folder: fuentes-informacion

---

El fichero `.htaccess` permite configurar el comportamiento de un servidor Apache **por directorio**, sin tocar la configuración principal. Es el sitio habitual para las redirecciones 301 de una [migración SEO](https://chuletaseo.com/migracion-seo), para forzar HTTPS, para proteger ficheros o para mejorar el rendimiento. Aquí tienes una colección de códigos listos para copiar.

1. Índice
{:toc}

## Antes de empezar

- **Haz una copia del fichero** antes de cada cambio. Un error de sintaxis deja el sitio devolviendo un error 500.
- **Prueba en un entorno de pruebas** si puedes. Si no, cambia una regla cada vez.
- **Si hay un 500, mira el log de errores del servidor.** Apache indica la directiva que falla y es el primer sitio donde revisar.
- **Tiene que estar habilitado.** `.htaccess` solo se lee si la directiva `AllowOverride` lo permite para ese directorio (por defecto no lo hace). En hosting compartido suele venir activado.
- **Solo vale para Apache.** Nginx no lee `.htaccess`: allí las reglas van en su configuración.
- **Es más lento que la configuración principal.** Según la documentación de Apache, si tienes acceso a la configuración del servidor es preferible poner las reglas allí, porque `.htaccess` se busca y se lee en cada petición. En hosting compartido o con un CMS es lo normal y funciona bien.

En los ejemplos, sustituye `example.com` por tu dominio.

## Accesos a la página

### Forzar HTTPS y www en una sola redirección

Si tienes que unificar HTTPS y `www`, hazlo con **una sola regla**. Encadenar dos redirecciones (primero HTTPS y luego www) añade saltos innecesarios.

```apache
RewriteEngine On
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteRule ^ https://www.example.com%{REQUEST_URI} [L,R=301]
```

La regla de `www` redirige **cualquier** host que no empiece por `www.`, incluidos otros subdominios (`blog.example.com`, por ejemplo). Si el mismo `.htaccess` sirve subdominios, limítala a tu dominio con otra condición.

Para la versión **sin www**, usa esta variante:

```apache
RewriteEngine On
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} ^www\. [NC]
RewriteRule ^ https://example.com%{REQUEST_URI} [L,R=301]
```

> **Cuidado con los bucles de redirección.** Si tu web está detrás de un CDN o un proxy (Cloudflare, por ejemplo), Apache puede ver siempre la petición como HTTP y la regla entra en bucle. En ese caso comprueba la cabecera `X-Forwarded-Proto` en lugar de `%{HTTPS}`:
>
>     RewriteCond %{HTTP:X-Forwarded-Proto} !https

### Solo forzar HTTPS

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

Es importante indicar `R=301`. Sin ese código, Apache usa una redirección 302 (temporal) por defecto, y los buscadores no la tratan como un cambio permanente.

Cuando forzamos HTTPS, es recomendable activar también `HSTS` (*HTTP Strict Transport Security*), que obliga al navegador a usar siempre conexión segura. Actívalo solo cuando estés seguro de que todo el sitio funciona bien con HTTPS.

```apache
<IfModule mod_headers.c>
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
</IfModule>
```

### Forzar la barra final

```apache
RewriteCond %{REQUEST_URI} /+[^\.]+$
RewriteRule ^(.+[^/])$ %{REQUEST_URI}/ [R=301,L]
```

### Eliminar la barra final

```apache
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} (.+)/$
RewriteRule ^ %1 [R=301,L]
```

### Configurar páginas para los códigos de estado

```apache
ErrorDocument 500 "Ha ocurrido un error 500."
ErrorDocument 401 https://error.example.com/acceso.html
ErrorDocument 404 /errors/404.html
```

Si usas una ruta local (como la del 404), la página devuelve el código de estado correcto. Si usas una URL completa, Apache hace una redirección y el usuario recibe otro código de estado, así que evítalo para los 404.

### Forzar la descarga de un tipo de fichero

```apache
<Files *.pdf>
    ForceType application/octet-stream
    Header set Content-Disposition attachment
</Files>
```

### Evitar la descarga de un tipo de fichero

```apache
<FilesMatch "\.(tex|log|aux)$">
    Header set Content-Type text/plain
</FilesMatch>
```

## Redirecciones

Cuando hacemos una [migración SEO](https://chuletaseo.com/migracion-seo) es vital aplicar redirecciones 301 para que buscadores y usuarios entiendan la nueva estructura de URLs. Comprueba siempre el resultado (mira el apartado "Cómo probar los cambios").

### Redirección simple

```apache
Redirect 301 /seo.html https://example.com/seo.html
Redirect 301 /posicionamiento-web.html /seo.html
```

### Redirección de todo el sitio a un nuevo dominio

```apache
Redirect 301 / https://nuevo-dominio.com/
```

Esta regla conserva la ruta: `/pagina` pasa a `https://nuevo-dominio.com/pagina`.

### Redirección de una subcarpeta a otro dominio

```apache
RedirectMatch 301 ^/seo/(.*)$ https://nuevo-dominio.com/seo/$1
```

El `^` del principio es importante. Sin él, la regla afectaría a cualquier URL que contenga `/seo` en cualquier parte de la ruta, por ejemplo `/blog/seo-tips`.

### Redirección para eliminar una subcarpeta

```apache
RedirectMatch 301 ^/seo/(.*)$ /$1
```

### Redirección para cambiar de subcarpeta

```apache
RedirectMatch 301 ^/seo/(.*)$ /posicionamiento-web/$1
```

### Marcar una URL como eliminada (410)

Si una página ya no existe y no tiene sustituta, un 410 (*Gone*) indica de forma explícita que se ha eliminado.

```apache
Redirect gone /pagina-eliminada
```

### Redirigir todo menos el fichero robots.txt

Es útil cuando un dominio está redirigido y queremos que `robots.txt` siga accesible para los buscadores. La regla excluye ese fichero con una expresión regular:

```apache
RedirectMatch 301 ^/(?!robots\.txt$)(.*)$ https://nuevo-dominio.com/$1
```

## Seguridad

### Que no entre nadie salvo yo (mi IP)

Para evitar cualquier acceso al sitio (por ejemplo, en un entorno de pruebas) puedes permitir solo tu dirección IP. Sustituye `xxx.xxx.xxx.xxx` por la tuya.

```apache
# Apache 2.4 (la versión actual)
Require all denied
Require ip xxx.xxx.xxx.xxx
```

En Apache 2.2, una versión antigua, la sintaxis era distinta:

```apache
# Apache 2.2
Order deny,allow
Deny from all
Allow from xxx.xxx.xxx.xxx
```

Usa solo el bloque que corresponda a tu versión.

### Bloquear el acceso a ficheros y directorios ocultos

```apache
RewriteCond %{SCRIPT_FILENAME} -d [OR]
RewriteCond %{SCRIPT_FILENAME} -f
RewriteRule "(^|/)\." - [F]
```

Ojo: esta regla también bloquea la carpeta `.well-known`, que se usa para validar certificados SSL. Si la necesitas, excluye esa ruta.

### Bloquear el acceso a tipos de fichero concretos

En un servidor hay ficheros que no deberían estar accesibles desde la web: copias de seguridad, logs, ficheros de configuración, etc.

```apache
<FilesMatch "(\.(bak|config|dist|fla|inc|ini|log|psd|sh|sql|swp)|~)$">
    # Apache 2.4
    Require all denied
</FilesMatch>
```

### Bloquear la navegación por directorios

Evita que se pueda ver el listado de ficheros de una carpeta que no tiene `index`.

```apache
Options -Indexes
```

### Bloquear el hotlinking de imágenes

Evita que otras webs empleen tus imágenes a costa de los recursos de tu servidor.

```apache
RewriteEngine On
# Elimina la siguiente línea si quieres bloquear también las peticiones sin referer
RewriteCond %{HTTP_REFERER} !^$
RewriteCond %{HTTP_REFERER} !^https?://(.+\.)?example\.com [NC]
RewriteRule \.(jpe?g|png|gif|bmp|webp)$ - [NC,F,L]
```

### Proteger el acceso al sitio con contraseña

Necesitas un fichero `.htpasswd` en el servidor con los datos de acceso. Después, incluye esto en el `.htaccess`:

```apache
AuthType Basic
AuthName "Zona privada"
AuthUserFile /ruta/completa/.htpasswd
Require valid-user
```

### Proteger ficheros concretos con contraseña

```apache
AuthName "Zona privada"
AuthType Basic
AuthUserFile /ruta/completa/.htpasswd

<Files "informe.pdf">
    Require valid-user
</Files>
```

### Evitar que el sitio se cargue en un iframe

```apache
Header set X-Frame-Options SAMEORIGIN
```

Para un control más fino, la alternativa actual es la directiva `frame-ancestors` de la cabecera `Content-Security-Policy`.

## Rendimiento

### Comprimir los ficheros de texto

```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE application/atom+xml \
                                  application/javascript \
                                  application/json \
                                  application/rss+xml \
                                  application/xhtml+xml \
                                  application/xml \
                                  image/svg+xml \
                                  text/css \
                                  text/html \
                                  text/javascript \
                                  text/plain \
                                  text/xml
</IfModule>
```

Esta regla usa `mod_deflate` (gzip). Si tu servidor tiene `mod_brotli` (disponible desde Apache 2.4.26), puedes usarlo para una compresión mejor.

### Establecer el tiempo de caché de los elementos (expire headers)

```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresDefault                       "access plus 1 month"

    # HTML: no cachear
    ExpiresByType text/html              "access plus 0 seconds"

    # Datos y feeds
    ExpiresByType application/json       "access plus 0 seconds"
    ExpiresByType application/xml        "access plus 0 seconds"
    ExpiresByType application/rss+xml    "access plus 1 hour"
    ExpiresByType application/atom+xml   "access plus 1 hour"

    # CSS y JavaScript
    ExpiresByType text/css               "access plus 1 year"
    ExpiresByType text/javascript        "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"

    # Imágenes y vídeo
    ExpiresByType image/gif              "access plus 1 month"
    ExpiresByType image/jpeg             "access plus 1 month"
    ExpiresByType image/png              "access plus 1 month"
    ExpiresByType image/webp             "access plus 1 month"
    ExpiresByType image/svg+xml          "access plus 1 month"
    ExpiresByType video/mp4              "access plus 1 month"

    # Fuentes
    ExpiresByType font/woff2             "access plus 1 month"
    ExpiresByType font/woff              "access plus 1 month"
</IfModule>
```

> **Cuidado con la caché de un año en CSS y JavaScript.** Solo es seguro si los nombres de los ficheros cambian cuando cambia su contenido (por ejemplo `estilos.a1b2c3.css`). Si no, los visitantes pueden seguir viendo una versión antigua durante meses. Si no usas ficheros versionados, reduce el plazo.

### Deshabilitar ETags (solo en casos concretos)

Las cabeceras `ETag` permiten al navegador comprobar si un fichero ha cambiado sin descargarlo de nuevo. Quitarlas era un consejo clásico para servidores con varias máquinas, donde cada una genera una etiqueta distinta. En una instalación normal no hace falta y es mejor dejarlas activas.

```apache
<IfModule mod_headers.c>
    Header unset ETag
</IfModule>
FileETag None
```

### Codificar los ficheros con UTF-8

```apache
AddDefaultCharset utf-8
AddCharset utf-8 .atom .css .js .json .rss .vtt .xml
```

### Servir imágenes en formato WebP

Este código solo funciona si existe una imagen con el mismo nombre y extensión `.webp` junto a la original. Si el navegador es compatible, el servidor entrega la versión `.webp`.

```apache
RewriteEngine On
RewriteCond %{HTTP_ACCEPT} image/webp
RewriteCond %{DOCUMENT_ROOT}/$1.webp -f
RewriteRule (.+)\.(jpe?g|png)$ $1.webp [T=image/webp,E=accept:1]

<IfModule mod_headers.c>
    Header append Vary Accept env=REDIRECT_accept
</IfModule>
AddType image/webp .webp
```

La cabecera `Vary: Accept` evita que una caché intermedia entregue el `.webp` a un navegador que no lo soporta.

## SEO

### Activar noindex para todo el sitio

Si quieres desindexar un dominio completo (por ejemplo, un entorno de pruebas), puedes enviar la directiva `noindex` en la cabecera HTTP:

```apache
<IfModule mod_headers.c>
    Header set X-Robots-Tag "noindex, nofollow"
</IfModule>
```

Para hacerlo solo en una subcarpeta:

```apache
<If "%{REQUEST_URI} =~ m#^/seo/#">
    Header set X-Robots-Tag "noindex"
</If>
```

Para más información sobre las directivas de robots, consulta la [documentación oficial de Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=es).

## Cómo probar los cambios

Después de cada cambio, comprueba la respuesta del servidor. Con `curl -I` ves el código de estado y la URL de destino de una redirección:

```bash
curl -I http://example.com/pagina
```

Fíjate en que:

- el código sea **301** y no 302,
- la cabecera `Location` apunte a la URL final correcta,
- la redirección sea **un solo salto**. Con `curl -IL` puedes seguir la cadena completa y ver si hay saltos de más.

## Recursos

- [Documentación oficial de Apache: tutorial de .htaccess](https://httpd.apache.org/docs/2.4/howto/htaccess.html)
- [Apache mod_rewrite](https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html)
- [Apache mod_alias (Redirect y RedirectMatch)](https://httpd.apache.org/docs/2.4/mod/mod_alias.html)
- [Apache mod_deflate](https://httpd.apache.org/docs/2.4/mod/mod_deflate.html)
- [Apache mod_expires](https://httpd.apache.org/docs/2.4/mod/mod_expires.html)
- Guía de [migración SEO](https://chuletaseo.com/migracion-seo)

## Preguntas frecuentes

**¿Qué es el fichero .htaccess?** Es un fichero de configuración de Apache que se aplica al directorio donde está (y a sus subdirectorios). Sirve para redirecciones, seguridad, caché, compresión y otras directivas, sin editar la configuración principal del servidor.

**¿Dónde está el .htaccess?** Normalmente en la carpeta raíz de la web, junto a `index.html` o `index.php`. Al empezar por punto es un fichero oculto, así que tu cliente FTP o el administrador de ficheros debe estar configurado para mostrar ficheros ocultos.

**¿Funciona en Nginx?** No. Nginx no lee `.htaccess`; las reglas equivalentes se escriben en su propia configuración.

**¿Qué hago si tras un cambio la web devuelve un error 500?** Revierte el último cambio y revisa el log de errores del servidor, que indica la directiva que falla.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Qué es el fichero .htaccess?", "acceptedAnswer": { "@type": "Answer", "text": "Es un fichero de configuración de Apache que se aplica al directorio donde está y a sus subdirectorios. Sirve para redirecciones, seguridad, caché, compresión y otras directivas, sin editar la configuración principal del servidor." } },
    { "@type": "Question", "name": "¿Dónde está el .htaccess?", "acceptedAnswer": { "@type": "Answer", "text": "Normalmente en la carpeta raíz de la web, junto a index.html o index.php. Al empezar por punto es un fichero oculto, así que el cliente FTP o el administrador de ficheros debe mostrar los ficheros ocultos." } },
    { "@type": "Question", "name": "¿Funciona .htaccess en Nginx?", "acceptedAnswer": { "@type": "Answer", "text": "No. Nginx no lee .htaccess; las reglas equivalentes se escriben en su propia configuración." } },
    { "@type": "Question", "name": "¿Qué hago si tras un cambio en .htaccess la web devuelve un error 500?", "acceptedAnswer": { "@type": "Answer", "text": "Revierte el último cambio y revisa el log de errores del servidor, que indica la directiva que falla." } }
  ]
}
</script>
