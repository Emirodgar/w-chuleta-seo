---
description: Proceso para eliminar páginas/URLs del índice de los buscadores, en concreto, Google, aunque el proceso es extensible al resto.
lang: es_ES
permalink: eliminar-url-google
author:
  twitter: emirodgar
---

# Eliminar URLs indexadas en Google

En ciertas ocasiones, con páginas de baja calidad, contenido duplicado o información que no tendría que haber sido indexada, nos vemos forzados a eliminar dicho contenido de los buscadores. En esta chuleta me referiré en exclusiva a Google aunque el proceso es extensible -en su mayor parte- al resto de buscadores.


## 1- Eliminar a través de Google Search Console

Si se trata de una página o pocas páginas, el primer paso recomendado es utilizar la herramienta oficial de Google para eliminar páginas de su índice. Podemos acceder a la misma a través de Search Console > Índice de Google > Eliminar URLs (https://www.google.com/webmasters/tools/url-removal). Si no tenemos dado de alta en Serach Console el dominio del que queremos eliminar una página, tendremos que hacerlo.

En el caso de que se trate de un contenido que ya no existe y que aún así sigue indexado en Google, debemos utilizar la [herramienta de eliminación de contenido obsoleto](https://www.google.com/webmasters/tools/removals).

En el caso de que queramos que desaparezca información alojada en otras páginas y que están incumpliendo las normas, podemos [seguir estos pasos](https://support.google.com/webmasters/answer/6332384?hl=es#more_information) ya que debemos hacerlo a través del [portal legal de Google](https://support.google.com/legal/answer/3110420?visit_id=1-636652569480291557-3013440154&rd=1).

Esta medida es rápida y eficaz, ya que hemos usado la herramienta oficial, no obstante, se trata de algo temporal por lo que tenemos que aplicar nuevas medidas para evitar que con el tiempo se vuelva a indexar.

## 2- Evitar de nuevo su indexación

Si estamos hablando de una única página, podemos hacer uso de las siguientes medidas:

- Añadir la [etiqueta noindex](https://developers.google.com/search/reference/robots_meta_tag?hl=es#directivas-de-indexacin-y-publicacin-vlidas) en el header de la página.
- Hacer que la página genere un error 410 (ya no existe).

En el caso de que se trate de una sección completa o un conjunto de páginas, quizá sea más sencillo:

- Bloquear dicha sección con el [comando disallow](http://www.robotstxt.org/robotstxt.html) desde el fichero robots.txt.

Si nos corre mucha prisa la eliminación de dicha página y queremos evitar que aparezca un error, podemos hacer lo siguiente:

- Aplicar una redirección 301 (permanente) hacia una página similar o hacia la página principal del sitio.

## 3- Consejo adicional

Si se trata de páginas que sabemos que, tras un tiempo publicadas las queremos desindexar, podemos hacer uso de la etiqueta [unavailable_after](https://googleblog.blogspot.com/2007/07/robots-exclusion-protocol-now-with-even.html) de tal forma que ya vamos preparando el terreno para que, a corto plazo, Google las desindexe.
