---
title: Listado de códigos para .htaccess (Apache)
description: Mejora tus búsquedas en Google con estos trucos y comandos
lang: es_ES
layout: chuletaseo
permalink: codigos-htaccess-apache
date: 14/03/2022
folder: primeros-pasos-seo
author:
  twitter: https://github.com/phanan/htaccess
  
---

- Accesos a la página
- Redirecciones
- Seguridad
- Rendimiento
- SEO

## Accesos a la página

En este apartado encontraremos códigos que pueden condicionar el acceso a una página, tanto a nivel de URL como de seguridad.

### Forzar el acceso con www

    RewriteEngine on
    RewriteCond %{HTTP_HOST} ^example\.com [NC]
    RewriteRule ^(.*)$ http://www.example.com/$1 [L,R=301,NC]


### Forzar el acceso sin www

    RewriteEngine on
    RewriteCond %{HTTP_HOST} ^www\.example\.com [NC]
    RewriteRule ^(.*)$ http://example.com/$1 [L,R=301]

### Forzar el acceso seguro con HTTPS

    RewriteEngine on
    RewriteCond %{HTTPS} !on
    RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}

Cuando forzamos el acceso seguro a través de `https`, es recomendable también habilitar `HSTS` (*HTTP Strict Transport Security*) para una configuración de seguridad más completa.

    <IfModule mod_headers.c>
        Header always set Strict-Transport-Security "max-age=31536000;includeSubDomains"
    </IfModule>


### Forzar la barra final

    RewriteCond %{REQUEST_URI} /+[^\.]+$
    RewriteRule ^(.+[^/])$ %{REQUEST_URI}/ [R=301,L]

### Eliminar la barra final

    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [R=301,L]

### Configurar páginas asociadas a códigos de estado

    ErrorDocument 500 "Ha ocurrido un error 500."
    ErrorDocument 401 http://error.example.com/mordor.html
    ErrorDocument 404 /errors/halflife3.html

### Forzar la descarga de un tipo de fichero

    <Files *.pdf>
        ForceType application/octet-stream
        Header set Content-Disposition attachment
    </Files>

### Evitar la descarga de un tipo de fichero

    <FilesMatch "\.(tex|log|aux)$">
        Header set Content-Type text/plain
    </FilesMatch>

## Redirecciones

### Redirección simple

    Redirect 301 /seo.html http://chuletaseo.com/seo.html
    Redirect 301 /posicionamiento-web.html /seo.html

### Redirección de todo el sitio a un nuevo dominio

Redirect 301 / https://chuletaseo.org/

### Redirección de una subcarpeta a otro dominio

    RedirectMatch 301 /seo(.*) https://chuletaseo.org/seo/$1

### Redirección para eliminar una subcarpeta

RedirectMatch 301 ^/seo/(.*)$ /$1


### Redirección para cambiar de subcarpeta

    RedirectMatch 301 ^/seo/(.*)$ /posicionamiento-web/$1

### Excluir una URL de ser redireccionada

Esto es útil si tenemos un dominio redireccionado y queremos que el fichero `robots.txt` siga estando accesible para los robots de los buscadores.

    RewriteEngine On
    RewriteRule ^robots.txt - [L]

## Seguridad

### Que no entre nadie salvo yo (mi ip)

Si, por seguridad, queremos evitar cualquier acceso al sitio (por ejemplo, en una intranet) podemos configurarlo de la siguiente manera. La parte de `xxx.xxx.xxx.xxx` deberá ser sustituida por nuestra dirección IP, ya que será la única a la que el servidor permita acceso.

De los siguientes dos bloques sólo tendremos que usar uno de ellos, que dependerá de la versión de Apache que estemos usando, 2.2 o 2.4.

    ## Apache 2.2
    Order deny,allow
    Deny from all
    Allow from xxx.xxx.xxx.xxx
    
    ## Apache 2.4
    Require all denied
    Require ip xxx.xxx.xxx.xxx

### Bloquear acceso a ficheros ocultos y directorios

    RewriteCond %{SCRIPT_FILENAME} -d [OR]
    RewriteCond %{SCRIPT_FILENAME} -f
    RewriteRule "(^|/)\." - [F]

### Bloquear el acceso a los tipos de fichero que queramos

Dentro de un servidor web existen muchos ficheros y no sólo los que están orientados a ser ejecutados y accesibles para los visitantes. Por ejemplo, copias de seguridad, logs, archivos de configuración, etc. Con este código podremos determinar aquellos que no queremos que sean accedidos vía web.

    <FilesMatch "(\.(bak|config|dist|fla|inc|ini|log|psd|sh|sql|swp)|~)$">
        ## Apache 2.2
        Order allow,deny
        Deny from all
        Satisfy All
    
      ## Apache 2.4
       Require all denied
    </FilesMatch>

Sólo debemos utilizar uno de los dos bloques, que dependerá de la versión de Apache que estemos utilizando.

### Bloquear la navegación por directorios

De esta forma obligamos a que sólo se pueda acceder a los ficheros que generan un HTML que nosotros controlamos y los usuarios no pueden navegador por los directorios ni visualizar otros elementos no cruciales para la página web.

    Options All -Indexes

### Bloquear el hotlinking de imágenes

Evita que otras páginas empleen tus imágenes a costa de los recursos de tu servidor web.

    RewriteEngine on
    # Elimina la siguiente línea si quieres bloquear las peticiones de referers desconocidos
    RewriteCond %{HTTP_REFERER} !^$
    
    RewriteCond %{HTTP_REFERER} !^https?://(.+\.)?example.com [NC]
    RewriteRule \.(jpe?g|png|gif|bmp)$ - [NC,F,L]
    
    # Si quieres mostrar una imagen avisando del bloqueo, sustituye línea anterior por:
    # RewriteRule \.(jpe?g|png|gif|bmp) http://example.com/blocked.png [R,L]

### Bloquear con contraseña el accceso al sitio

Necesitarás crear un fichero  `.htpasswd`  dentro del servidor web donde se guardarán los datos de acceso. Después bastará con incluir el siguiente código en el fichero `.htaccess`.

    AuthType Basic
    AuthName "Nombre"
    AuthUserFile /home/fellowship/.htpasswd
    Require valid-user

### Bloquear con contraseña el accceso a ficheros

    AuthName "Nombre"
    AuthType Basic
    AuthUserFile /home/fellowship/.htpasswd
    
    <Files "one-ring.o">
    Require valid-user
    </Files>
    
    <FilesMatch ^((one|two|three)-rings?\.o)$>
    Require valid-user
    </FilesMatch>

### Evitar que el sitio sea incluido en un iframe

    SetEnvIf Request_URI "/starry-night" allow_framing=true
    Header set X-Frame-Options SAMEORIGIN env=!allow_framing


## Rendimiento

### Comprimir los ficheros de texto

    <IfModule mod_deflate.c>
    
            # Force compression for mangled headers.
            # https://developer.yahoo.com/blogs/ydn/pushing-beyond-gzipping-25601.html
            <IfModule mod_setenvif.c>
                <IfModule mod_headers.c>
                    SetEnvIfNoCase ^(Accept-EncodXng|X-cept-Encoding|X{15}|~{15}|-{15})$ ^((gzip|deflate)\s*,?\s*)+|[X~-]{4,13}$ HAVE_Accept-Encoding
                    RequestHeader append Accept-Encoding "gzip,deflate" env=HAVE_Accept-Encoding
                </IfModule>
            </IfModule>
        
            # Compress all output labeled with one of the following MIME-types
            # (for Apache versions below 2.3.7, you don't need to enable `mod_filter`
            #  and can remove the `<IfModule mod_filter.c>` and `</IfModule>` lines
            #  as `AddOutputFilterByType` is still in the core directives).
            <IfModule mod_filter.c>
                AddOutputFilterByType DEFLATE application/atom+xml \
                                              application/javascript \
                                              application/json \
                                              application/rss+xml \
                                              application/vnd.ms-fontobject \
                                              application/x-font-ttf \
                                              application/x-web-app-manifest+json \
                                              application/xhtml+xml \
                                              application/xml \
                                              font/opentype \
                                              image/svg+xml \
                                              image/x-icon \
                                              text/css \
                                              text/html \
                                              text/plain \
                                              text/x-component \
                                              text/xml
            </IfModule>
        
        </IfModule>

### Establecer el tiempo que será cacheado un elemento (expire headers)

    <IfModule mod_expires.c>
        ExpiresActive on
        ExpiresDefault                                      "access plus 1 month"
    
      # CSS
        ExpiresByType text/css                              "access plus 1 year"
    
      # Data interchange
        ExpiresByType application/json                      "access plus 0 seconds"
        ExpiresByType application/xml                       "access plus 0 seconds"
        ExpiresByType text/xml                              "access plus 0 seconds"
    
      # Favicon (cannot be renamed!)
        ExpiresByType image/x-icon                          "access plus 1 week"
    
      # HTML components (HTCs)
        ExpiresByType text/x-component                      "access plus 1 month"
    
      # HTML
        ExpiresByType text/html                             "access plus 0 seconds"
    
      # JavaScript
        ExpiresByType application/javascript                "access plus 1 year"
    
      # Manifest files
        ExpiresByType application/x-web-app-manifest+json   "access plus 0 seconds"
        ExpiresByType text/cache-manifest                   "access plus 0 seconds"
    
      # Media
        ExpiresByType audio/ogg                             "access plus 1 month"
        ExpiresByType image/gif                             "access plus 1 month"
        ExpiresByType image/jpeg                            "access plus 1 month"
        ExpiresByType image/png                             "access plus 1 month"
        ExpiresByType video/mp4                             "access plus 1 month"
        ExpiresByType video/ogg                             "access plus 1 month"
        ExpiresByType video/webm                            "access plus 1 month"
    
      # Web feeds
        ExpiresByType application/atom+xml                  "access plus 1 hour"
        ExpiresByType application/rss+xml                   "access plus 1 hour"
    
      # Web fonts
        ExpiresByType application/font-woff2                "access plus 1 month"
        ExpiresByType application/font-woff                 "access plus 1 month"
        ExpiresByType application/vnd.ms-fontobject         "access plus 1 month"
        ExpiresByType application/x-font-ttf                "access plus 1 month"
        ExpiresByType font/opentype                         "access plus 1 month"
        ExpiresByType image/svg+xml                         "access plus 1 month"
    </IfModule>

### Deshabilitar ETags

Al eliminar la cabecera `ETag`, se impide el acceso a las cachés y que los navegadores puedan validar los archivos, por lo que se ven obligados a confiar en la cabecera `Cache-Control` y `Expires` que hayamos definido en el punto anterior.

    <IfModule mod_headers.c>
        Header unset ETag
    </IfModule>
    FileETag None

### Codificar los ficheros con UTF-8

    # Use UTF-8 encoding for anything served text/plain or text/html
    AddDefaultCharset utf-8
    
    # Force UTF-8 for a number of file formats
    AddCharset utf-8 .atom .css .js .json .rss .vtt .xml

### Enviar imágenes en formato .WebP

El siguiente código sólo funcionará si existe un fichero de imagen de mismo nombre pero con extensión `.webp` de tal forma que si el servidor detecta compatibilidad en el navegador, sustituirá la imagen actual por su versión `.webp`.

    RewriteEngine On
    RewriteCond %{HTTP_ACCEPT} image/webp
    RewriteCond %{DOCUMENT_ROOT}/$1.webp -f
    RewriteRule (.+)\.(jpe?g|png)$ $1.webp [T=image/webp,E=accept:1]

## SEO

### Activar noindex para todo el sitio

En el caso de que queramos desindexar todo un dominio, podemos activar las directivas `noindex` y `nofollow` de la siguiente manera:

    <ifModule mod_headers.c>
    Header set X-Robots-Tag "noindex, nofollow"
    </ifModule>

Si lo queremos hacer únicamente para una subcarpeta, deberemos especificarlo así:

    <If "%{REQUEST_URI} =~ m#^/seo/#">
    Header set X-Robots-Tag "noindex"
    </If>





<!--stackedit_data:
eyJoaXN0b3J5IjpbLTM2NDg2MzA3MiwxNzM0NDAzNDgxLC0xMD
kwMTI2MDAsLTE3NDIyMzg3NzUsNzQ0NTAyODA2LC0xNzE5MDYx
Njg5LC0xODkyMTcxMDY1LDQ5NjU5NDY5MiwtNjk1Mzg0Mzc1XX
0=
-->