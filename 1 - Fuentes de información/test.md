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

{% assign sorted = site.resources | reverse %}
{% for item in sorted %}
  <h1>{{ item.name }}</h1>
  <p>{{ item.content }}</p>
{% endfor %}



## Pruwba 2

<ul>
{% for page in site.pages %}
{% if page.title != null  %}
	{% if page.folder== "analitica" %}
	  <li> <code>{{page.date}}`</code> - <a href="{{ page.url }}">{{ page.title }}</a></li>
	{% endif %}
{% endif %}
{% endfor %}
</ul>