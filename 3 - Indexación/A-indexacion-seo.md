---
title: Indexación
description: Mejora el rastreo y la indexación de tu sitio web
lang: es_ES
date: 16/03/2022
date_modified: 23/02/2023
author: Emirodgar
layout: default_1
folder: indexacion
permalink: indexacion

---




La **indexación SEO** se refiere a la inclusión de las páginas de un sitio web en el índice de un motor de búsqueda. Una vez que estén indexadas, podrán aparecer en los resultados de búsqueda y por ende, podremos aspirar a captar tráfico orgánico. 

> Antes de nada asegúrate de que tu página puede ser rastreada por los robots de búsqueda. Puedes hacerlo [emulando un rastreo](https://chuletaseo.com/emular-rastreo).

Una vez que sabemos que nuestra página puede ser accedida por los motores de búsqueda, es decir, **no existen barreras para la indexación**, podemos avanzar con otras tareas que nos ayudarán a mejorar nuestra indexación.


1. **Verifica la indexación actual de tu sitio web**: Utiliza el comando `site:` en la barra de búsqueda de Google para verificar cuántas páginas de tu sitio web están indexadas. Si el número de páginas indexadas es significativamente menor que el número de páginas de tu sitio web, es posible que haya problemas de indexación que deban abordarse. Este comando no es exacto, pero nos servirá para hacernos una idea acerca de lo que Google ha indexado.

2. **Genera un mapa del sitio XML (sitemap Xml)**: Un [Sitemap XML](https://chuletaseo.com/sitemap-xml) es un fichero que contiene una lista de todas las páginas de tu sitio web que quieres indexar. Para informar a los buscadores tenemos varias opciones, a través del fichero robots.txt con la instrucción `Sitemap: fichero.xml` o directamente desde Google Search Console o Bing Webmasters Tools podemos enviarlos.

De cara a la indexación, este fichero será crucial dado que desde las plataformas antes mencionadas podremos hacer seguimiento de las URL enviadas en el sitemap y saber cuáles de ellas han sido indexadas y, las que aún no lo están, conocer el motivo.

3. **Utiliza metaetiquetas adecuadas**: Las metaetiquetas, como la etiqueta de título `title` y la etiqueta de descripción `description`, son importantes para que los motores de búsqueda comprendan el contenido de tu sitio web y lo muestren correctamente en los resultados de búsqueda. Utiliza metaetiquetas claras y concisas en cada página de tu sitio web.

4. **Asegúrate de que tus páginas se carguen rápidamente**: si tu página es accesible y rápida, ayudará a que el robot de búsqueda la rastree con mayor facilidad. [Optimizar el tiempo de carga](https://chuletaseo.com/optimizar-tiempo-carga) y la experiencia de usuario son aspectos fundamentales de cualquier estrategia.

5. **Utiliza un diseño responsive** para que sean accesibles en dispositivos móviles y utiliza etiquetas semánticas para ayudar a los motores de búsqueda a comprender el contenido de tu sitio web. En el caso de utilizar `JavaScript`, debes asegurarte que el [renderizado de la web](https://chuletaseo.com/renderizado-javascript) es accesible a los robots de los buscadores 

6. **Crea contenido de calidad**: El contenido de calidad es fundamental para que los motores de búsqueda indexen y clasifiquen tu sitio web. Crea contenido relevante y útil para tus usuarios, utiliza palabras clave relevantes y actualiza regularmente el contenido de tu sitio web.

7. **Ofrece contenido de calidad**: En SEO debemos buscar calidad antes que cantidad, por lo que no hay que tener miedo de [eliminar páginas de bajo valor](https://chuletaseo.com/eliminar-pagina-indexada-google); esto beneficiará el proceso de indexación global del sitio.


> Si estamos recibiendo muchas peticiones de rastreo de Googlebot y queremos reducir su impacto en nuestro servidor, [debemos usar el código `429`](https://developers.google.com/search/blog/2023/02/dont-404-my-yum) con el que le indicaremos `too many requests` (muchas peticiones). Debemos evitar devolver errores de ``403` o `404` ya que el robot lo interpretará de otra manera.

## Migración

A lo largo de la vida útil de una empresa, se puede cambiar varias veces de página web. Para garantizar que mantenemos el tráfico y popularidad existentes será necesario aplicar un proceso de [migración SEO](https://chuletaseo.com/migracion-seo) que garantice que tanto robots de búsqueda como usuarios son redireccionados correctamente desde las viejas URL a las nuevas.




<section id="cs_recursos"></section>

## Recursos

- `[Inglés]` - [Cómo crear una estrategia de indexación para tu página web](https://www.onely.com/blog/how-to-create-an-indexing-strategy-for-your-website)
- `[Inglés]` - [Cómo analizar los logs de tu servidor](https://ahrefs.com/blog/log-file-analysis)
- `[Inglés]` - [¿Qué significa en GSC descubiertas pero aún no indexadas?](https://searchengineland.com/understanding-resolving-discovered-currently-not-indexed-392659)
- `[Inglés]` - [No uses los códigos de respuesta 403 ni 404 para gestionar el rastreo de Googlebot](https://developers.google.com/search/blog/2023/02/dont-404-my-yum)
- `[Inglés]` - [Cómo corregir errores 404 tras eliminar la versión AMP de una página](https://omisido.com/how-to-fix-error-404-on-amp-pages-after-deactivating-the-amp-plugin/)
- [Versiones idiomáticas / localizadas de tus páginas web (hreflang)](https://developers.google.com/search/docs/specialty/international/localized-versions?hl=es)

<section id="cs_herramientas"></section>

## Herramientas

- [ScreamingFrog](https://www.screamingfrog.co.uk/seo-spider/)
- [Herramienta para validar las etiquetas hreflang](http://hreflang.seovis.de/)
- `[Inglés]` - [Checklist para migraciones SEO](https://www.mikeginley.com/blog/pre-post-launch-seo-audit-checklist)

<section id="cs_pr"></section>



