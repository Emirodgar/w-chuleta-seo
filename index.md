---
title: Chuleta SEO
description: Recursos, herramientas y guías. Todo lo que necesitas para tus estrategias SEO.
folder: autor
author: Emirodgar
layout: default_1
permalink: /index.html
  
---

Este portal hace una recopilación de recursos, herramientas y guías para poder diseñar y ejecutar estrategias SEO. Utiliza el menú de la izquierda para navegar por las diferentes secciones y acceder a la información que te interesa.

> Estamos en `desarrollo`, si encuentras algún fallo, danos tiempo.
Se está llevando a cabo la migración de contenidos de una base de datos a otra y, además, el cambio de front. Es un proceso que nos está llevando más tiempo del que nos gustaría, pero al tratarse de una proyecto gratuito podemos dedicar sólo una parte pequeña de nuestro tiempo.


<div class="row">
	<div class="col-4 my-3 text-center">
		<a class="a-home" href="https://chuletaseo.com/fuentes-informacion">
		<h6 class="pt-2 a-home">Empezar en SEO</h6>
		</a>
	</div>
	<div class="col-4 my-3 text-center">
		<a class="a-home" href="https://chuletaseo.com/fuentes-informacion">
		<h6 class="pt-2 a-home">Fuentes de información</h6>
		</a>
	</div>
	<div class="col-4 my-3 text-center">
		<a class="a-home"  href="https://chuletaseo.com/indexacion">
		<h6 class="pt-2  a-home">SEO técnico</h6>
		</a>
	</div>
	<div class="col-4 my-3 text-center">
		<a class="a-home" href="https://chuletaseo.com/contenidos">
		<h6 class="pt-2  a-home">SEO de contenidos</h6>
		</a>
	</div>
	<div class="col-4 my-3 text-center">
		<a class="a-home" href="https://chuletaseo.com/enlazado">
		<h6 class="pt-2  a-home">Enlaces</h6>
		</a>
	</div>
	<div class="col-4 my-3 text-center">
		<a class="a-home" href="https://chuletaseo.com/informes-seo">
		<h6 class="pt-2  a-home">Análisis e Informes</h6>
		</a>
	</div>
		  
</div>

<hr class="divider">

### Últimas actualizaciones

<ul>
{% assign pages = site.pages | sort: 'date_modified' %}
{% for page in pages %}
{% if page.date_modified != null  %}
	  <li> <code>{{page.date_modified}}</code> - <a href="{{ page.url }}">{{ page.title }}</a></li>
{% endif %}
{% endfor %}
</ul>

<!--
## Últimas páginas creadas

<ul>
{% assign pages = site.pages | sort: 'date' %}
{% for page in pages limit:10 %}
{% if page.date != null  %}
	  <li> <code>{{page.date}}</code> - <a href="{{ page.url }}">{{ page.title }}</a></li>
{% endif %}
{% endfor %}
</ul>


## Últimas modificaciones

<ul>
{% assign pages = site.pages | sort: 'date_modified' %}
{% for page in pages limit:10 %}
{% if page.date_modified != null  %}
	  <li> <code>{{page.date_modified}}</code> - <a href="{{ page.url }}">{{ page.title }}</a></li>
{% endif %}
{% endfor %}
</ul>

<ul>
{% assign pages = site.pages | sort: 'date_modified' %}
{% for page in pages %}
{% if page.date_modified != null  %}
	  <li> <code>{{page.date_modified}}</code> - <a href="{{ page.url }}">{{ page.title }}</a></li>
{% endif %}
{% endfor %}
</ul>

-->
