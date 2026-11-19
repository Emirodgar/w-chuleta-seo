---
title: Migración SEO - Guía paso a paso para no perder tráfico
description: "Cómo hacer una migración SEO sin perder posicionamiento: tipos de migración, mapa de redirecciones 301, lanzamiento, sitemaps, cambio de dirección y errores frecuentes."
lang: es_ES
date: 14/11/2022
date_modified: 19/11/2026
author: Emirodgar
layout: default_1
folder: indexacion
permalink: migracion-seo

---

Una migración SEO es cualquier cambio que modifica las URLs de un sitio o la forma en que los buscadores lo ven: dominio, estructura, protocolo o plantilla. Hecha con orden, no tiene por qué costar tráfico. Esta guía sigue el orden que uso y se apoya en las recomendaciones oficiales de Google para mover un sitio.
{:.lead}

1. Índice
{:toc}

## Tipos de migración

Google distingue las migraciones **con cambio de URLs** (las que trata su guía de mudanza de sitio) de las que no las cambian:

- **Cambio de protocolo:** de HTTP a HTTPS.
- **Cambio de dominio o de nombre de host:** a otro dominio, o unir varios dominios o subdominios.
- **Cambio en la ruta de las URLs:** por ejemplo, una estructura de carpetas nueva o quitar extensiones de fichero.
- **Sin cambio de URLs:** cambiar de hosting o de diseño manteniendo las direcciones. Tiene sus propias comprobaciones.

Dos consejos que repite Google y que comparto:

- **Haz un cambio cada vez.** Primero el dominio, después el diseño. Cambiar todo a la vez dificulta saber qué ha fallado.
- **Programa la migración en una época de poco tráfico.** Y migra de una sola vez si el sitio es pequeño o mediano. Solo los sitios muy grandes deberían hacerlo por secciones.

## Antes de empezar: guarda la línea base

Es mi aportación a la lista oficial: sin datos de partida no sabrás si la migración ha ido bien. Guarda, como mínimo:

- Un export de **Search Console** (páginas y consultas) de los últimos 12 meses.
- Un export de **analítica** con las páginas de más tráfico y conversión.
- Un **rastreo completo** de la web actual, con sus códigos de estado, títulos, canonicals y enlaces internos.
- Las **posiciones** de tus 50-100 términos principales.

## 1. Analiza la estructura actual

Identifica todas las URLs del sitio. Combina varias fuentes para no dejarte ninguna: sitemaps, rastreo con Screaming Frog, Search Console, la analítica, los logs del servidor y el propio CMS. Incluye también imágenes, vídeos, CSS y JavaScript si reciben tráfico o enlaces.

## 2. Clasifica las páginas

Organiza cada URL según su **posicionamiento**, **tráfico** y **conversión**. El objetivo es separar dos bloques:

- **Páginas que quieres conservar:** buen posicionamiento, tráfico, apoyo a la conversión o importancia interna.
- **Páginas que no:** de baja calidad, que dan error o que no tendrán equivalente en la web nueva.

> Si se trata de URLs que no están bajo tu control, puedes [solicitar su eliminación a Google](https://chuletaseo.com/eliminar-pagina-indexada-google).

## 3. Crea el mapa de redirecciones

Es el documento más importante de la migración: una tabla con la URL antigua y su equivalente en la nueva. Reglas que conviene seguir:

- **Redirección permanente** (301 o 308) de cada URL antigua a su destino definitivo.
- **Directa al destino final.** Evita las cadenas de redirecciones. Google recomienda, como mucho, unos pocos saltos, y lo ideal es uno.
- **Una a una para las páginas relevantes.** Si una página no tiene equivalente, crea una antes de migrar para mantener su posicionamiento.
- **No mandes todo a la portada.** Redirigir muchas URLs a una página genérica no es una buena equivalencia. Para páginas que desaparecen, redirige a una categoría similar solo si es de verdad equivalente. Si no, deja que devuelvan 404 o 410.
- **Páginas con error: no las redirijas.** Deben devolver un código de error (404 o 410), para evitar que se indexen.

> Cuando hay cientos o miles de redirecciones conviene resolverlas con un mapeo eficiente para no saturar el servidor ni empeorar el TTFB. En Nginx, por ejemplo, con la directiva `map` ([guía en inglés](https://gauravswaroop.medium.com/nginx-bulk-url-redirect-with-map-47c2cd6ad50a)). En Apache tienes ejemplos en la guía de [códigos .htaccess](https://chuletaseo.com/codigos-htaccess-apache).

## 4. Prepara la web nueva

Antes del lanzamiento, comprueba en la web nueva que:

- Los **canonical** son autorreferenciados y apuntan a las URLs nuevas.
- Los **enlaces internos** y los **hreflang** (si los hay) usan las URLs nuevas.
- El contenido, las imágenes y los ficheros están migrados.
- El **certificado SSL** es válido, si pasas a HTTPS. Puedes comprobarlo con [SSL Labs](https://www.ssllabs.com/ssltest/index.html).
- El servidor aguanta el aumento de rastreo que provoca una migración.
- Tienes **verificadas en Search Console** todas las variantes del sitio antiguo y del nuevo.

### Comprueba que la web es accesible

Es muy común que una web en desarrollo esté bloqueada para los buscadores. El problema llega cuando esos bloqueos siguen activos al publicarla. Justo antes de migrar, comprueba que:

- No se bloquea desde `robots.txt`.
- No incluye `noindex` ni `nofollow` en la meta etiqueta ni en la cabecera HTTP.

## 5. Revisa los códigos de medición

Para evaluar el impacto de la migración, la web nueva debe tener la analítica, las campañas de pago y los píxeles de atribución antes del lanzamiento.

## 6. Lanza la migración

El orden recomendado por Google:

1. **Activa las redirecciones** del mapa, de la URL antigua directamente a la nueva.
2. **Comprueba el resultado:** que los canonical, los `noindex` y las redirecciones funcionan como esperabas. Prueba una muestra de URLs de cada tipo (con `curl -I`, por ejemplo).
3. **Herramienta de cambio de dirección** en Search Console, solo si cambias de **dominio o subdominio**. No hace falta para pasar de HTTP a HTTPS, de `www` a sin `www` ni para cambiar rutas. Si cambias de dominio, envíala para todas las variantes verificadas. Tienes [la ayuda oficial](https://support.google.com/webmasters/answer/9370220?hl=es).
4. **Mantén las redirecciones al menos un año.** Más, si siguen recibiendo enlaces o tráfico.
5. **Envía el sitemap nuevo** a Search Console. Durante un tiempo, mantén también el antiguo: es normal que avise de redirecciones, y con los días las páginas indexadas del antiguo bajan mientras suben las del nuevo.
6. **Actualiza cuanto antes** los enlaces internos, los externos que controles (perfiles sociales, directorios, campañas) y los de tus herramientas.

## 7. Supervisa tras el lanzamiento

Busca errores y corrígelos cuanto antes. Estas son las revisiones, de más rápida a más lenta:

- **Análisis del log del servidor.** Muestra casi en tiempo real qué URLs dan error y qué rastrea Google.
- **Rastreo de la web nueva** con Screaming Frog u otra herramienta, para detectar enlaces internos rotos, cadenas de redirecciones y canonical erróneos.
- **Search Console.** El informe de indexación y el de estadísticas de rastreo. Es la última línea de defensa, porque los errores tardan en aparecer.
- **Compara con la línea base** del principio: tráfico, páginas indexadas y posiciones.

## Cuánto tarda en recuperarse

Es normal que la visibilidad fluctúe durante semanas. Según Google, el proceso puede tardar unas semanas en un sitio pequeño o mediano, y más en uno grande. Depende del número de URLs y de la velocidad del servidor, y Google no da un plazo fijo. Si pasados varios meses el tráfico sigue claramente por debajo de la línea base, revisa los errores de la lista siguiente.

## Errores frecuentes

- **Dejar el `noindex` o el bloqueo de `robots.txt`** que solo servían durante el desarrollo.
- **Redirigir a URLs que no existen** o a páginas que no son equivalentes.
- **Cadenas de redirecciones** o redirigir todo a la portada.
- **Olvidar el sitemap nuevo** y los enlaces internos.
- **Cambiar demasiadas cosas a la vez.**
- **No tener una línea base** para comparar.
- **Servidor sin capacidad** para el pico de rastreo.

<section id="cs_recursos"></section>

## Recursos

- [Mudanza de un sitio con cambios de URL (documentación de Google)](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)
- [Herramienta de cambio de dirección de Search Console](https://support.google.com/webmasters/answer/9370220?hl=es)
- `Inglés` - [The SEO Guide to Successful Website Migration (iPullRank)](https://ipullrank.com/website-migration)
- `Inglés` - [La localización del CDN no afecta al SEO](https://www.seroundtable.com/google-international-seo-cdn-location-does-not-matter-35170.html)
- [Errores cometidos durante una migración](https://lukecarthy.com/blog/poundland-has-made-a-costly-ecommerce-mistake-and-heres-why/)
- Guías relacionadas: [códigos .htaccess](https://chuletaseo.com/codigos-htaccess-apache), [sitemap XML](https://chuletaseo.com/sitemap-xml) y [eliminar páginas del índice](https://chuletaseo.com/eliminar-pagina-indexada-google)

<section id="cs_herramientas"></section>

## Herramientas

- [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/): rastreo del sitio antes y después de migrar.
- [Google Search Console](https://search.google.com/search-console): indexación, errores y cambio de dirección.
- [SSL Labs](https://www.ssllabs.com/ssltest/index.html): comprobación del certificado SSL.

## Preguntas frecuentes

**¿Qué es una migración SEO?** Es el cambio de dominio, de estructura de URLs, de protocolo o de plataforma de un sitio, planificado para que los buscadores entiendan el cambio y no se pierda posicionamiento.

**¿Durante cuánto tiempo hay que mantener las redirecciones?** Google recomienda mantenerlas al menos un año, y más si las URLs antiguas siguen recibiendo enlaces o tráfico.

**¿Hay que usar la herramienta de cambio de dirección de Search Console?** Solo si cambias de dominio o de subdominio. No hace falta para pasar de HTTP a HTTPS, de www a no-www ni para cambios de ruta.

**¿Cuánto tarda en recuperarse el tráfico tras migrar?** Es normal una fluctuación durante semanas. Según Google, el proceso puede tardar unas semanas en sitios pequeños y medianos, y más en los grandes.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Qué es una migración SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Es el cambio de dominio, de estructura de URLs, de protocolo o de plataforma de un sitio, planificado para que los buscadores entiendan el cambio y no se pierda posicionamiento." } },
    { "@type": "Question", "name": "¿Durante cuánto tiempo hay que mantener las redirecciones en una migración?", "acceptedAnswer": { "@type": "Answer", "text": "Google recomienda mantenerlas al menos un año, y más si las URLs antiguas siguen recibiendo enlaces o tráfico." } },
    { "@type": "Question", "name": "¿Hay que usar la herramienta de cambio de dirección de Search Console?", "acceptedAnswer": { "@type": "Answer", "text": "Solo si cambias de dominio o de subdominio. No hace falta para pasar de HTTP a HTTPS, de www a no-www ni para cambios de ruta." } },
    { "@type": "Question", "name": "¿Cuánto tarda en recuperarse el tráfico tras una migración?", "acceptedAnswer": { "@type": "Answer", "text": "Es normal una fluctuación durante semanas. Según Google, el proceso puede tardar unas semanas en sitios pequeños y medianos, y más en los grandes." } }
  ]
}
</script>
