---
description: Mejora tus búsquedas en Google con estos trucos y comandos
lang: es_ES
permalink: codigos-htaccess-apache
author:
  twitter: emirodgar
  
---

# Listado de códigos para .htaccess de Apache

## Accesos a la página

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

Cuando forzamoe el acceso seguro a través de `https`, es recomendable también habilitar `HSTS` (*HTTP Strict Transport Security*) para una configuración de seguridad más completa.

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

## Redirecciones

### Redirección simple

Redirect 301 /oldpage.html http://www.example.com/newpage.html
Redirect 301 /oldpage2.html http://www.example.com/folder/

### Redirección de todo el sitio a un nuevo dominio

Redirect 301 / http://newsite.com/

### Redirección de una subcarpeta a otro dominio

RedirectMatch 301 /subdirectory(.*) http://www.newsite.com/newfolder/$1

### Redirección para eliminar una subcarpeta

RedirectMatch 301 ^/carpeta/(.*)$ /$1


### Redirección para cambiar de subcarpeta

RedirectMatch 301 ^/dreamweaver/(.*)$ /tools/$1

### Excluir una URL de ser redireccionada

Esto es útil si tenemos un dominio redireccionado y queremos que el fichero `robots.txt` siga estando accesible para los robots de los buscadores.

RewriteEngine On
RewriteRule ^robots.txt - [L]

## Seguridad

### Que no entre nadie salvo yo (mi ip)

Si, por seguridad, queremos evitar cualquier acceso al sitio (por ejemplo, en una intranet) podemos configurarlo de la siguiente manera. La parte de `xxx.xxx.xxx.xxx` deberá ser sustituida por nuestra dirección IP, ya que será la única a la que el servidor permita acceso.

De los siguientes dos bloques sólo tendremos que usar uno de ellos, que dep

    ## Apache 2.2
    Order deny,allow
    Deny from all
    Allow from xxx.xxx.xxx.xxx
    
    ## Apache 2.4
    Require all denied
    Require ip xxx.xxx.xxx.xxx

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTk0NzAyMTU1MSw0OTY1OTQ2OTIsLTY5NT
M4NDM3NV19
-->