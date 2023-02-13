---
title: Cómo identificar los robots de búsqueda
description: 
date: 04/05/2022
folder: fuentes-informacion
author: Emirodgar
layout: default_1
permalink: identificar-robots-busqueda
  
---

## Googlebot

Para identificar el robot de búsqueda de Google, tenemos dos opciones:
 
- Podemos identificarlo a través de [los user-agents](https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers?hl=es-419&visit_id=637872959116022626-2877013490&rd=1).
- Podemos identificarlo a través del [listado de las IPs que utiliza](https://developers.google.com/search/apis/ipranges/googlebot.json?hl=es-419).
- También podemos hacer una [DNS inversa](https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot?hl=es) para asegurarnos de que se trata de Googlebot.

## Bingbot

En el caso del robot de búsqueda de Bing, hace uso de los siguientes user-agents:

**Desktop**  
  
`Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/**W.X.Y.Z** Safari/537.36`  
  
**Mobile**

`Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/**W.X.Y.Z** Mobile Safari/537.36 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)`
