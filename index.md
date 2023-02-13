---
title: Chuleta SEO
description: Recursos, herramientas y guías. Todo lo que necesitas para tus estrategias SEO.
date: 13/02/2023
folder: autor
author: Emirodgar
layout: default_1
permalink: /index.html
  
---

> Estamos en `desarrollo`, si encuentras algún fallo, danos tiempo :)

Este portal hace una recopilación de recursos, herramientas y guías para poder diseñar y ejecutar estrategias SEO. Utiliza el menú de la izquierda para navegar por las diferentes secciones y acceder a la información que te interesa.


## Autores

Este proyecto, libre y gratuito, está gestionado por [Emirodgar](https://chuletaseo.com/emirodgar), **SEO salmantino** con más de 15 años de experiencia en el sector.  

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
