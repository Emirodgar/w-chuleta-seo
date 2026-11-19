---
title: Parámetro srsltid de Google - Qué es y cómo gestionarlo en GA4 y Search Console
description: "Qué es el parámetro srsltid que Google añade a tus URLs, si afecta al SEO y cómo limpiarlo en GA4, BigQuery y Search Console: canonical, etiquetado automático de Merchant Center y qué no hacer."
date: 19/11/2026
folder: indexacion
author: Emirodgar
layout: default_1
permalink: parametro-srsltid

---

El parámetro **srsltid** es una cadena que Google añade al final de algunas URLs en sus resultados (`tuweb.com/pagina?srsltid=...`). Aparece en tus informes de analítica como páginas duplicadas y, aunque no perjudica al posicionamiento, **ensucia la medición**. Aquí tienes qué es, cómo detectarlo y las formas de gestionarlo.
{:.lead}

<p><a class="btn js-nl-cta" data-cta="srsltid" href="https://newsletter.chuletaseo.com/p/el-misterio-del-parametro-srsltid?utm_source=chuletaseo.com&amp;utm_medium=guia&amp;utm_campaign=srsltid">Ver la edición de la newsletter</a></p>

1. Índice
{:toc}

## Qué es srsltid

Google Analytics lo define como un parámetro [que se añade a los enlaces generados por Google Merchant Center en los resultados orgánicos de compras](https://support.google.com/analytics/answer/11479699?hl=en){:target="_blank"}. Su ejemplo es `www.example.com?srsltid=123xyz`.

Nació para el **etiquetado automático** de Merchant Center: si lo tienes activado, Analytics clasifica esas visitas como origen Google, medio Organic, plataforma de origen y campaña "Shopping Free Listings", y las incluye en el grupo de canales predeterminado "Organic Shopping".

Lo que lo hizo visible es que ya no se limita a las fichas de producto. [Search Engine Journal recogió en 2025](https://www.searchenginejournal.com/googles-srsltid-parameter-appears-in-organic-urls-creating-confusion/549967/){:target="_blank"} que se ve en URLs orgánicas de todo tipo, también de blogs y de la página de inicio.

## ¿Afecta al SEO?

**Al posicionamiento, según Google, no.** John Mueller dijo que el parámetro no causa problemas para la búsqueda. Además, según [un comentario recogido en el foro de Search Central](https://www.searchenginejournal.com/googles-srsltid-parameter-appears-in-organic-urls-creating-confusion/549967/){:target="_blank"}, el parámetro se añade de forma dinámica y esas URLs no figuran como indexadas en Search Console. Es una opinión de un Product Expert, no una documentación oficial.

**A la medición, sí:**

- **Páginas duplicadas en GA4.** La misma página aparece con muchas URLs distintas y su tráfico se reparte entre ellas.
- **Informes de páginas inflados.** Si exportas o agrupas por URL, el número de páginas parece mayor del real.
- **BigQuery.** [Un análisis del export de GA4](https://stuifbergen.com/2024/07/srsltid-parameter-ga4-and-big-query/){:target="_blank"} indica que el valor se guarda aparte en `collected_traffic_source.srsltid` y que `page_location` puede venir alterado, de modo que una misma página genera muchos valores únicos.
- **Search Console.** Un estudio de terceros (Oncrawl, recogido por Search Engine Journal) vio que los clics e impresiones de URLs con el parámetro caían a cero hacia septiembre, aunque las páginas seguían apareciendo.

## Cómo detectarlo en tu sitio

1. **GA4:** en un informe o una exploración, usa la dimensión "Página de destino + cadena de consulta" (o la URL completa) y filtra las que contengan `srsltid`.
2. **Canal:** si ves tráfico en "Organic Shopping" y tu sitio no es una tienda, es la señal más clara de que el etiquetado automático está activo.
3. **Search Console:** en el informe de rendimiento, filtra páginas por URL que contenga `srsltid`.
4. **Rastreo propio:** si tu rastreador tiene el parámetro en las URLs, revisa que las canonical apunten a la versión limpia.

## Qué hacer: dos caminos

### Opción A. Desactivar el etiquetado automático

Es lo más limpio si **no usas** Merchant Center para medir tus fichas gratuitas. Las guías de terceros señalan esta ruta en Merchant Center: *Herramientas y ajustes → Configuración de conversiones → Etiquetado automático*. Antes de tocarlo, ten en cuenta:

- **Pierdes atribución.** Desactivarlo quita la medición del rendimiento de las fichas gratuitas en Analytics.
- **Puede reactivarse.** Algunas fuentes informan de que el ajuste vuelve a activarse en algunos casos, por ejemplo con integraciones de Shopify. Compruébalo cada cierto tiempo.
- **Puede no desaparecer del todo.** Hay informes de sitios en los que el parámetro siguió apareciendo.
- **Alternativa con UTM.** Si quieres seguir midiendo, etiqueta tú mismo con UTM.

Google no documenta con pasos propios cómo apagarlo en la ayuda de Analytics que he consultado. Verifica la ruta en la ayuda actual de Merchant Center.

### Opción B. Mantenerlo y limpiarlo

Si necesitas los datos de Merchant Center o no puedes tocar la cuenta:

- **Canonical a la URL limpia.** Cada página debe tener una etiqueta canonical absoluta sin parámetros. Es la recomendación que más se repite.
- **Excluir el parámetro en GA4.** GA4 permite [redactar parámetros de URL](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/DataRedactionSettings){:target="_blank"} en los campos de URL del evento, y la coincidencia no distingue mayúsculas. Se configura en el flujo de datos web, en "Redact data". Esto también quita el parámetro de tus datos, así que pierdes la posibilidad de distinguir esas visitas.
- **Limpiar la URL con Google Tag Manager.** Alternativa si quieres conservar el dato en otro campo: una variable que devuelve la URL sin el parámetro, y que se usa como `page_location`. Requiere una implementación personalizada.
- **Ignorarlo en la caché.** Configura el CDN o el servidor para que `srsltid` no forme parte de la clave de caché, así no se duplican las copias.
- **Limpiar en BigQuery.** Quita el parámetro de `page_location` antes de contar páginas:

```sql
REGEXP_REPLACE(
  REGEXP_REPLACE(page_location, r'([?&])srsltid=[^&#]*&?', r'\1'),
  r'[?&]$', ''
) AS page_limpia
```

Esta expresión no la he probado con tus datos: compruébala con unas cuantas filas antes de usarla.

## Lo que no funciona

- **Bloquearlo en robots.txt.** No evita que las URLs aparezcan en los resultados, según varias fuentes.
- **La herramienta de parámetros de URL de Search Console.** Google la retiró en 2022, así que no sirve para esto.

## Checklist

- [ ] ¿Aparece tráfico con `srsltid` en GA4? Mide cuánto representa.
- [ ] ¿Usas Merchant Center? Decide entre apagar el etiquetado o limpiar.
- [ ] Canonical absoluta y sin parámetros en todas las plantillas.
- [ ] Parámetro redactado o limpiado en GA4 (flujo web o GTM).
- [ ] CDN y caché ignoran `srsltid`.
- [ ] Si exportas a BigQuery, limpia `page_location` antes de agrupar.
- [ ] Revisa la configuración cada cierto tiempo: puede reactivarse.

<section id="cs_recursos"></section>

## Recursos

- [El misterio del parámetro srsltid (newsletter)](https://newsletter.chuletaseo.com/p/el-misterio-del-parametro-srsltid){:target="_blank"}
- [Conectar Google Merchant Center con Google Analytics](https://support.google.com/analytics/answer/11479699?hl=en){:target="_blank"}
- [Search Engine Journal: srsltid en URLs orgánicas](https://www.searchenginejournal.com/googles-srsltid-parameter-appears-in-organic-urls-creating-confusion/549967/){:target="_blank"}
- [srsltid, GA4 y BigQuery (Stuifbergen)](https://stuifbergen.com/2024/07/srsltid-parameter-ga4-and-big-query/){:target="_blank"}
- [Google Analytics 4: guía](https://chuletaseo.com/google-analytics)
- [Herramientas SEO](https://chuletaseo.com/herramientas-seo)

<section id="cs_pr"></section>

## Preguntas y respuestas

<div class="row">
          <div class="col-lg-12">
            <div class="accordion accordion-alterate arrow-right" id="popularTopics">
              <div class="card">
                <div class="card-header" id="heading1">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">¿El parámetro srsltid perjudica mi posicionamiento?</a> </h5>
                </div>
                <div id="collapse1" class="collapse" aria-labelledby="heading1" data-parent="#popularTopics">
                  <div class="card-body">Según John Mueller, de Google, no causa problemas para la búsqueda. Lo que sí estropea es la medición: duplica URLs en tus informes y reparte el tráfico de una misma página en muchas filas.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading2">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">¿Puedo bloquear srsltid en robots.txt?</a> </h5>
                </div>
                <div id="collapse2" class="collapse" aria-labelledby="heading2" data-parent="#popularTopics">
                  <div class="card-body">No sirve. Varias fuentes coinciden en que bloquearlo no impide que esas URLs aparezcan en los resultados, porque el parámetro se añade de forma dinámica. Es mejor una etiqueta canonical a la URL limpia.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading3">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">¿Tengo que desactivar el etiquetado automático de Merchant Center?</a> </h5>
                </div>
                <div id="collapse3" class="collapse" aria-labelledby="heading3" data-parent="#popularTopics">
                  <div class="card-body">Depende de si usas esos datos. Si no usas Merchant Center para medir las fichas gratuitas, desactivarlo es lo más limpio. Si lo usas, pierdes esa atribución al apagarlo, y es preferible mantenerlo y limpiar el parámetro en el análisis.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading4">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">¿Por qué me aparece srsltid si no tengo tienda online?</a> </h5>
                </div>
                <div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#popularTopics">
                  <div class="card-body">Porque el parámetro se ve ahora en resultados orgánicos de cualquier tipo de página, no solo de producto. Si tu sitio está conectado a Merchant Center con el etiquetado automático activo, es el primer sitio donde mirar. Algunas fuentes indican casos sin cuenta de Merchant Center, y en ellos no hay un ajuste que desactivar.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading5">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">¿Cómo sé cuánto tráfico me llega con srsltid?</a> </h5>
                </div>
                <div id="collapse5" class="collapse" aria-labelledby="heading5" data-parent="#popularTopics">
                  <div class="card-body">En GA4 filtra la dimensión página de destino (o la URL completa) por las que contienen srsltid. En Search Console puedes filtrar por URL que contenga el parámetro, aunque no esperes ver ahí las URLs como indexadas.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
