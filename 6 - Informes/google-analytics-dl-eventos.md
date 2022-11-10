---
title: Google Analytics 4 - Capa de datos
description: Trabajar con la capa de datos o dataLayer nos ayudará a personalizar y potenciar nuestras implementaciones de analítica web
date: 10/11/2022
folder: informes
layout: default_1
permalink: google-analytics-datalayer
author: Emirodgar
  
---

## Capa de datos

La cada de datos o `dataLayer` es un espacio intermedio entre nuestra página web y la plataforma de medición. Puede ser utilizada para escribir o leer por ambas partes. 

Para ello se hace uso del lenguaje de programación JavaScri

## Eventos en la capa de datos

Una de las funcionalidades más básicas y sencillas que podemos trabajar desde la capa de datos es la de lanzar un evento personalizado.

Por ejemplo, cuando ocurre una acción, podemos lanzar el aviso

    dataLayer.push({'event': 'formulario_solicita_info'}); 

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEzNzAzNzUyNDVdfQ==
-->