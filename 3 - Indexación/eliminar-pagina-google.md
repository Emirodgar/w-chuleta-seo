---
title: Eliminar páginas indexadas en Google
description: Proceso para eliminar páginas del índice de los buscadores, en concreto, Google, aunque el proceso es extensible al resto.
lang: es_ES
permalink: eliminar-pagina-indexada-google
folder: indexacion
toc: 1
date: 15/02/2021
date_modified: 16/03/2022
layout: chuletaseo
  
---

En ciertas ocasiones, con páginas de baja calidad, contenido duplicado o información que no tendría que haber sido indexada, nos vemos forzados a **eliminar dicho contenido del índice de los buscadores**. En esta chuleta me referiré en exclusiva a Google, aunque el proceso es extensible -en su mayor parte- al resto de buscadores.

{:toc}

## 1- Eliminar a través de Google Search Console

Si no tenemos dado de alta el dominio en Search Console, lo creamos. 

### La página existe

Si se trata de **una página que existe** -y simplemente queremos retirarla del índice de búsqueda de Google- debemos utilizar la [herramienta oficial de Google para eliminar páginas de su índice](https://www.google.com/webmasters/tools/url-removal). Podemos acceder a la misma a través de: Índice de Google > **Eliminar URLs**. Por desgracia, debemos incluir de una en una cada URL que queremos eliminar.

### La página ya no existe

En el caso de que se trate de un contenido que **ya no existe y que aun así sigue indexado en Google**, debemos emplear la [herramienta de eliminación de contenido obsoleto](https://www.google.com/webmasters/tools/removals).

Esta medida es rápida y eficaz, ya que hemos usado la herramienta oficial, no obstante, se trata de una **acción temporal** (se aplica durante 90 días) por lo que tenemos que aplicar nuevas medidas para evitar que con el tiempo se vuelva a indexar.

## 2- Evitar de nuevo su indexación

Para evitar que una página se indexe tenemos a nuestra disposición varios métodos. Dependiendo de la urgencia que tengamos o del número de páginas/secciones a bloquear, podemos hacer uso de unas u otras medidas. Ninguna es excluyente de las demás. 

- Añadir la [etiqueta noindex](https://developers.google.com/search/reference/robots_meta_tag?hl=es#directivas-de-indexacin-y-publicacin-vlidas) en el header de la página.
- Hacer que la página genere un [error 410](https://es.wikipedia.org/wiki/HTTP_410) (indicando que esta ya no existe).

Si tenemos problemas para utilizar la etiqueta noindex, tenemos la opción de bloquear la página con el [comando disallow](http://www.robotstxt.org/robotstxt.html) desde el fichero robots.txt. Cuando hablamos de secciones, es la medida más óptima, puesto que podemos usar expresiones regulares para que, con una regla, se aplique el bloqueo a múltiples páginas, evitando así tener que ir bloqueando una por una. No es recomendable utilizar `noindex` y `disallow` en el mismo proyecto; o una opción o la otra.

Si nos corre mucha prisa la eliminación de dicha página y queremos evitar que aparezca un error, podemos hacer lo siguiente:

- Aplicar una redirección 301 (permanente) hacia una página similar o hacia la página principal del sitio.

Esta solución es posible que genere [errores 404 leves](https://support.google.com/webmasters/answer/181708?hl=es) dentro de Google Search Console.

## 3- Eliminar ficheros indexados

Si se han indexado ficheros ubicados en nuestro servidor, es recomendable bloquear el acceso a los mismos y únicamente permitir los documentos orientados a la página web. Para ello, en el caso del **servidor Apache**, debemos bloquear el [listado de directorios](https://wiki.apache.org/httpd/DirectoryListings) haciendo uso de esta instrucción en nuestro fichero .htaccess:  

```
Options -Indexes
```
Para que funcione, la opción **AllowOverides** debe estar a **on**. Una vez activado, si accedemos a un directorio, éste no debe mostrar el listado de los documentos que contiene, sino un error de acceso.

## 4- Consejos adicionales

Si se trata de páginas que sabemos que, tras un tiempo publicadas, no queremos que sigan indexadas, podemos hacer uso de la etiqueta [unavailable_after](https://googleblog.blogspot.com/2007/07/robots-exclusion-protocol-now-with-even.html) de tal forma que ya vamos preparando el terreno para que, a corto plazo, Google las desindexe. Yo la suelo utilizar para páginas de eventos.

En el caso de que queramos que desaparezca información alojada en otras páginas y que están incumpliendo las normas, podemos [seguir estos pasos](https://support.google.com/webmasters/answer/6332384?hl=es#more_information) ,ya que debemos hacerlo a través del [portal legal de Google](https://support.google.com/legal/answer/3110420?visit_id=1-636652569480291557-3013440154&rd=1).

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTkyNzA4NDc0MCw1NTAyODc5NjYsNDY0NT
A0Mjk5LC0xMzMxNDc4NjYwLDY3NzM5NzY0Nl19
-->