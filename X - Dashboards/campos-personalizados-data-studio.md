---
title: Campos personalizados en Looker Studio
description: Saca más rendimiento a Looker Studio creando campos específicos para tus necesidades
date: 25/10/2022
folder: informes
author: Emirodgar
layout: default_1
permalink: campos-personalizados-data-studio
  
---

### Eliminar el dominio de las URL

Si nuestro informe sólo contiene información de un dominio principal, sin ningún subdominio, entonces es interesante eliminar dicho dominio para dejar únicamente la información relevante (el *path* de la URL).

Pasaríamos de tener `chuletaseo.com/ejemplo` a `/ejemplo` lo cual hará más sencillo los análisis. Para ello necesitaremos crear un campo personalizado con la siguiente fórmula (ojo, si el dominio no termina en `.com`, habrá que adaptarlo).

    REGEXP_EXTRACT(Landing  Page,  ".*\\.com/(.*)$")

### Crear un filtro para tráfico de marca y no marca

En cualquier estrategia SEO es esencial diferenciar los análisis entre marca y no marca. Con el siguiendo código podremos crear fácilmente este campo.

```
case 
 when REGEXP_CONTAINS(Keyword, 'chuletaseo|chuleta^|chuleta seo') then "Marca" 
 when REGEXP_CONTAINS(Keyword, '(not provided)|(not set)|(unavailable)') then "Sin especificar" 
 else "No marca" 
end
```

### Extraer marca de la URL

Trabajando con URLs es difícil discernir el dominio (o marca) de las mismas. Para facilitar ese análisis podemos crear una dimensión o campo personalizado que incluya únicamente ese valor.

```
TRIM(REGEXP_EXTRACT(REGEXP_REPLACE(REGEXP_REPLACE(URL, "https?://", ""), R"^(w{3}\.)?", ""), "([^/?]+)"))
```

### Extraer dominio principal

Si disponemos de URLs muy largas y sólo nos interesa conocer el dominio principal de las mismas, con el siguiente código podremos disponer del mismo

```
REGEXP_EXTRACT(URL , '^https://[^/]+/([^/]+)/' )
```

### Agrupar palabras por su clasificación en las SERPs

A través de Google Search Console sólo podemos obtener el posicionamiento medio de cada término por el que generamos impresiones o clics. Si buscamos la agrupación de los mismos por página (página 1, página 2, etc.) o por rango de posiciones (Top3, Top5, etc.) podemos hacerlo de la siguiente manera.

```
case 
 when REGEXP_MATCH(Rank, "1|2|3") then "Top 1-3" 
 when regexp_match(Rank, "4|5|6|7|8|9|10") then "Top 4-10" 
 when regexp_match(Rank, "11|12|13|14|15|16|17|18|19|20") then "Top 11-20" 
 when REGEXP_CONTAINS(Rank, "[21-50]") then "Top 21-50" 
 when regexp_Contains(Rank, "[51-100]*") then "Top 51-100" 
end
```

### Agrupar búsquedas por intención del usuario

Analizando los términos por los que hemos generado impresiones o clics (Google Search Console) podemos

    case 
     when REGEXP_CONTAINS(Keyword, "how|why|does|which|when|who|which|guide|tutorial|learn|examples|resource|ideas|tips") then "Informational Intent" 
     when regexp_contains(Keyword, "best|top|vs|review|cheap|comparison") then "Transactional Intent" 
     when REGEXP_CONTAINS(Keyword, "Buy|price|cheap|expensive|recommendation|recommended|near me|firm|coupon|order|purchase|pricing") then "Transactional Intent" 
    end

### Clasificar URLs por categorías

Es importante en cualquier estrategia analizar los bloques lógicos, además de tener siempre la visión global. En el caso de Data Studio podemos agrupar y generar nuestros propios bloques en función de lo que nos interese monitorizar.

```
case 
 when REGEXP_CONTAINS(Address, "blog") then "Blog Posts" 
 when regexp_contains(Address, "white-papers|news|case-studies|insights") then "White papers, Case studies, News, Insights" 
 when regexp_contains(Address, "careers|about-us|contact|job-opportunities|clients|reviews|our-work|our-team|join-team") then "Branded Pages" 
 when regexp_contains(Address, "hospitality-travel-tourism|expertise|economic-development|energy|higher-education|technology|financial-services") then "Services Pages" 
 when regexp_contains(Address, "tag") then "Tag Pages" when Regexp_contains(Address, "/page") then "Paginated" else "Unclassified"
end
```

### Crear un campo de idioma

Si trabajamos en las URLs con parámetros o subcarpetas idiomáticas, podemos rápidamente crear un campo específico para poder agrupar los análisis de forma rápida por este campo.

```
case 
 when CONTAINS_TEXT(Landing Page,"/es/") then "Español" 
 when CONTAINS_TEXT(Landing Page,"/fr/") THEN "Francés" 
 when CONTAINS_TEXT(Landing Page,"/de/") THEN "Alemán" 
 when CONTAINS_TEXT(Landing Page,"/it/") THEN "Italiano" 
 else "Inglés" 
end
```

### Convierte fechas a días transcurridos

A veces una simple fecha no nos aporta información suficiente, pero si calculamos los días que han pasado desde ese momento, podemos accionar análisis de manera más sencilla.

```
case 
 when DATE_DIFF(TODAY(), Publicado) < 30 then "Publicado hace 30 días" 
 when DATE_DIFF(TODAY(), Publicado) < 60 then "Publicado hace 60 días" 
 when DATE_DIFF(TODAY(), Publicado) < 90 then "Publicado hace 90 días" 
 when DATE_DIFF(TODAY(), Publicado) < 180 then "Publicado hace 180 días" 
 else "Publicado hace más de 180 días" end
```

### Otros ejemplos útiles

#### Cómo utilizar reglas condicionales

```
CASE 
 when País = "es" and Medium = "cpc" THEN "ES - PPC" 
 ELSE "otro" 
END
```

#### Validar si un campo no tiene valor

```
CASE 
 WHEN Medium != "cpc" THEN "orgánico" 
 ELSE "pago" 
END
```

#### Incluir un valor en un bloque lógico

```
CASE 
 WHEN Precio < 20 THEN "Pequeño" 
 WHEN Precio >= 20 and Precio < 100 THEN "Mediano" 
 WHEN Precio >= 100 THEN "Grande" 
END
```


<section id="cs_recursos"></section>

## Recursos

- [Galería de templates de Looker Studio](https://datastudio.google.com/gallery)

<section id="cs_herramientas"></section>

## Herramientas

- [Google Looker Studio](https://datastudio.google.com/)

<section id="cs_pr"></section>

## Preguntas frecuentes
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEzNTA0NDQyOTcsLTIwNzYwNjE1NDEsND
U2NjE3Mzc1LDE5ODcyMjkyNzQsLTIwNjc5MDcxODEsLTE4MDcw
MTE3OTEsLTE0NDI2MzMxMDRdfQ==
-->