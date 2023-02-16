---
title: Optimiza el tiempo de carga de Wordpress
description: Incrementa la velocidad y la experiencia de usuario de tu Wordpress
lang: es_ES
permalink: optimizar-tiempo-carga-wordpress
author: Emirodgar
layout: default_1
folder: indexacion
date: 15/02/2021
date_modified: 16/03/2022
  
---


## Consejos genéricos

1. **Utiliza un hosting de calidad**: El hosting en el que se aloja tu sitio web juega un papel importante en la velocidad de carga. Asegúrate de utilizar un hosting de calidad con un servidor rápido y estable.

2. **Instala un tema (template) simple y optimizado**: Los temas de WordPress tienen diferentes diseños y características. Algunos temas son más pesados y complejos que otros, lo que puede afectar el tiempo de carga. Es importante utilizar un tema optimizado que sea ligero y rápido.

3. **Utiliza un plugin para cachear peticiones**: Los plugins de caché almacenan una versión en caché de tu sitio web, lo que reduce la cantidad de tiempo que se tarda en cargar tu sitio web. Hay muchos plugins de caché disponibles para WordPress, como `WP Super Cache` o `W3 Total Cache`.

4. **Optimiza las imágenes**: Las imágenes pueden ralentizar el tiempo de carga de tu sitio web. Utiliza herramientas como Photoshop o GIMP para reducir el tamaño de las imágenes antes de cargarlas a tu sitio web.

5. **Optimiza la base de datos**: La base de datos de WordPress puede acumular datos innecesarios con el tiempo, lo que puede ralentizar tu sitio web. Utiliza plugins de optimización de base de datos como `WP-Optimize` o `WP Sweep` para optimizar la base de datos de tu sitio web.

6. **Reduce el número de plugins**: Cada plugin que instalas en tu sitio web puede afectar el tiempo de carga e incluso a la seguridad del sitio web. Asegúrate de utilizar solo los plugins necesarios y elimina los que no se están utilizando. En ocasiones, optar por un plugin con múltiples funcionalidades es preferible a múltiples plugins.

7. **Utiliza una red de distribución de contenido (CDN)**: Un CDN ayuda a distribuir los archivos de tu sitio web a través de una red de servidores en todo el mundo, lo que reduce el tiempo de carga. `Cloudflare` o `Akamai` son opciones populares de CDN para sitios web de WordPress.


## Consejos técnicos para optimizar el tiempo de carga en Wordpress

1️. Aunque [Apache](https://chuletaseo.com/codigos-htaccess-apache) es uno de los servidores web más utilizados, si queremos ofrecer la mejor experiencia posible, podemos optar por usar `nginx` con el módulo de `php-fpm`.

2. Utiliza la última versión de `PHP`, eso garantizará una mejor respuesta.

3. Habilita `php OpCache` para cachear las peticiones a la base de datos y mejorar el acceso a la información.

4. Instala `Redis` y configura la integración con WordPress usando el complemento `Redis Object Cache`.

5️. En WordPress, deshabilita el inicio automático del programador `wp-cron.php` y configúralo para que se ejecute según lo programado en el programador de tareas CRON.

6️. En WordPress, use el complemento `Merge + Minify + Refresh` para minimizar y combinar CSS y JavaSscript.

7️. Elimina `Yoast SEO` y usa el complemento más liviano `The SEO Framework` en su lugar

8️. Instala el complemento `Speed   Up - Clean WP` para deshabilitar los scripts `comment-reply.min.js`, `jquery-migrate.js`, incrustaciones y emojis.

9️. Usa el complemento para la optimización de la base de datos `Optimize Database after Deleting Revisions`.


<section id="cs_recursos"></section>

## Algunos plugins interesantes para gestionar tiempos de carga en Wordpress y arquitecturas de información

- [Asset CleanUp: Page Speed Booster](https://es.wordpress.org/plugins/wp-asset-clean-up/): Si queremos mejorar los tiempos de carga, este plugin es ideal. Necesitaremos una curva de aprendizaje puesto que trata temas bastante técnicos, pero una vez controlado, la mejora en tiempos de carga y experiencia de usuario será notable.
- [Polylang](https://es.wordpress.org/plugins/polylang/): excelente plugin para gestiones múltiples idiomas.

<section id="cs_herramientas"></section>

- [GTMMetrix](https://gtmetrix.com/)
- [Google PageSpeed](https://pagespeed.web.dev/)


<section id="cs_pr"></section>


