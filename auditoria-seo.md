---
description: Pasos y acciones para desarrollar una correcta auditoría SEO.
lang: es_ES
permalink: auditoria-seo
author:
  twitter: emirodgar
---

# Auditoría SEO

## Auditar las páginas indexadas

### ¿Estamos enviando a Google las páginas importantes?

El primer punto debe ser conocer cuántas páginas tenemos indexadas en Google y si estas coinciden con las que nos interesa posicionar. Podemos cruzar información entre las que enviamos en el sitemap y las que realmente ha indexado Google. 

### Eliminar las páginas de poco valor

Reducir el número de páginas indexadas en importante para que los robots se centren únicamente en aquellas relevantes. Menos páginas, más sencillo optimizar aquellas realmente importante. Aquí explico el proceso para [eliminar una web](https://chuletaseo.com/eliminar-pagina-indexada-google). Ejemplo de las páginas que no nos interesa posicionar son:

 - Resultados de búsquedas
 - Categorías / archivos
 - Páginas con poco contenido, similares entre ellas o poco relevantes para SEO
 
### Comprobar problemas de indexación

A través de Google Search Console podremos analizar si el buscador está teniendo problemas para indexar nuestra página. Debemos acceder a Índice > cobertura > Válidas para ver en detalle las URLs que son válidas y las que están generando error. Podemos hacer una segunda validación con [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/) en busca de páginas obsoletas, que dan error o bloqueadas.

### Solucionar errores de enlazado interno

A través de Google Searh Console, en el mismo apartado que antes Índice > cobertura > Error, podemos consultar aquellas páginas que han generado error al ser visitadas por Google. Es importante descubir y corregir el problema para evitar que se sigan detectado errores. Normalmente estos problemas se origina por un mal enlazado interno o por [eliminar páginas](https://chuletaseo.com/eliminar-pagina-indexada-google) sin haber sido [migradas correctamente](https://chuletaseo.com/migracion-seo).

Podemos completar este informe con herramientas externas como [Broken Link Check](http://www.brokenlinkcheck.com/).

## Comprobar si la web es Mobile-Friendly

Desde comienzos de 2018, Google da prioridad al contenido mobile ([Mobile First Indexing](https://webmasters.googleblog.com/2018/03/rolling-out-mobile-first-indexing.html)) por lo que una acción prioritaria para nuestra auditoría SEO debe ser asegurarnos de que nuestra web es accesible desde cualquier dispositivo mobile.

Es recomendable utilizar [Google Mobile Friendly Tool](https://search.google.com/test/mobile-friendly) para asegurarnos de que ofrecemos una experiencia correcta en cualquier dispositivo.
 
## Evitar el contenido duplicado
 
Nuestra página puede ser accedida de múltiples formas por lo que tenemos que asegurarnos de que únicamente facilitamos el acceso a una de ellas. Por ejemplo, los siguientes accesos podrían mostrar la misma página:
 
 - http://mipagina.com
 - https://mipagina.com
 - http://www.mipagina.com
 - https://www.mipagina.com
 
Debemos aplicar una **redirección 301** de todas las versiones hacia la que decidamos que será la permitida.

## Optimiza el tiempo de carga
 
El tiempo de acceso a una web es crucial tanto para usuarios como para buscadores. A continuación detallo algunos aspectos que podemos optimizar para hacer más rápido el tiempo de carga:
 
 - Reducir el número de peticiones de ficheros
 - Optimizar y comprimir el código HTML, CSS y JS
 - Optimizar el tamaño de las imágenes
 - Comprimir GZIP las peticiones entre servidor y usuario
 - Utilizar un CDN
 
Algunas de las herramientas que podemos utilizar son:
 
 - [GTMetrix](https://gtmetrix.com/), [Webpagetest](https://www.webpagetest.org/) o [Google Page Speed](https://developers.google.com/speed/pagespeed/insights/) para conocer problemas en el tiempo de carga.
 - [Kraken](https://kraken.io/) para optimizar el tamaño de las imágenes.
 
## Análisis del tráfico orgánico
 
El siguiente paso será analizar nuestro tráfico orgánico. El objetivo es conocer nuestra situación actual y la evolución seguida hasta este momento. A través de este análisis debemos ser capaces de identificar fortalezas y debilidades que se traduzcan en acciones.

 - Páginas que más tráfico SEO reciben
 - Términos por los que estamos posicionando
 - Opciones de mejora para captar más tráfico
 - Conversión del tráfico orgánico
 
## Monitorizar posicionamiento web
 
El siguiente paso será conocer por qué términos estamos posicionando y cruzar dicha información con el análisis del punto anterior. Así podremos saber qué camino de mejora tenemos por delante y las páginas y términos que debemos trabajar.

## Análisis del perfil de enlazado

Disponer de **enlaces de calidad** es realmente importante para conseguir un buen posicionamiento SEO. Debemos conseguir que nos enlacen páginas de la misma temática, diferentes dominios y con enlaces dentro de contenido. Es importante retirar cualquier **enlace tóxico** que nos pueda acarrera una penalización. Para revisar el perfil de enlazado podemos utilizar alguna de las siguientes herramientas:

 - [Ahrefs](https://ahrefs.com/)
 - [Majestic SEO](https://majestic.com/)

