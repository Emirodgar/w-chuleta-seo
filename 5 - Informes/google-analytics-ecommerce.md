---
title: Implementación comercio electríconico - Google Analytics 4
description: Configura el módulo de monetización de Google Analytics
date: 26/10/2022
folder: informes
layout: default_1
permalink: google-analytics-ecommerce
author: Emirodgar
  
---

La mejora manera de implementar la información de monetización en Google Analytics 4 es hacerlo a través de Google Tag Manager y la capa de datos. Para ello, debemos lanzar la información que queremos recoger en cada uno de los estadios haciendo uso del objeto `dataLayer`.

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

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTYyMjMwMTA3LC00MDgyNjcxMjRdfQ==
-->