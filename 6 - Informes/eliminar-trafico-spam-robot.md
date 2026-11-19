---
title: Eliminar el tráfico spam y de robots
description: Proceso para eliminar de nuestras plataformas de analítica el tráfico spam y el generado por robots.
lang: es_ES
date: 25/09/2022
date_modified: 19/11/2026
folder: informes
author: Emirodgar
layout: default_1
permalink: eliminar-trafico-spam-robot
  
---

Desde hace unos años, nuestros sistemas de analítica reflejan picos de tráfico de referencia de dominios que nunca nos han enlazado y tráfico desde países que no tiene sentido. Se trata de **tráfico spam** y/o **generado por robots**. Más allá de que pueden consumir una parte de los recursos de nuestro servidor, el verdadero problema reside en que **nuestra analítica se distorsiona** y terminamos analizando un tráfico que no aporta ningún valor.

A continuación detallo algunos pasos para prevenir y minimizar el impacto de este tráfico malo en nuestra estrategia digital.

## Identificar el tráfico de baja calidad

El primer paso será asegurarnos de que realmente tenemos tráfico SPAM o de robots. Por norma general, este tipo de tráfico se caracteriza por:

 - Poco tiempo en el sitio.
 - Alto porcentaje de rebote.
 - Porcentaje alto de visitantes nuevos.
 - Sin conversiones asociadas.
 
Ojo, por sí solo esto no es indicativo de que se trate de robots, lógicamente tenemos que ver si tenemos un segmento de nuestro tráfico que corresponde con estas características y, de ser así, analizarlo para determinar si se trata de tráfico malo.

## Bloquear los accesos

> En el caso de Google Analytics 4 `GA4`, [se excluye automáticamente el tráfico de robots y arañas conocidos](https://support.google.com/analytics/answer/9888366?hl=es). Google se basa en sus propios estudios y en la lista internacional de robots de IAB. Esta exclusión no se puede desactivar ni permite saber cuánto tráfico se ha excluido, y sólo cubre robots *conocidos*: el tráfico automatizado no identificado puede seguir apareciendo en tus datos. Más sobre la configuración en la [guía de Google Analytics 4](https://chuletaseo.com/google-analytics).

El siguiente paso será bloquear todos aquellos dominios y fuentes de tráfico que son **conocidos por hacer spam**. Lo haremos desde el servidor (por ejemplo en Apache con el fichero .htaccess) bloqueando por IP y *User Agent*. Existen [multitud de listas negras](http://tab-studio.com/en/blocking-robots-on-your-page/) que podemos utilizar e incorporar a nuestro proyecto para, con un copiar y pegar, bloquear cientos de fuentes SPAM.

Este paso, aunque nos ayudará a reducir considerablemente el tráfico de baja calidad, no es una solución definitiva porque tendremos que **actualizar frecuentemente el listado de fuentes bloqueadas**.

> Aunque podemos utilizar el **fichero robots.txt** para solicitar que nuestra página no sea rastreada por ciertos robots, la manera más eficiente será bloquear su acceso desde el servidor, dado que el robots.txt podría ser ignorado.

En el caso de Apache, para bloquear el acceso a estos robots tendríamos que utilizar un código como el siguiente:

    RewriteEngine On 
    RewriteCond %{HTTP_USER_AGENT} ^BlackWidow [OR]
    RewriteCond %{HTTP_USER_AGENT} ^Bot\ mailto:craftbot@yahoo.com [OR]
    RewriteCond %{HTTP_USER_AGENT} ^ChinaClaw [OR]
    RewriteCond %{HTTP_USER_AGENT} ^Custo [OR]
    RewriteCond %{HTTP_USER_AGENT} ^DISCo [OR]
    ....

Una última acción para frenar el tráfico generado por robots es [habilitar un captcha](https://cloud.google.com/security/products/recaptcha) para los **usuarios que visitan nuestra página por primera vez**. Si resuelven el captcha, procedemos a insertar el código de analítica, si no, no lo hacemos y evitamos así registrar información de baja calidad.

## Filtrar los datos adecuados para ser analizados

Como hemos visto hasta ahora, no existe una solución definitiva para hacer frente a todo el tráfico spam o generado por bots, pero lo que sí podemos hacer es, con lo que no haya sido bloqueado hasta este punto, excluirlo de nuestros análisis.

Para ello podemos aplicar **filtros de datos** en GA4, que excluyen el tráfico de una IP o rango de IP (tráfico interno) o el de quienes usan el modo de depuración (tráfico de desarrolladores). Ten en cuenta que, según la [documentación de Google](https://support.google.com/analytics/answer/10108813?hl=es), estos filtros no afectan al historial y son permanentes: los datos excluidos no se procesan ni están disponibles en Analytics ni en BigQuery. Si sólo quieres ocultarlos en los informes, puedes usar filtros de informes.

Si el problema son los dominios de referencia que no queremos ver como fuente de tráfico, GA4 permite [especificar referencias no deseadas](https://support.google.com/analytics/answer/10327750?hl=es) (hasta 50 por flujo de datos). Esto evita que ese dominio se muestre como fuente de la visita, pero no elimina el tráfico de por sí.

Para el tráfico ya registrado, podemos excluir el segmento identificado en el punto 1 de nuestros análisis con un filtro de informe o un segmento en las [Exploraciones](https://support.google.com/analytics/answer/7579450?hl=es). De esta forma nos aseguraremos de que los informes incluyan únicamente tráfico relevante para ser analizado.


<section id="cs_recursos"></section>
## Recursos


Los recursos más interesantes están relacionados con los listados de robots y páginas de baja calidad así como la documentación oficial de GA4. 

- `Inglés` -  [Listado internacional de robots de IAB](https://www.iab.com/guidelines/iab-abc-international-spiders-bots-list/)
- `Inglés` -  [Listado de páginas y robots spam](https://tab-studio.com/en/blocking-robots-on-your-page/)
- [Filtros de datos en Google Analytics 4](https://support.google.com/analytics/answer/10108813?hl=es)
- [Identificar referencias no deseadas en Google Analytics 4](https://support.google.com/analytics/answer/10327750?hl=es)
- `Inglés` - [Identificar robots en Twitter usando machine learning](https://github.com/jubins/MachineLearning-Detecting-Twitter-Bots)


<section id="cs_herramientas"></section>
## Herramientas

 - [Htaccess generator](https://emirodgar.github.io/htaccess-generator/) (proyecto en Github)
 - [Htaccess generator para Angular](https://julianpoemp.github.io/ngx-htaccess-generator/#/generator)



<section id="cs_pr"></section>
## Preguntas frecuentes


 <div class="row">
  <div class="col-lg-12">
   <div class="accordion accordion-alterate arrow-right" id="popularTopics">
    <div class="card">
		<div class="card-header" id="heading1">
	<h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">¿Qué se considera tráfico de baja calidad?</a> </h5>
	</div>
	<div id="collapse1" class="collapse" aria-labelledby="heading1" data-parent="#popularTopics">
	<div class="card-body">Por norma general nos referimos a un tráfico simulado por un rastreador web o robot que lo que hace es navegar por nuestra página para obtener información de manera automatizada. Los datos que generan no tienen ningún valor de análisis y ensucian los de los usuarios reales, complicando cualquier posible aprendizaje. </div>

	</div>

</div>

</div>
</div>
</div>
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjA0NTA2MzY5M119
-->