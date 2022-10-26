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

En el caso de Google Analytics 4 (`GA4`), [se bloquea por defecto el tráfico generado por robots de búsqueda conocidos](https://support.google.com/analytics/answer/9888366?hl=es). Por ello se excluirá todo el tráfico que identifique dentro de la lista internacional de robots de IAB.

### 2.2 - Bloqueamos a los spammers

El siguiente paso será bloquear todos aquellos dominios y fuentes de tráfico que son **conocidos por hacer spam**. Lo haremos desde el servidor (por ejemplo en Apache con el fichero .htaccess) bloqueando por IP y *User Agent*. Existen [multitud de listas negras](http://tab-studio.com/en/blocking-robots-on-your-page/) que podemos utilizar e incorporar a nuestro proyecto para, con un copiar y pegar, bloquear cientos de fuentes SPAM.

Este paso, aunque nos ayudará a reducir considerablemente el tráfico de baja calidad, no es una solución definitiva porque tendremos que **actualizar frecuentemente el listado de fuentes bloqueadas**.

## 3 - Filtramos los datos adecuados para ser analizados

Como hemos visto hasta ahora, no existe una solución definitiva para hacer frente a todo el tráfico spam o generado por bots, pero lo que sí podemos hacer es, con lo que no haya sido bloqueado hasta este punto, excluirlo de nuestros análisis.

Para ello podemos generar **una nueva audiencia de análisis** que excluya el segmento de tráfico identificado en el punto 1. De esta forma nos aseguraremos que los informes incluirán únicamente tráfico relevante para ser analizado. 

## 4 - Otras acciones

Una última acción, y muy efectiva, para frenar el tráfico generado por robots es [habilitar un captcha](https://www.google.com/recaptcha/intro/v3beta.html) para los **usuarios que visitan nuestra página por primera vez**. Si resuelven el captcha, procedemos a insertar el código de analítica, si no, no lo hacemos y evitamos así registrar información de baja calidad.

<section id="cs_recursos"></section>

## Recursos

Los recursos más interesantes están relacionados con los listados de 

- [Listado internacional de robots de IAB](https://www.iab.com/guidelines/iab-abc-international-spiders-bots-list/)
- [Listado de páginas y robots spam](https://tab-studio.com/en/blocking-robots-on-your-page/)
- [Crear y gestionar audiencias en Google Analytics 4](https://support.google.com/analytics/answer/9267572?hl=es#zippy=,secciones-de-este-art%C3%ADculo)

<section id="cs_herramientas"></section>

## Herramientas

<section id="cs_pr"></section>

<!--stackedit_data:
eyJoaXN0b3J5IjpbNjUyMTY4NzU1LC01MDM0MDMxMTYsMjExNT
UzNDA5Nl19
-->