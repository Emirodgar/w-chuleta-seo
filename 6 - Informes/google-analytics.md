---
title: Google Analytics 4
description: Configurar esta herramienta de medición web nos ayudará a medir y alcanzar nuestros objetivos SEO
date: 26/10/2022
date_modified: 21/02/2023
folder: informes
layout: default_1
permalink: google-analytics
author: Emirodgar
  
---

<div class="alert alert-warning"><span class="badge badge-danger text-uppercase mr-2">GA3</span> Google Analytics Universal dejará de funcionar en julio de 2023.</div>


## Instalar y configurar Google Analytics 4

{:.lead} GA4 es una herramienta de análisis estadístico

>   Google Analytics Universal `GA3` [dejará de estar disponible en julio de 2023](https://support.google.com/analytics/answer/11583528?hl=es). Si aún no has hecho la migración a `GA4`, no tardes más para poder generar histórico lo antes posible. En el caso de usar Analytics 360 (la versión de pago), [podremos seguir usando la versión Universal](https://blog.google/products/marketingplatform/analytics/turn-insights-roi-google-analytics/) (Universal) hasta 2024.

> Existe una [certificación oficial de Google Analytics](https://skillshop.exceedlms.com/student/path/508845-google-analytics-certification).

La mejor aproximación es instalar el código de Google Analytics 4 a través de Google Tag Manager `GTM`, un gestor de códigos que optimizará la carga de nuestra página y nos permitirá tener todos los píxeles centralizados en un único lugar.

## Nombre estandarizado

A la hora de trabajar es ideal que usemos un estándar en la nomenclatura que vayamos a emplear. Nuestra recomendación es la siguiente:

- **Etiquetas**: TAG - Nombre servicio - descripción
- **Disparadores** : TRIGGER - Tipo - descripción
- **Variables**: VAR - Tipo - descripción

## Comercio electrónico en GA4

GA4 cuenta con el módulo de monetización, lo que equivaledría al comercio electrónico que teníamos en GA3 o Universal. La manera más sencilla de registrar nuestras ventas es hacerlo a través de Google Tag Manager y la capa de datos.  Te dejamos las instrucciones en [Google Analytics Ecommerce](/google-analytics-ecommerce).

### GA4 en Shopify

A día de hoy no hay conector nativo de GA4 dentro de Shopify. Si introducimos el código, podremos medir la captación pero la capa de información relativa al comercio electrónico no funcionará.

Si queremos avanzar de nuestro lado, podemos hacerlo con lo siguiente:

 - `Inglés` -  [How to Set up Google Analytics 4 on Shopify - GTM + Ecommerce Data layers](https://www.youtube.com/watch?v=hag6ucGxj5E)
 - `Inglés` -  [Set up Google Analytics 4 (GA4) on Shopify](https://analyzify.app/shopify-google-analytics/ga4)
 - `Inglés` -  [Shopify GA4 Kit](https://analyzify.app/shopify-ga4-kit)

 
 <section id="cs_recursos"></section>

## Recursos

- `Inglés` - [Guía de expresiones regulares para SEO](https://www.jcchouinard.com/regex-for-seo/)
- `Inglés` - [Informe Looker para auditar implementación GA4](https://datastudio.google.com/u/0/reporting/ced29b32-72ec-4b6c-a41c-7c47b39bac60/page/p_hfbfof53yc)
- `Inglés` - [Códigos de GTM listos para ser usados](https://www.analyticsmania.com/google-tag-manager-recipes/)
- `Inglés` - [Discrepancia en conversiones de Analytics y Ads](https://newmetrics.io/knowledge-base/google-ads-analytics-discrepancies/)
- `Inglés` - [Eventos personalizados en Google Analytics 4](https://www.youtube.com/watch?v=QmEOPuJr05w&list=UUJ5UyIAa5nEGksjcdp43Ixw&index=1)
- `Inglés` - [Listado de dimensiones y métricas de GA4 Spy](https://data.ga4spy.com/)
- `Inglés` - [Cómo saltarse las limitaciones de umbral aplicado en los datos](https://www.analyticsmania.com/post/thresholding-applied-in-google-analytics-4-do-this/)- `Inglés` - [20 alternativas a Google Analytics](https://moz.com/blog/google-analytics-alternatives)
- `Inglés` - [Razones por las que tus datos de GA4 no coinciden](https://analyticscanvas.com/3-reasons-your-ga4-data-doesnt-match/)
- `Inglés` / `vídeo oficial` / [Ingestión de datos con Measurement Protocol y Data Import](https://www.youtube.com/watch?v=VVkrwXkbwEg)
- [Cómo combinar la fuente de datos de Google Search Console con datos internos nuestros](https://developers.google.com/search/blog/2023/03/gsc-data-blending-looker-studio?hl=es)

Google Analytics dispone de varias cuentas demo donde podremos trastear con las últimas funcionalidades y, además, hacer pruebas y experimentos.

- [Cuenta demo de Google Analytics 4: Google Merchandise Store](https://support.google.com/analytics/answer/6367342?hl=es#zippy=%2Csecciones-de-este-art%C3%ADculo)

<section id="cs_herramientas"></section>

## Herramientas

- [Google Analytics](https://analytics.google.com/analytics/web/#/)
- [Generador de informes en GA4](https://coda.io/@ikaue/tools/ga4-standard-report-builder-1?)
- [Generador de eventos para GA4](https://ga-dev-tools.google/ga4/event-builder/)
- [Explorador de dimensiones y métricas](https://ga-dev-tools.google/ga4/dimensions-metrics-explorer/)
- [Query Explorer](https://ga-dev-tools.google/ga4/query-explorer/)
- [Tienda de comercio eletrónico para realizar pruebas](https://ga-dev-tools.google/ga4/enhanced-ecommerce/products/compton-t-shirt/)
- [Galería de templates para GTM](https://tagmanager.google.com/gallery/#/?page=1)
- [GA4Spy](https://ga4spy.com/): investiga las configuraciones base de cualquier cuenta de GA4.
- `Extensión Chrome` - [GA4 Enhanced DebugView by Luratic](https://chrome.google.com/webstore/detail/ga4-enhanced-debugview-by/hgkkhcgpdigijpbclngegpckcabpjjej/related)
- `Extensión Chrome` - [Google Analytics UTILS (UA & GA4)](https://chrome.google.com/webstore/detail/google-analytics-utils-ua/dmhoedahbmlaipacpamhefgjoiebamjm)
- [Exportar GSC + GA4 + Looker Studio](https://bigcommerce.websiteadvantage.com.au/tag-rocket/articles/google-search-console-and-ga4-to-bigquery-and-looker-studio/)

<section id="cs_pr"></section>

## Preguntas frecuentes
