---
description: Proceso para eliminar páginas/URLs del índice de los buscadores, en concreto, Google, aunque el proceso es extensible al resto.
lang: es_ES
permalink: eliminar-url-indexada-google
author:
  twitter: emirodgar
---

# Eliminar URLs indexadas en Google

En ciertas ocasiones, con páginas de baja calidad, contenido duplicado o información que no tendría que haber sido indexada, nos vemos forzados a **eliminar dicho contenido de los buscadores**. En esta chuleta me referiré en exclusiva a Google aunque el proceso es extensible -en su mayor parte- al resto de buscadores.


## 1- Eliminar a través de Google Search Console

Si no tenemos dado de alta el dominio en Search Console, lo creamos. 

### La página existe

Si se trata de **una página que existe** y simplemente queremos retirarla del índice de búsqueda de Google, debemos utilizar la [herramienta oficial de Google para eliminar páginas de su índice](https://www.google.com/webmasters/tools/url-removal). Podemos acceder a la misma a través de: Search Console > Índice de Google > Eliminar URLs. Por desgracia, debemos incluir de una en una cada página que queramos eliminar.

### La página ya no existe

La página ya no existe: En el caso de que se trate de un contenido que **ya no existe y que aún así sigue indexado en Google**, debemos utilizar la [herramienta de eliminación de contenido obsoleto](https://www.google.com/webmasters/tools/removals).

Esta medida es rápida y eficaz, ya que hemos usado la herramienta oficial, no obstante, se trata de una **accion temporal** por lo que tenemos que aplicar nuevas medidas para evitar que con el tiempo se vuelva a indexar.

## 2- Evitar de nuevo su indexación

Para evitar que una página se indexe tenemos a nuestra disposición varios métodos. Dependiendo de la urgencia que tengamos o del número de páginas/secciones a bloquear, podemos hacer uso de unas u otras medidas. Ninguna es excluyente de las demás. 

- Añadir la [etiqueta noindex](https://developers.google.com/search/reference/robots_meta_tag?hl=es#directivas-de-indexacin-y-publicacin-vlidas) en el header de la página.
- Hacer que la página genere un error 410 (indicando que ésta ya no existe).
- Bloquear la página con el [comando disallow](http://www.robotstxt.org/robotstxt.html) desde el fichero robots.txt. Cuando hablamos de secciones, es la medida más óptima puesto que podemos usar expresiones regulares para que, con una instrucción, se aplique el bloqueo a múltiples páginas evitando así tener que ir bloqueando una por una.

Si nos corre mucha prisa la eliminación de dicha página y queremos evitar que aparezca un error, podemos hacer lo siguiente:

- Aplicar una redirección 301 (permanente) hacia una página similar o hacia la página principal del sitio.

## 3- Consejo adicional

Si se trata de páginas que sabemos que, tras un tiempo publicadas no queremos que sigan indexadas, podemos hacer uso de la etiqueta [unavailable_after](https://googleblog.blogspot.com/2007/07/robots-exclusion-protocol-now-with-even.html) de tal forma que ya vamos preparando el terreno para que, a corto plazo, Google las desindexe. Yo la suelo utilizar para páginas de eventos.

En el caso de que queramos que desaparezca información alojada en otras páginas y que están incumpliendo las normas, podemos [seguir estos pasos](https://support.google.com/webmasters/answer/6332384?hl=es#more_information) ya que debemos hacerlo a través del [portal legal de Google](https://support.google.com/legal/answer/3110420?visit_id=1-636652569480291557-3013440154&rd=1).
