---
title: Evita fragmentos de texto y vistas previas en Google
description: 
date: 22/03/2023
date_modified: 19/11/2026
folder: contenidos
author: Emirodgar
layout: default_1
permalink: nosnippet
  
---


Si facilitamos el [rastreo e indexación](https://chuletaseo.com/emular-rastreo) de nuestro sitio web podremos **aparecer en los resultados de búsqueda**.

Si [Googlebot](https://chuletaseo.com/identificar-robots-busqueda) considera que tiene suficiente información de valor sobre nuestra página, podría generar resultados enriquecidos.
Un resultado enriquecido en Google, también conocido como **rich snippet**, es una característica de los resultados de búsqueda de Google que muestra información adicional y destacada sobre una página web específica.

> Los resultados enriquecidos se muestran en un formato especial que puede incluir imágenes, videos, reseñas, precios, calificaciones y otra información relevante que puede atraer la atención de los usuarios y hacer que su página web se destaque en los resultados de búsqueda.

Los resultados enriquecidos pueden mejorar la visibilidad de una página web y aumentar la tasa de clics de los usuarios, ya que ofrecen información más detallada y relevante sobre el contenido de la página. Además, pueden ayudar a los propietarios de sitios web a destacarse de la competencia y atraer más tráfico a su sitio.

En algunos casos, Google puede generar un fragmento de texto y/o vista previa de nuestro sitio. Si no queremos que haga eso, para no ofrecer un contexto equivocado o porque preferimos que los usuarios visiten nuestra web, podemos hacer uso de **nosnippet**.

## Cómo usar nosnippet

El `nosnippet` es una directiva de la etiqueta `meta robots` (también se puede enviar en la cabecera HTTP `X-Robots-Tag`) que indica a Google que **no muestre fragmentos de texto ni vistas previas de vídeo** en los resultados de búsqueda para una página web en particular. Según la [documentación oficial](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=es), una miniatura de imagen estática todavía puede mostrarse.
Esta directiva se puede utilizar para proteger la privacidad de la información o para evitar que se muestren extractos de texto que no reflejen adecuadamente el contenido de la página (no se pueden entender si falta contexto).

Para usar el nosnippet, simplemente debes agregar la etiqueta a la sección `head` de tu página web. 

```
<meta name="robots" content="nosnippet">
```

Es importante mencionar que aunque esta etiqueta puede ayudar a proteger la privacidad y el contenido de tu sitio web, también puede afectar negativamente su visibilidad en los resultados de búsqueda de Google. Por lo tanto, se recomienda usarla con precaución y solo en casos específicos donde sea necesario.

> `nosnippet` se aplica a la Búsqueda web, Imágenes y Discover, y también impide que Google use el contenido como entrada directa para **AI Overviews y AI Mode**. Si quieres entender qué implica esto para tu visibilidad en respuestas generativas, consulta la [Chuleta GEO](https://chuletaseo.com/chuleta-geo).

## Limitar la longitud del fragmento con max-snippet

Si no quieres eliminar el fragmento por completo, puedes limitar su longitud con `max-snippet:[número]`, que indica el máximo de caracteres de texto. `max-snippet:0` equivale a `nosnippet` y `max-snippet:-1` deja la longitud a criterio de Google. Si hay reglas en conflicto, prevalece la más restrictiva.

```
<meta name="robots" content="max-snippet:160">
```

Esta directiva no afecta a las vistas previas de imagen o vídeo ni a los datos estructurados de los resultados enriquecidos.

## Sólo quiero limitar una parte de mi contenido

En el caso de que no queramos que `nosnippet` afecte a todo el sitio, podemos utilizar el atributo HTML `data-nosnippet` en los elementos `span`, `div` y `section`. Todo lo que esté dentro de un bloque que tenga el atributo `data-nosnippet` no será tenido en cuenta para generar fragmentos de texto ni vistas previas.

Algunas precauciones que indica Google: el HTML debe ser válido y estar bien cerrado (un `div` sin cerrar incluiría todo el contenido posterior), no se debe añadir ni quitar `data-nosnippet` de nodos existentes mediante JavaScript (si insertas elementos con JavaScript, deben incluir ya el atributo) y, aunque contenga un valor, éste se ignora porque es un atributo booleano.

```
<p>Este texto puede aparecer en el fragmento. <span data-nosnippet>Este no.</span></p>
```