---
title: Sitemap XML
description: Mejora el rastreo y la indexación de tu sitio web
lang: es_ES
date: 16/03/2022
author: Emirodgar
layout: default_1
folder: indexacion
permalink: sitemap-xml

---

Un fichero **sitemap XML** es un archivo que contiene una lista de todas las páginas de un sitio web (idealmente por las que queremos posicionar en los buscadores) y proporciona información adicional sobre cada página, como la fecha en que se actualizó por última vez, con el propósito de ayudar a los motores de búsqueda a [indexar](https://chuletaseo.com/indexacion) y comprender la estructura del sitio web.

## Pasos para generar un Sitemap XML

1. Comenzamos creando una lista completa de todas las páginas del sitio web, incluyendo las páginas principales y secundarias, las publicaciones de blog y cualquier otro tipo de contenido. Es importante organizar la lista en una jerarquía lógica que refleje la estructura del sitio web. Las páginas principales deben estar en la parte superior de la jerarquía, seguidas de las páginas secundarias y el contenido de nivel inferior.

2. Usamos una herramienta de generación de sitemap, como XML Sitemap Generator o Screaming Frog, para crear el archivo sitemap XML. Estas herramientas tienen dos modos de funcionamiento, o bien cargamos el listado generado en el punto anterior para que creen el sitemap con esas URL o hacemos que [rastrean el sitio](https://chuletaseo.com/inemular-rastreo) y generan un archivo sitemap XML automáticamente. En este último caso es posible que se incluyan URL poco relevantes o que no nos interese enviar a travésl del sitemap XML.

Un fichero sitemap XML es un listado de páginas. Utiliza la etiqueta `<urlset>` seguida de una serie de etiquetas `<url>` para cada página del sitio web.

En cada etiqueta `<url>`, se incluye la URL de la página, la fecha en que se actualizó por última vez y la frecuencia de actualización. También podemos hacer uso de la etiqueta `<priority>` para indicar la importancia relativa de cada página en comparación con otras del sitio.

## ¿Cómo enviar el fichero Sitemap XML a los buscadores?

El archivo sitemap XML se puede enviar a los motores de búsqueda a través de las herramientas de búsqueda de Google (Search Console) o Bing (Webmasters Tools) y también lo podemos referenciar desde el archivo `robots.txt`. Para esto último, bastará con incluir la siguiente instrucción:

```
Sitemap: nombre_sitemap.xml
```

## ¿Cómo generamos un archivo Sitemap XML?

Si necesitamos generar un sitemap XML con el listado de las páginas del sitio web, podemos hacer uso de múltiples herramientas gratuitas. Si preferimos hacerlo a mano, Lino ha compartido un sencillo código que podemos ejecutar directamente desde la consola de nuestro navegador. Para ello sólo necesitaremos sustituir las URL de nuestras páginas en el array de ```["url1", "url2", "url3"]``` y posteriormente ejecutar el siguiente código desde la consola de nuestro navegaor.

```
let text = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n <url>\n';
const urls = ["url1", "url2", "url3"];
urls.forEach(myFunction);
text += " </url>\n</urlset>";
console.log(text);
 
function myFunction(item, index) {
  text += "  <loc>" + item + "</loc>\n"; 
}

```


 


<section id="cs_recursos"></section>

## Recursos

 - `[Inglés]` - [Bing: importancia de usar el atributo lastmod en los sitemaps](https://blogs.bing.com/webmaster/february-2023/The-Importance-of-Setting-the-lastmod-Tag-in-Your-Sitemap/)

<section id="cs_herramientas"></section>

## Herramientas

- XML Sitemap Generator
- ScreamingFrog

<section id="cs_pr"></section>

