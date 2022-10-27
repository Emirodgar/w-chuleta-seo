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
Dentro de la misma, en "nombre de la variable de capa de datos" deberemos incluir el estándar usado por Google, que es `ecommerce.items`.

A partir de ahora, dispondremos en `GTM` de una variable con toda la información relativa a los productos de ecommerce.

## Implementar los códigos en la página web

> En la documentación oficial de Google tenemos [todos los eventos](%5D%28https://developers.google.com/tag-manager/ecommerce-ga4?hl=es%29) que podemos medir en nuestro ecommerce

Las acciones más recurrentes y básicas que deberíamos medir, son:

 - `view_item`: cuando se visualiza un producto
 - `add_to_cart`: al añadir un producto al carrito
 - `remove_from_cart`: al añadir un producto al carrito
 -  `purchase`: al añadir un producto al carrito

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


## Etiquetar las acciones en GTM

El último paso será generar las etiquetas `tags` en nuestro Tag Manager. 

Debemos crearlas con los siguientes datos:

 - **Tipo de etiqueta**: Google Analytics: evento de GA4.
 - **Nombre de evento**: debe coincidir con los eventos antes mencionados (`view_item`, `add_to_cart`, `purchase`, etc.).
 - Parámetros de evento: añadimos una fila con nombre del parámetro item y valor la variable que creamos en el primer punto `DLV - Ecommerce items`.

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTQ1NDk3NTU2MSwtOTU2NTEzNzkzLC0xMD
A5NzUxMDA4LDE2MDEyNTUyNzcsMTMyMTE4MDYxNCwtNjg2Mjkz
ODgxLC00MDgyNjcxMjRdfQ==
-->