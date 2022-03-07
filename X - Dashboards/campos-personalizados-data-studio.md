---
description: Listado de los blogs oficiales de los principales buscadores
lang: es_ES
permalink: blogs-oficiales
author:
  twitter: emirodgar
  
---

# Campos personalizados en Google Data Studio

### Agrupar búsquedas por intención del usuario

Analizando los términos por los que hemos generado impresiones o clics (Google Search Co

    case when REGEXP_CONTAINS(Keyword, "how|why|does|which|when|who|which|guide|tutorial|learn|examples|resource|ideas|tips") then "Informational Intent" when regexp_contains(Keyword, "best|top|vs|review|cheap|comparison") then "Transactional Intent" when REGEXP_CONTAINS(Keyword, "Buy|price|cheap|expensive|recommendation|recommended|near me|firm|coupon|order|purchase|pricing") then "Transactional Intent" END

<!--stackedit_data:
eyJoaXN0b3J5IjpbNjM4MDYzNjAzXX0=
-->