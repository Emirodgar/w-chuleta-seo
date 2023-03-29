---
title: Eliminar páginas indexadas en Google
description: Proceso para eliminar páginas del índice de los buscadores, en concreto, Google, aunque el proceso es extensible al resto.
lang: es_ES
permalink: eliminar-pagina-indexada-google
author: Emirodgar
layout: default_1
folder: indexacion
date: 15/02/2021
date_modified: 29/03/2023
  
---

En ciertas ocasiones, con páginas de baja calidad, contenido duplicado o información que no tendría que haber sido indexada, nos vemos forzados a **eliminar dicho contenido del índice de los buscadores**. En esta chuleta me referiré en exclusiva a Google, aunque el proceso es extensible -en su mayor parte- al resto de buscadores.

1. Índice
{:toc}

## Eliminar a través de Google Search Console

Si no tenemos dado de alta el dominio en Search Console, lo creamos. 

### La página existe

Si se trata de **una página que existe** -y simplemente queremos retirarla del índice de búsqueda de Google- debemos utilizar la [herramienta oficial de Google para eliminar páginas de su índice](https://www.google.com/webmasters/tools/url-removal){:target="_blank"}. Podemos acceder a la misma a través de: `Índice de Google` > `Eliminar URLs`. Por desgracia, debemos incluir de una en una cada URL que queremos eliminar.

### La página ya no existe

En el caso de que se trate de un contenido que **ya no existe en nuestra web, pero que aun así sigue indexado en Google**, debemos emplear la [herramienta de eliminación de contenido obsoleto](https://www.google.com/webmasters/tools/removals){:target="_blank"}.

Esta medida es rápida y eficaz, ya que hemos usado la herramienta oficial, no obstante, se trata de una **acción temporal** (se aplica durante 90 días) por lo que tenemos que aplicar nuevas medidas para evitar que con el tiempo se vuelva a indexar.

## Evitar de nuevo su indexación (`noindex` o error `4XX`)

Para evitar que una página se indexe tenemos a nuestra disposición varios métodos. Dependiendo de la urgencia que tengamos o del número de páginas/secciones a bloquear, podemos hacer uso de unas u otras medidas. Ninguna es excluyente de las demás. 

### Noindex: La página sigue existiendo pero no queremos que se indexe

En ese caso, usaremos la [etiqueta noindex](https://developers.google.com/search/reference/robots_meta_tag?hl=es#directivas-de-indexacin-y-publicacin-vlidas){:target="_blank"} para indicar al buscador que esa página no debe ser indexada.
Su uso es sencillo, bastará con incluir en la cabecera de la página (sección `<head>`) la siguiente línea:

```
<meta name="robots" content="noindex">
```

Quedaría por tanto de la siguiente manera:

```
<!DOCTYPE html>
<html><head>
<meta name="robots" content="noindex">
(…)
</head>
<body>(…)</body>
</html>
```

Si no tenemos acceso a la página concreta, podemos gestionarlo desde el archivo de configuración del servidor y enviarlo como una petición `HTTP`.

```
HTTP/1.1 200 OK
Date: Tue, 20 May 2023 21:42:43 GMT
(…)
X-Robots-Tag: noindex
(…)
```

En los ejemplos anteriores estamos bloqueando la indexación a todos los robots de búsqueda. En la etiqueta `name` podríamos especificar, en lugar de `robots` el nombre concreto de un bot para limitar su indexación. Aquí tenemos el [listado de los robots de Google](https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers?hl=es){:target="_blank"}.

### Limitamos el rastreo del robot

Si tenemos problemas para utilizar la etiqueta `noindex`, tenemos la opción de bloquear la página con el [comando disallow](http://www.robotstxt.org/robotstxt.html){:target="_blank"} desde el fichero `robots.txt`. Cuando hablamos de secciones, es la medida más óptima, puesto que podemos usar expresiones regulares para que, con una regla, se aplique el bloqueo a múltiples páginas, evitando así tener que ir bloqueando una por una. 

> No es recomendable utilizar `noindex` y `disallow` a la vez; o una opción o la otra. Si bloqueamos la indexación pero también el rastreo, el robot de búsqueda no rastreará y no encontrará la directiva asociada con la indexación. En el caso de un proyecto nuevo no habrá problema, pero si es una página indexada, es muy posible que no se desindexe dado que quedará sin rastrear.

### Si la página ya no va a existir

Si nos corre mucha prisa la eliminación de dicha página, podemos hacer lo siguiente:

- Aplicar una redirección `301` (permanente) hacia una página similar o hacia la página principal del sitio. Esta solución es posible que genere [errores 404 leves](https://support.google.com/webmasters/answer/181708?hl=es){:target="_blank"} dentro de Google Search Console.
- Hacer que la página genere un [error 404 o 410](https://es.wikipedia.org/wiki/HTTP_410){:target="_blank"} (indicando que esta ya no existe).

Ambas opciones conseguirán que la URL indexada desaparezca del índice de Google, aunque tampoco estará disponible para los usuarios de nuestro sitio web.

## Eliminar ficheros indexados

Si se han indexado ficheros ubicados en nuestro servidor, es recomendable bloquear el acceso a los mismos y únicamente permitir los documentos orientados a la página web. Para ello, en el caso del **servidor Apache**, debemos bloquear el [listado de directorios](https://wiki.apache.org/httpd/DirectoryListings){:target="_blank"} haciendo uso de esta instrucción en nuestro fichero .htaccess:  

```
Options -Indexes
```
Para que funcione, la opción `AllowOverides` debe estar a `on`. Una vez activado, si accedemos a un directorio, este no debe mostrar el listado de los documentos que contiene, sino un error de acceso.

> Existen multitud de [opciones que podemos configurar en Apache](codigos-htaccess-apache) para mejorar el rendimiento y añadir funcionalidades SEO a nuestra página.

## Consejos adicionales

Si se trata de páginas que sabemos que, tras un tiempo publicadas, no queremos que sigan indexadas, podemos hacer uso de la etiqueta [unavailable_after](https://googleblog.blogspot.com/2007/07/robots-exclusion-protocol-now-with-even.html){:target="_blank"} de tal forma que ya vamos preparando el terreno para que, a corto plazo, Google las desindexe. Yo la suelo utilizar para páginas de eventos.

En el caso de que queramos que desaparezca información alojada en otras páginas y que están incumpliendo las normas, podemos [seguir estos pasos](https://support.google.com/webmasters/answer/6332384?hl=es#more_information){:target="_blank"}, ya que debemos hacerlo a través del [portal legal de Google](https://support.google.com/legal/answer/3110420?visit_id=1-636652569480291557-3013440154&rd=1){:target="_blank"}.

<section id="cs_recursos"></section>

## Recursos

 - `Inglés` - `2023` - [Experimento para desindexar URL con etiqueta unavailable_after](https://ohgm.co.uk/another-way-to-deindex-urls/){:target="_blank"}
 - [Listado de los robots de búsqueda de Google](https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers?hl=es){:target="_blank"}

<section id="cs_herramientas"></section>

## Herramientas

- [Google: Solicitud de retirada de URL de su índice](https://search.google.com/search-console/removals){:target="_blank"}
- [Google: Solicitud de retirada de contenido obsoleto](https://search.google.com/search-console/remove-outdated-content){:target="_blank"}
- [Google: Denunciar contenido ilegal](https://support.google.com/legal/answer/3110420?visit_id=638156855509177681-2977660644&rd=1){:target="_blank"}

<section id="cs_pr"></section>

## Preguntas frecuentes

<div class="row">
          <div class="col-lg-12">
            <div class="accordion accordion-alterate arrow-right" id="popularTopics">
              <div class="card">
                <div class="card-header" id="heading1">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">¿Se puede eliminar una página de Google si yo no soy el propietario de la misma?</a> </h5>
                </div>
                <div id="collapse1" class="collapse" aria-labelledby="heading1" data-parent="#popularTopics">
                  <div class="card-body">Depende. Lo más rápido es ponerse en contacto con el propietario y solicitar su bloqueo a la indexación o eliminación. Si eso no funciona y la página está incumpliendo las directrices de Google, podemos solicitar su desindexación (eliminar del índice de Google). Si está incumpliendo algún tema legal, podemos solicitar directamente a Google la eliminación y posible penalización del dominio. </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading2">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">¿Cuánto tarda una página en ser eliminada del índice de Google?</a> </h5>
                </div>
                <div id="collapse2" class="collapse" aria-labelledby="heading2" data-parent="#popularTopics">
                  <div class="card-body"> Depende de factores como la popularidad de dicha página, la frecuencia de rastreo del robot de búsqueda y la cola de priorización que exista para el dominio. Por norma general podría demorarse entre 2-5 semanas. </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading3">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">¿la eliminación de una página es permanente?</a> </h5>
                </div>
                <div id="collapse3" class="collapse" aria-labelledby="heading3" data-parent="#popularTopics">
                  <div class="card-body"> Si hemos utilizado las herramientas de Google para solicitar la eliminación, esta medida será temporal (aproximadamente 2 ó 3 meses). Por ello, en paralelo debemos bloquear la indexación de dicha página para evitar que vuelva a aparecer en el índice del buscador.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading4">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">¿Google tiene derecho al olvido?</a> </h5>
                </div>
                <div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#popularTopics">
                  <div class="card-body">Sí, hay un apartado específico al que nos podemos acoger para <a href="https://support.google.com/legal/answer/10769224?hl=es" target="_blank">solicitar el derecho al olvido</a>.</div>
                </div>
              </div>
            </div>
          </div>
        </div>


