---
title: Cómo identificar los robots de búsqueda
description: 
date: 04/05/2022
date_modified: 19/11/2026
folder: fuentes-informacion
author: Emirodgar
layout: default_1
permalink: identificar-robots-busqueda
  
---

## Googlebot

Para identificar el robot de búsqueda de Google, tenemos dos opciones:
 
- Podemos identificarlo a través de [los user-agents](https://developers.google.com/crawling/docs/crawlers-fetchers/overview-google-crawlers?hl=es).
- Podemos identificarlo a través del [listado de las IPs que utiliza](https://developers.google.com/static/crawling/ipranges/common-crawlers.json).
- También podemos hacer una [DNS inversa](https://developers.google.com/crawling/docs/crawlers-fetchers/verify-google-requests?hl=es) para asegurarnos de que se trata de Googlebot.

## Bingbot

En el caso del robot de búsqueda de Bing, hace uso de los siguientes user-agents:

**Desktop**  
  
`Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/**W.X.Y.Z** Safari/537.36`  
  
**Mobile**

`Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/**W.X.Y.Z** Mobile Safari/537.36 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)`

Para verificar que una visita es realmente de Bingbot, Bing publica el [listado de las IPs que utiliza](https://www.bing.com/toolbox/bingbot.json).

## Rastreadores de IA

Además de los buscadores clásicos, hoy visitan tu web rastreadores de empresas de IA (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended...). Cada uno sirve a un propósito distinto y se controla por separado. Tienes la tabla completa y ejemplos de robots.txt en [rastreadores de IA y robots.txt](https://chuletaseo.com/rastreadores-ia-robots-txt).
