---
title: Optimiza el tiempo de carga de Wordpress
description: 
lang: es_ES
permalink: optimizar-tiempo-carga-wordpress
folder: indexacion
date: 15/02/2021
date_modified: 16/03/2022
  
---

## Consejos para optimizar el tiempo de carga en Wordpress

1️⃣ Deja de usar apache e instala nginx + php-fpm

2️⃣ Usa php 7.4 recomendado por los desarrolladores de WordPress

3️⃣ Habilita php OpCache

4️⃣ Instala Redis y configura la integración con WordPress usando el complemento Redis Object Cache

5️⃣ En WordPress, deshabilita el inicio automático del programador wp-cron.php y configúralo para que se ejecute según lo programado en el programador de tareas CRON

6️⃣ En WordPress, use el complemento "Merge + Minify + Refresh" para minimizar y combinar CSS / JS

7️⃣ Elimina Yoast SEO y usa el complemento más liviano The SEO Framework en su lugar

8️⃣ Instala el complemento "Speed   Up - Clean WP" para deshabilitar los scripts comment-reply.min.js, jquery-migrate.js, incrustaciones y emoji

9️⃣ Usa el complemento para la optimización de la base de datos "Optimize Database after Deleting Revisions"

## Plugins recomendados

- [Asset CleanUp: Page Speed Booster](https://es.wordpress.org/plugins/wp-asset-clean-up/): Si queremos mejorar los tiempos de carga, este plugin es ideal. Necesitaremos una curva de aprendizaje puesto que trata temas bastante técnicos, pero una vez controlado, la mejora en tiempos de carga y experiencia de usuario será notable.
- 

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE2NzUzOTk3NjAsMTU3NzU3MTM4NV19
-->