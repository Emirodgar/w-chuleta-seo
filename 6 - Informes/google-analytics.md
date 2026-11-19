---
title: Google Analytics 4
description: "Guía de Google Analytics 4 para SEO: instalación con Tag Manager, capa de datos, User ID y medición de comercio electrónico"
date: 26/10/2022
date_modified: 19/11/2026
folder: informes
layout: default_1
permalink: google-analytics
author: Emirodgar
redirect_from:
  - /google-analytics-datalayer
  - /google-analytics-ecommerce
  - /google-analytics-user-id

---

<div class="alert alert-info"><span class="badge badge-dark text-uppercase mr-2">GA4</span> Esta guía reúne en una sola página lo que antes estaba repartido en cuatro: instalación, capa de datos, User ID y comercio electrónico.</div>

## Instalar y configurar Google Analytics 4

GA4 es la herramienta de análisis web de Google. Medir bien es la base para demostrar el resultado de cualquier estrategia SEO.
{:.lead}

> Google Analytics Universal `GA3` [dejó de procesar datos en julio de 2023](https://support.google.com/analytics/answer/11583528?hl=es). Hoy GA4 es la única opción estándar.

> Existe una [certificación oficial de Google Analytics](https://skillshop.exceedlms.com/student/path/508845-google-analytics-certification).

La mejor aproximación es instalar el código de Google Analytics 4 a través de Google Tag Manager `GTM`, un gestor de códigos que optimizará la carga de nuestra página y nos permitirá tener todos los píxeles centralizados en un único lugar.

### Nombre estandarizado

A la hora de trabajar es ideal que usemos un estándar en la nomenclatura que vayamos a emplear. Nuestra recomendación es la siguiente:

- **Etiquetas**: TAG - Nombre servicio - descripción
- **Disparadores** : TRIGGER - Tipo - descripción
- **Variables**: VAR - Tipo - descripción

## Capa de datos (dataLayer)

La capa de datos o `dataLayer` es un espacio intermedio entre nuestra página web y la plataforma de medición. Puede ser utilizada para escribir o leer por ambas partes.

Para ello se hace uso del lenguaje de programación `JavaScript`, dentro del cual usaremos el objeto `dataLayer`.

### Eventos en la capa de datos

Una de las funcionalidades más básicas y sencillas que podemos trabajar desde la capa de datos es la de lanzar un evento personalizado.

Por ejemplo, cuando ocurre una acción como el envío correcto de un formulario, podemos lanzar el aviso con el siguiente código.

    dataLayer.push({'event': 'formulario_solicita_info'}); 

El siguiente paso será recuperar el evento desde Google Tag Manager. Para ello necesitamos crear un nuevo disparador, de tipo `Evento personalizado` y cuyo Nombre del evento sea el mismo que hemos lanzado a la capa de datos. En el ejemplo anterior, el nombre sería `formulario_solicita_info`.

Ahora ya tenemos la capacidad desde GTM de conocer cuándo ha ocurrido el evento, por lo que podemos hacer llegar la información precisa a Google Analytics a través de una etiqueta con el activador antes mencionado.

## User ID

Google Analytics utiliza diferentes funcionalidades para identificar a los usuarios: User ID, Google Signals o Device ID. Si tenemos un sistema de gestión de usuarios, podemos utilizar los identificadores de los mismos para unificar el seguimiento en Analytics.

### Enviar el User ID directamente a Analytics

En este caso, empleamos el objeto `gtag` para enviar el valor del `user_id`. El campo `TAG_ID` debe contener el identificador de medición del flujo de datos de GA4. Suele ser del tipo G-XXXXXX.

    gtag('config',  'TAG_ID',  {  
    'user_id':  'USER_ID'  
    }); 

### Enviar el User ID a través de Google Tag Manager

Si queremos centralizar toda la medición en GTM, tendremos que enviar el valor a la [capa de datos](#capa-de-datos-datalayer). Para ello usaremos el siguiente código.

    dataLayer.push({  
    'user_id':  'USER_ID'  
    });

En Google Tag Manager tendremos que llevar a cabo una serie de acciones.

 1. Creamos una nueva variable con nombre `VAR - DL - user_id` de tipo `Variable de capa de datos` y, en `Nombre de la variable` incluimos el mismo nombre empleado en el código de la capa de datos. En el caso anterior, sería `user_id`.
 2. Generamos (si no tenemos ya) una etiqueta de Google Analytics 4. Pulsamos sobre **Configuración de la etiqueta** y posteriormente sobre **Campos que configurar**. Aparecerá una nueva fila con dos espacios. Sobre `Nombre del campo`, escribimos `user_id` y en valor, usamos la variable que hemos creado en el punto anterior, que será `{{VAR - DL - user_id}}`.

Más información en la [guía oficial de User-ID](https://developers.google.com/analytics/devguides/collection/ga4/user-id?platform=websites&hl=es).

## Comercio electrónico en GA4

GA4 cuenta con el módulo de monetización, lo que equivaldría al comercio electrónico que teníamos en GA3 o Universal. La mejor manera de implementarlo es hacerlo a través de Google Tag Manager y la capa de datos. Para ello, debemos lanzar la información que queremos recoger en cada uno de los estadios haciendo uso del objeto `dataLayer`.

### GA4 en Shopify

A día de hoy no hay conector nativo de GA4 dentro de Shopify. Si introducimos el código, podremos medir la captación pero la capa de información relativa al comercio electrónico no funcionará.

Si queremos avanzar de nuestro lado, podemos hacerlo con lo siguiente:

 - `Inglés` -  [How to Set up Google Analytics 4 on Shopify - GTM + Ecommerce Data layers](https://www.youtube.com/watch?v=hag6ucGxj5E)
 - `Inglés` -  [Set up Google Analytics 4 (GA4) on Shopify](https://analyzify.app/shopify-google-analytics/ga4)
 - `Inglés` -  [Shopify GA4 Kit](https://analyzify.app/shopify-ga4-kit)

### Crear la variable de los elementos de ecommerce

Google Analytics funciona con un etiquetado a través de la capa de datos. Lo primero será disponer de una variable que nos permita acceder a toda la información de dicho etiquetado.

Para ello debemos crear la variable en Google Tag Manager de nombre `DLV - Ecommerce items` y tipo `capa de datos`. Dentro de la misma, en **nombre de la variable de capa de datos** deberemos incluir el estándar empleado por Google, que es `ecommerce.items`.

A partir de ahora, dispondremos en `GTM` de una variable con toda la información relativa a los productos de ecommerce.

### Implementar los códigos en la página web

> En la documentación oficial de Google tenemos [todos los eventos](https://developers.google.com/tag-manager/ecommerce-ga4?hl=es) que podemos medir en nuestro ecommerce.

Las acciones más recurrentes y básicas que deberíamos medir son:

 - `view_item`: cuando se visualiza un producto
 - `add_to_cart`: al añadir un producto al carrito
 - `remove_from_cart`: al quitar un producto del carrito
 - `purchase`: al completar una compra

Para que podamos recopilar la información, debemos introducir en la capa de datos los datos de nuestros productos a medida que los usuarios interactúan con ellos.

> Hay maneras técnicas de [generar los códigos directamente desde GTM](https://analyticsimplementations.com/google-tag-manager/implementar-enhanced-ecommerce-ga4-en-tu-site-generando-tus-propios-datalayers-desde-google-tag-manager-gtm/).

#### Visualizar un producto - `view_item`

Lanzaremos el siguiente código a la capa de datos

    dataLayer.push({ ecommerce: null });  //Limpiamos el objeto.
    dataLayer.push({
      event: "view_item",
      ecommerce: {
        items: [{
          item_name: "Donut Friday Scented T-Shirt", // Name or ID is required.
          item_id: "67890",
          price: 33.75,
          item_brand: "Google",
          item_category: "Apparel",
          item_category2: "Mens",
          item_category3: "Shirts",
          item_category4: "Tshirts",
          item_variant: "Black",
          item_list_name: "Search Results",  // If associated with a list selection.
          item_list_id: "SR123",  // If associated with a list selection.
          index: 1,  // If associated with a list selection.
          quantity: 1
        }]
      }
    });

#### Añadir un producto al carrito - `add_to_cart`

    dataLayer.push({ ecommerce: null });  
    dataLayer.push({
      event: "add_to_cart",
      ecommerce: {
        items: [{
          item_name: "Donut Friday Scented T-Shirt", // Name or ID is required.
          item_id: "67890",
          price: "33.75",
          item_brand: "Google",
          item_category: "Apparel",
          item_category2: "Mens",
          item_category3: "Shirts",
          item_category4: "Tshirts",
          item_variant: "Black",
          item_list_name: "Search Results",
          item_list_id: "SR123",
          index: 1,
          quantity: 2
        }]
      }
    });

#### Venta realizada - `purchase`

    dataLayer.push({ ecommerce: null });  
    dataLayer.push({
      event: "purchase",
      ecommerce: {
          transaction_id: "T12345",
          affiliation: "Online Store",
          value: "59.89",
          tax: "4.90",
          shipping: "5.99",
          currency: "EUR",
          coupon: "SUMMER_SALE",
          items: [{
            item_name: "Triblend Android T-Shirt",
            item_id: "12345",
            price: "15.25",
            item_brand: "Google",
            item_category: "Apparel",
            item_variant: "Gray",
            quantity: 1
          }, {
            item_name: "Donut Friday Scented T-Shirt",
            item_id: "67890",
            price: 33.75,
            item_brand: "Google",
            item_category: "Apparel",
            item_variant: "Black",
            quantity: 1
          }]
      }
    });

### Etiquetar las acciones en GTM

El último paso será generar las etiquetas `tags` en nuestro Tag Manager. Debemos crearlas con los siguientes datos:

 - **Tipo de etiqueta**: Google Analytics: evento de GA4.
 - **Nombre de evento**: debe coincidir con los eventos antes mencionados (`view_item`, `add_to_cart`, `purchase`, etc.).
 - **Parámetros de evento**: añadimos una fila con nombre del parámetro `items` y valor la variable que creamos en el primer punto, `DLV - Ecommerce items`.

Dos recursos oficiales de apoyo: la [guía de migración de ecommerce de GA3 a GA4](https://support.google.com/analytics/answer/10759417) y el [listado de códigos de moneda (currency)](https://support.google.com/analytics/answer/9796179?hl=en) con los que GA4 puede trabajar.

<section id="cs_recursos"></section>

## Recursos

- `Inglés` - [Guía de expresiones regulares para SEO](https://www.jcchouinard.com/regex-for-seo/)
- `Inglés` - [Informe Looker para auditar implementación GA4](https://datastudio.google.com/u/0/reporting/ced29b32-72ec-4b6c-a41c-7c47b39bac60/page/p_hfbfof53yc)
- `Inglés` - [Códigos de GTM listos para ser usados](https://www.analyticsmania.com/google-tag-manager-recipes/)
- `Inglés` - [Discrepancia en conversiones de Analytics y Ads](https://newmetrics.io/knowledge-base/google-ads-analytics-discrepancies/)
- `Inglés` - [Eventos personalizados en Google Analytics 4](https://www.youtube.com/watch?v=QmEOPuJr05w&list=UUJ5UyIAa5nEGksjcdp43Ixw&index=1)
- `Inglés` - [Listado de dimensiones y métricas de GA4 Spy](https://data.ga4spy.com/)
- `Inglés` - [Cómo saltarse las limitaciones de umbral aplicado en los datos](https://www.analyticsmania.com/post/thresholding-applied-in-google-analytics-4-do-this/)
- `Inglés` - [20 alternativas a Google Analytics](https://moz.com/blog/google-analytics-alternatives)
- `Inglés` - [Razones por las que tus datos de GA4 no coinciden](https://analyticscanvas.com/3-reasons-your-ga4-data-doesnt-match/)
- `Inglés` / `vídeo oficial` / [Ingestión de datos con Measurement Protocol y Data Import](https://www.youtube.com/watch?v=VVkrwXkbwEg)
- [Cómo combinar la fuente de datos de Google Search Console con datos internos nuestros](https://developers.google.com/search/blog/2023/03/gsc-data-blending-looker-studio?hl=es)

Google Analytics dispone de varias cuentas demo donde podremos trastear con las últimas funcionalidades y, además, hacer pruebas y experimentos.

- [Cuenta demo de Google Analytics 4: Google Merchandise Store](https://support.google.com/analytics/answer/6367342?hl=es)

<section id="cs_herramientas"></section>

## Herramientas

- [Google Analytics](https://analytics.google.com/analytics/web/#/)
- [Generador de informes en GA4](https://coda.io/@ikaue/tools/ga4-standard-report-builder-1?)
- [Generador de eventos para GA4](https://ga-dev-tools.google/ga4/event-builder/)
- [Explorador de dimensiones y métricas](https://ga-dev-tools.google/ga4/dimensions-metrics-explorer/)
- [Query Explorer](https://ga-dev-tools.google/ga4/query-explorer/)
- [Tienda de comercio electrónico para realizar pruebas](https://ga-dev-tools.google/ga4/enhanced-ecommerce/products/compton-t-shirt/)
- [Galería de templates para GTM](https://tagmanager.google.com/gallery/#/?page=1)
- [GA4Spy](https://ga4spy.com/): investiga las configuraciones base de cualquier cuenta de GA4.
- `Extensión Chrome` - [GA4 Enhanced DebugView by Luratic](https://chrome.google.com/webstore/detail/ga4-enhanced-debugview-by/hgkkhcgpdigijpbclngegpckcabpjjej/related)
- `Extensión Chrome` - [Google Analytics UTILS (UA & GA4)](https://chrome.google.com/webstore/detail/google-analytics-utils-ua/dmhoedahbmlaipacpamhefgjoiebamjm)
- [Exportar GSC + GA4 + Looker Studio](https://bigcommerce.websiteadvantage.com.au/tag-rocket/articles/google-search-console-and-ga4-to-bigquery-and-looker-studio/)
