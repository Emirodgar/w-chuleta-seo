---
title: Prueba
description: Listado de portales que ofrecen podcast relacionadas con el SEO
date: 10/06/2022
author: Emirodgar
layout: default_1
folder: fuentes-informacion
permalink: test-seo2
  
---

## Prueba 1

<ul>
{% assign posts = site.posts | sort: 'last_modified_at' %}
{% for post in posts %}
  <li>{{ post.title }} (original post date: {{ post.date }})</li>
{% endfor %}
</ul>



## Pruwba 2

<ul>
{% for page in site.pages %}
{% if page.title != null  %}
	  <li> <code>{{page.date}}</code> - <a href="{{ page.url }}">{{ page.title }}</a></li>
{% endif %}
{% endfor %}
</ul>


## Pruwba 2

<ul>
{% assign pages = site.pages | sort: 'last_modified_at' %}
{% for page in pages %}
{% if page.date_modified != null  %}
	  <li> <code>{{page.date_modified}}</code><a href="{{ page.url }}">{{ page.title }}</a></li>
{% endif %}
{% endfor %}
</ul>