---
title: Eliminar el tráfico spam y de robots
description: Proceso para eliminar de nuestras plataformas de analítica el tráfico SPAM o generado por robots.
lang: es_ES
date: 25/09/2022
date_modified: 29/09/2022
folder: informes
author: Emirodgar
layout: default_1
permalink: eliminar-trafico-spam-robot

  
---

Desde hace unos años, nuestros sistemas de analítica reflejan picos de tráfico de referencia de dominios que nunca nos han enlazado y tráfico desde países que no tiene sentido. Se trata de **tráfico spam** y/o **generado por robots**. Más allá de que pueden consumir una parte de los recursos de nuestro servidor, el verdadero problema reside en que **nuestra analítica se distorsiona** y terminamos analizando un tráfico que no aporta ningún valor.

A continuación detallo algunos pasos para prevenir y minimizar el impacto de este tráfico malo en nuestra estrategia digital.

## 1- Identificar el tráfico de baja calidad

El primer paso será asegurarnos de que realmente tenemos tráfico SPAM o de robots. Por norma general, este tipo de tráfico se caracteriza por:

 - Poco tiempo en el sitio.
 - Alto porcentaje de rebote.
 - Porcentaje alto de visitantes nuevos.
 - Sin conversiones asociadas.
 
Ojo, por sí solo esto no es indicativo de que se trate de robots, lógicamente tenemos que ver si tenemos un segmento de nuestro tráfico que corresponde con estas características y, de ser así, analizarlo para determinar si se trata de tráfico malo.

## 2- Bloqueamos los accesos

### 2.1 - Bloqueamos a los robots de búsqueda conocidos

En el caso de Google Analytics, disponemos de una [opción dentro de nuestro panel de administración](https://plus.google.com/+GoogleAnalytics/posts/2tJ79CkfnZk) para bloquear el tráfico generado por robots de búsqueda conocidos. Una vez activado, nuestra herramienta excluirá todo el tráfico que 'entienda' proviene de robots y no está generado por personas.

### 2.2 - Bloqueamos a los spammers

El siguiente paso será bloquear todos aquellos dominios y fuentes de tráfico que son conocidos por hacer spam. Lo haremos a nivel de servidor (por ejemplo en Apache con el fichero .htaccess) bloqueando por IP y *User Agent*. Existen [multitud de listas negras](http://tab-studio.com/en/blocking-robots-on-your-page/) que podemos utilizar e incorporar a nuestro proyecto para, con un copiar y pegar, bloquear cientos de fuentes SPAM.

Este paso, aunque nos ayudará a reducir considerablemente el tráfico SPAM, no es una solución definitiva porque tendremos que actualizar frecuentemente el listado de fuentes bloqueadas.

## 3 - Filtramos los datos adecuados para ser analizados

Como hemos visto hasta ahora, no existe una solución definitiva para hacer frente a todo el tráfico SPAM o generado por bots, pero lo que sí podemos hacer es -con lo que no haya sido bloqueado hasta este punto- excluirlo de nuestros análisis.

Para ello podemos generar una nueva vista de análisis que excluya el segmento de tráfico identificado en el punto 1. De esta forma nos aseguraremos que dicha vista incluirá únicamente tráfico relevante para ser analizado. Es importante que siempre mantengamos una vista sin filtros (con datos en bruto) para evitar perder información.

## 4 - Otras acciones

Una última acción -y muy efectiva- para frenar el tráfico generado por robots es [habilitar un captcha](https://www.google.com/recaptcha/intro/v3beta.html) para los **usuarios que visitan nuestra página por primera vez**. Si resuelven el captcha, procedemos a insertar el código de analítica, si no, no lo hacemos y evitamos así registrar información de baja calidad.

<section id="cs_recursos"></section>

## Recursos

Los recursos más interesantes

<section id="cs_herramientas"></section>

## Herramientas

<section id="cs_pr"></section>

<!--stackedit_data:
eyJoaXN0b3J5IjpbNDUyODc4MzkzLDIxMTU1MzQwOTZdfQ==
-->