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

 1. Creamos una nueva variable con nombre `VAR - DL - user_id` de tipo `Variable de capa de datos` y, en `Nombre de la variable` incluimos el mismo nombre empleado en el código de la capa de datos. En el caso anterior, sería `user_id`. 
 2. Generamos (si no tenemos ya) una etiqueta de Google Analytics 4.  Pulsamos sobre **Configuración de la etiqueta** y posteriormente  sobre **Campos que configurar**. Aparecerá una nueva fila con dos espacios. Sobre `Nombre del campo`, escribimo `user_id` y en valor, usamos la variable que hemos creado en el punto anterior, que será `{{VAR - DL - user_id}}`.

## Recursos

- [Guía oficial User-ID Google Analytics - Cómo enviar los IDs](https://developers.google.com/analytics/devguides/collection/ga4/user-id?platform=websites&hl=es)

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTk0NTUxOTUxNF19
-->