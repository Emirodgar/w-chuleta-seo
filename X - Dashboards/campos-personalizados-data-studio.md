---
description: Listado de los blogs oficiales de los principales buscadores
lang: es_ES
permalink: blogs-oficiales
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

## Agrupar búsquedas por intención del usuario

Analizando los términos por los que hemos generado impresiones o clics (Google Search Console) podemos

    case when REGEXP_CONTAINS(Keyword, "how|why|does|which|when|who|which|guide|tutorial|learn|examples|resource|ideas|tips") then "Informational Intent" when regexp_contains(Keyword, "best|top|vs|review|cheap|comparison") then "Transactional Intent" when REGEXP_CONTAINS(Keyword, "Buy|price|cheap|expensive|recommendation|recommended|near me|firm|coupon|order|purchase|pricing") then "Transactional Intent" END

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIxMTUwNjUxMTNdfQ==
-->