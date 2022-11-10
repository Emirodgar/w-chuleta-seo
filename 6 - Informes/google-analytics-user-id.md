---
title: Google Analytics 4 - UserID
description: Trabajar con la capa de datos o dataLayer nos ayudará a personalizar y potenciar nuestras implementaciones de analítica web
date: 10/11/2022
folder: informes
layout: default_1
permalink: google-analytics-user-id
author: Emirodgar
  
---

Google Analytics utiliza diferentes funcionalidades para identificar a los usuarios. User ID, Google Signals o Device ID. Si tenemos un sistema de gestión de usuarios, podemos utilizar los identificadores de los mismos para unificar el seguimiento en Analytics.

Para ello bastará con enviarlos 

### Enviar el User ID directamente a Analytics

En este caso, empleamos el objeto `gtag` para enviar el valor del `user_id`. El campo `TAG_ID` debe contener el identificador del flujo de datos de GA4. Suele ser del tipo G-XXXXXX.

    gtag('config',  'TAG_ID',  {  
    'user_id':  'USER_ID'  
    }); 

### Enviar el User ID a través de Google Tag Manager

Si queremos centralizar toda la medición en GTM, tendremos que enviar el valor a la [capa de datos](https://chuletaseo.com/google-analytics-datalayer). Para ello usaremos el siguiente código.

    dataLayer.push({  
    'user_id':  'USER_ID'  
    });

En Tag Manager tendremos que llevar a cabo una serie de acciones.

 1. Creamos una nueva variable de tipo `Variable de capa de datos` y, en Nombre de la variable incluimos el valor . 

## Recursos

- [Guía oficial User-ID Google Analytics - Cómo enviar los IDs](https://developers.google.com/analytics/devguides/collection/ga4/user-id?platform=websites&hl=es)

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTk1MDUzMTkyMF19
-->