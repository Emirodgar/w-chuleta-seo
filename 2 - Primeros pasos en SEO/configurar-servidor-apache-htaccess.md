---
description: Mejora tus búsquedas en Google con estos trucos y comandos
lang: es_ES
permalink: codigos-htaccess-apache
author:
  twitter: emirodgar
  
---

# Listado de códigos para .htaccess de Apache

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

## Forzar la barra final

RewriteCond %{REQUEST_URI} /+[^\.]+$
RewriteRule ^(.+[^/])$ %{REQUEST_URI}/ [R=301,L]
<!--stackedit_data:
eyJoaXN0b3J5IjpbNTk0OTEyMjc3LC02OTUzODQzNzVdfQ==
-->