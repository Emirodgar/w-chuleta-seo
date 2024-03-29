---
title: Implementación comercio electrónico - Google Analytics 4
description: Configura el módulo de monetización de Google Analytics
date: 26/10/2022
folder: informes
layout: default_1
permalink: google-analytics-ecommerce
author: Emirodgar
  
---

La mejor manera de implementar la información de monetización en Google Analytics 4 es hacerlo a través de Google Tag Manager y la capa de datos. Para ello, debemos lanzar la información que queremos recoger en cada uno de los estadios haciendo uso del objeto `dataLayer`.



## Crear la capa de datos de los elementos de ecommerce

Google Analytics funciona con un etiquetado a través de la capa de datos. Lo primero será  disponer de una variable que nos permita acceder a toda la información de dicho etiquetado.

Para ello debemos crear la variable en Google Tag Manager de nombre `DLV - Ecommerce items` y tipo `capa de datos`.
Dentro de la misma, en **nombre de la variable de capa de datos** deberemos incluir el estándar empleado por Google, que es `ecommerce.items`.

A partir de ahora, dispondremos en `GTM` de una variable con toda la información relativa a los productos de ecommerce.

## Implementar los códigos en la página web

> En la documentación oficial de Google tenemos [todos los eventos](https://developers.google.com/tag-manager/ecommerce-ga4?hl=es%29) que podemos medir en nuestro ecommerce

Las acciones más recurrentes y básicas que deberíamos medir, son:

 - `view_item`: cuando se visualiza un producto
 - `add_to_cart`: al añadir un producto al carrito
 - `remove_from_cart`: al añadir un producto al carrito
 -  `purchase`: al añadir un producto al carrito

Para que podamos recopilar la información, debemos introducir en la capa de datos los datos de nuestros productos a medida que los usuarios interactúan con ellos.

> Hay maneras técnicas de [generar los códigos directamente desde GTM](https://analyticsimplementations.com/google-tag-manager/implementar-enhanced-ecommerce-ga4-en-tu-site-generando-tus-propios-datalayers-desde-google-tag-manager-gtm/).

## Visualizar un producto - `view_item`

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

## Añadir un producto al carrito - `add_to_cart`


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


## Venta realizada - `purchase`

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


## Etiquetar las acciones en GTM

El último paso será generar las etiquetas `tags` en nuestro Tag Manager. 

Debemos crearlas con los siguientes datos:

 - **Tipo de etiqueta**: Google Analytics: evento de GA4.
 - **Nombre de evento**: debe coincidir con los eventos antes mencionados (`view_item`, `add_to_cart`, `purchase`, etc.).
 - Parámetros de evento: añadimos una fila con nombre del parámetro item y valor la variable que creamos en el primer punto `DLV - Ecommerce items`.



## Recursos

- [Guía de migración de ecommerce de GA3 a GA4](https://support.google.com/analytics/answer/10759417)
- [Listado de códigos de monedas (currency) con los que GA4 puede trabajar](https://support.google.com/analytics/answer/9796179?hl=en#zippy=%2Cin-this-article)

## Herramientas
