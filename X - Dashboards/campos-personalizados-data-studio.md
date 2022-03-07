---
description: Listado de los blogs oficiales de los principales buscadores
lang: es_ES
permalink: campos-personalizados-data-studio
author:
  twitter: emirodgar
  
---

# Campos personalizados en Google Data Studio

## Extraer marca de la URL

Trabajando con URLs es difícil discernir el dominio (o marca) de las mismas. Para facilitar ese análisis podemos crear una dimensión o campo personalizado que incluya únicamente ese valor.

```
TRIM(REGEXP_EXTRACT(REGEXP_REPLACE(REGEXP_REPLACE(URL, "https?://", ""), R"^(w{3}\.)?", ""), "([^/?]+)"))
```

## Extraer dominio principal

Si disponemos de URLs muy largas y sólo nos interesa conocer el dominio principal de las mismas, con el siguiente código podremos disponer del mismo

```
REGEXP_EXTRACT(URL , '^https://[^/]+/([^/]+)/' )
```

## Agrupar palabras por su clasificación en las SERPs

A través de Google Search Console sólo podemos obtener el posicionamiento medio de cada término por el que generamos impresiones o clics. Si buscamos la agrupación de los mismos por página (página 1, página 2, etc.) o por rango de posiciones (Top3, Top5, etc.) podemos hacerlo de la siguiente manera.

```
case when REGEXP_MATCH(Rank Absolute, "1|2|3") then "Top 1-3" when regexp_match(Rank Absolute, "4|5|6|7|8|9|10") then "Top 4-10" when regexp_match(Rank Absolute, "11|12|13|14|15|16|17|18|19|20") then "Top 11-20" when REGEXP_CONTAINS(Rank Absolute, "[21-50]") then "Top 21-50" when regexp_Contains(Rank Absolute, "[51-100]*") then "Top 51-100" end
```

## Agrupar búsquedas por intención del usuario

Analizando los términos por los que hemos generado impresiones o clics (Google Search Console) podemos

    case when REGEXP_CONTAINS(Keyword, "how|why|does|which|when|who|which|guide|tutorial|learn|examples|resource|ideas|tips") then "Informational Intent" when regexp_contains(Keyword, "best|top|vs|review|cheap|comparison") then "Transactional Intent" when REGEXP_CONTAINS(Keyword, "Buy|price|cheap|expensive|recommendation|recommended|near me|firm|coupon|order|purchase|pricing") then "Transactional Intent" END

## Clasificar URLs por categorías

Es importante en cualquier estrategia analizar los bloques lógicos. En el caso de Data Studio podemos

```
case when REGEXP_CONTAINS(Address, "blog") then "Blog Posts" when regexp_contains(Address, "white-papers|news|case-studies|insights") then "White papers, Case studies, News, Insights" when regexp_contains(Address, "careers|about-us|contact|job-opportunities|clients|reviews|our-work|our-team|join-team") then "Branded Pages" when regexp_contains(Address, "hospitality-travel-tourism|expertise|economic-development|energy|higher-education|technology|financial-services") then "Services Pages" when regexp_contains(Address, "tag") then "Tag Pages" when Regexp_contains(Address, "/page") then "Paginated" else "Unclassified"
``

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEwOTI3ODA4NDRdfQ==
-->