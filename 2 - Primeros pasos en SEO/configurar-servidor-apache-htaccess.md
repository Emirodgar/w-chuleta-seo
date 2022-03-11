---
description: Mejora tus búsquedas en Google con estos trucos y comandos
lang: es_ES
permalink: configurar-servidor-apache-htaccess
author:
  twitter: emirodgar
  
---

# Listado de códigos para .htaccess de Apache

### Forzar el acceso con www

RewriteEngine on
RewriteCond %{HTTP_HOST} ^example\.com [NC]
RewriteRule ^(.*)$ http://www.example.com/$1 [L,R=301,NC]


### [](https://github.com/phanan/htaccess#force-non-www)Force non-www

It’s  [still](http://www.sitepoint.com/domain-www-or-no-www/)  [open](https://devcenter.heroku.com/articles/apex-domains)  [for](http://yes-www.org/)  [debate](http://no-www.org/)  whether www or non-www is the way to go, so if you happen to be a fan of bare domains, here you go:

RewriteEngine on
RewriteCond %{HTTP_HOST} ^www\.example\.com [NC]
RewriteRule ^(.*)$ http://example.com/$1 [L,R=301]

### [](https://github.com/phanan/htaccess#force-non-www-in-a-generic-way)Force non-www in a Generic Way

RewriteEngine on
RewriteCond %{HTTP_HOST} ^www\.
RewriteCond %{HTTPS}s ^on(s)|off
RewriteCond http%1://%{HTTP_HOST} ^(https?://)(www\.)?(.+)$
RewriteRule ^ %1%3%{REQUEST_URI} [R=301,L]

### [](https://github.com/phanan/htaccess#force-https)Force HTTPS

RewriteEngine on
RewriteCond %{HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}

# Note: It’s also recommended to enable HTTP Strict Transport Security (HSTS)
# on your HTTPS website to help prevent man-in-the-middle attacks.
# See https://developer.mozilla.org/en-US/docs/Web/Security/HTTP_strict_transport_security
<IfModule mod_headers.c>
    # Remove "includeSubDomains" if you don't want to enforce HSTS on all subdomains
    Header always set Strict-Transport-Security "max-age=31536000;includeSubDomains"
</IfModule>
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEwNTA4MzUxMzddfQ==
-->