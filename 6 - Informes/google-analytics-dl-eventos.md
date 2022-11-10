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

Para ello se hace uso del lenguaje de programación `JavaScript`, dentro del cual usaremos el objeto `dataLayer`.

## Eventos en la capa de datos

Una de las funcionalidades más básicas y sencillas que podemos trabajar desde la capa de datos es la de lanzar un evento personalizado.

Por ejemplo, cuando ocurre una acción como el envío correcto de un formulario, podemos lanzar el aviso con el siguiente código.

    dataLayer.push({'event': 'formulario_solicita_info'}); 

El siguiente paso será recuperar el evento desde Google Tag Manager. Para ello necesitamos crear un nuevo disparador, de tipo `Evento personalizado` y cuyo valor
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTU0MzAyNTMwOF19
-->