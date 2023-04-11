---
title: Migración SEO
description: Aprende a realizar una correcta migración SEO para evitar perder tráfico y posicionamiento.
lang: es_ES
date: 14/11/2022
author: Emirodgar
layout: default_1
folder: indexacion
permalink: migracion-seo


---

No pierdas posicionamiento ni tráfico SEO al cambiar de dominio, estructura o de plantilla web. Te enseño a seguir los pasos adecuados para asegurar una migración correcta.


## 1- Analizamos la estructura actual

El primer paso es identificar todas las páginas que componen nuestro sitio web. Para ello podemos hacer uso de herramientas como Google Search Console, ScreamingFrog, los ficheros sitemaps o los logs de servidor.

## 2- Cualificamos y clasificamos las páginas existentes

En este paso clasificaremos y organizaremos todas las páginas que hemos identificado según los criterios de **posicionamiento**, **tráfico** y **conversión**. Nuestro objetivo será disponer de dos bloques principales: páginas que queremos conservar y las que no.

### Páginas relevantes 

Dentro de este bloque ubicamos las páginas con un buen posicionamiento SEO, páginas que generan buen tráfico, páginas que asisten a la conversión y páginas que nos interesa conservar a nivel interno.

### Páginas con baja calidad
  
> En el caso de que se trata de URL que no están bajo nuestro control, podemos [solicitar su eliminación a Google](https://chuletaseo.com/eliminar-pagina-indexada-google).

Al igual que hemos identificado las páginas que queremos conservar debido a su relevancia, tenemos que ser conscientes de aquellas que no lo son. Crearemos otros dos bloques: páginas que actualmente dan error y páginas que no tendrán equivalente en la nueva versión.

## 3- Creamos el fichero de mapeado o redirección

> Cuando hacemos una migración es muy posible que se realicen cientos o miles de redirecciones. Para evitar que el servidor se sature y que afecte a la métrica TTFB (Time To First Byte), podemos realizar un mapeado de redirecciones (`Inglés` - [Mapeado de redirecciones para mejorar rendimiento del servidor tras una migración](https://gauravswaroop.medium.com/nginx-bulk-url-redirect-with-map-47c2cd6ad50a))

El objetivo de esta migración es que los buscadores entiendan el cambio de página web sin que este afecte al posicionamiento ni a la experiencia de los usuarios.

Para ello necesitamos aplicar redirecciones 301 (permanentes) entre las URL de la página antigua hacia la nueva página. Para hacer sencillo este paso, recomiendo generar un fichero de mapeado o redirección donde indicamos, por cada URL de la vieja estructura que queremos mantener, cuál será su equivalente en la nueva página.

### Páginas relevantes para la estrategia SEO

Serán redireccionadas, una a una, a su versión en la nueva web. Si no existiera, se recomienda generarla para poder mantener la popularidad y posicionamiento existentes.

### Páginas de baja calidad

Las páginas de baja calidad o que no se mantendrán en la nueva versión serán redireccionadas a categorías similares o a la página principal.

### Páginas con error

No deben ser redireccionadas y debemos asegurarnos que el código de estado HTTP devuelto es un error (así evitamos que se indexen).
  
## 4- Comprobamos que la página es accesible

Es bastante común que durante el desarrollo de una nueva web ésta sea bloqueada a la indexación de los buscadores para evitar miradas indiscretas y contenido duplicado. A veces ocurre que cuando se publica en producción los mecanismos que impiden su indexación siguen presentes y lastran su posicionamiento.

Para asegurarnos que nuestra nueva página es accesible, justo antes de la migración debemos comprobar que:

- No se está bloqueando desde el fichero robots.txt.
- No incluye la meta etiqueta noindex ni nofollow.

> En este punto es importante validar que el certificado de seguridad SSL es válido. Para ello podemos hacer uso de [esta herramienta](https://www.ssllabs.com/ssltest/index.html).

## 5- Comprobamos los códigos de medición

Es muy importante -de cara a poder evaluar el impacto de la migración- validar que los códigos de medición (plataforma analítica web, campañas de pago, modelos de atribución, etc.) están presentes en la nueva página. De no ser así, debemos incluirlos antes de la migración.

## 6- Envío y supervisión de la nueva estructura

Para ayudar a los buscadores a entender el cambio de estructura es importante, además de las redirecciones aplicadas en el fichero de mapeado, que dispongamos de un fichero sitemap XML que incluya todas las páginas relevantes de nuestro sitio web que queremos posicionar.

A través de Google Search Console y Bing Search Console podremos cargar dicho fichero y analizar la evolución de las páginas que son indexadas, las que dan error, etc.

A mayores, utilizaremos la [herramienta de cambio de dirección](https://support.google.com/webmasters/answer/83106?hl=es) de Google Search Console para informar al buscador del cambio de dominio.

## 7- Comprobaciones finales

Una vez ejecutada la migración debemos buscar posibles errores y subsanarlos a la mayor brevedad. Para ello recomiendo llevar a cabo las siguientes acciones:

- **Análisis del log de servidor**: Veremos en tiempo real qué páginas están dando error y podremos solucionarlo lo antes posible.

- **Análisis de enlazado interno**: A través de aplicaciones como ScreamingFrog analizaremos todas las páginas en busca de enlaces internos erróneos (páginas que han sido enlazadas de forma incorrecta y generar páginas de error) y otro tipo de problemas.

Los dos puntos anteriores deben ser llevados a cabo tras la migración porque podremos encontrar problemas casi en tiempo real. A continuación muestro otra opción a medio y largo plazo (como control) porque a corto plazo no será efectiva, pues tarda en actualizar los datos.

- **Análisis en Search Console**: Los buscadores nos indicarán qué páginas se han encontrado con error. Este es el último recurso, ya que para cuando aparezca un error en Search Console habrá pasado bastante tiempo. Aquí aparecerán, lógicamente, los que no hemos encontrado tras la migración o los nuevos que se han ido generando si se trata de una página dinámica. 



<section id="cs_recursos"></section>

## Recursos

- [Errores cometidos durante una migración](https://lukecarthy.com/blog/poundland-has-made-a-costly-ecommerce-mistake-and-heres-why/)
- `Inglés` - [The 2023 SEO Guide To Successful Website Migration](https://ipullrank.com/website-migration)

<section id="cs_herramientas"></section>

## Herramientas

- [Generador online de sitemaps XML](https://sitemapgenerator.xyz/)


