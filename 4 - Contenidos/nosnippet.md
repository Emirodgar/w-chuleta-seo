---
title: Evita fragmentos de texto y vistas previas en Google
description: 
date: 22/03/2023
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

El `nosnippet` es una etiqueta de HTML que se puede usar para indicarle a Google que **no muestre fragmentos de texto** en los resultados de búsqueda para una página web en particular.
Esta etiqueta se puede utilizar para proteger la privacidad de la información o para evitar que se muestren extractos de texto que no reflejen adecuadamente el contenido de la página (no se pueden entender si falta contexto).

Para usar el nosnippet, simplemente debes agregar la etiqueta a la sección de encabezado (`header`) de tu página web. 

```
<meta name="robots" content="nosnippet">
```

Es importante mencionar que aunque esta etiqueta puede ayudar a proteger la privacidad y el contenido de tu sitio web, también puede afectar negativamente su visibilidad en los resultados de búsqueda de Google. Por lo tanto, se recomienda usarla con precaución y solo en casos específicos donde sea necesario.

## Sólo quiero limitar una parte de mi contenido

En el caso de que no queramos que `nosnippet` afecte a todo el sitio, podemos utilizar el atributo HTML `data-nosnippet` en los elementos `span`, `div` y `section`. Todo lo que esté dentro de un bloque que tenga el atributo `data-nosnippet` no será tenido en cuenta para generar fragmentos de texto ni vistas previas.