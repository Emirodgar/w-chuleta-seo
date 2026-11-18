---
title: SEO e inteligencia artificial - Guía de GEO y búsqueda con IA
description: "Cómo funciona la búsqueda con IA (AI Overviews, AI Mode y ChatGPT) y qué hacer para que tu contenido sea elegido como fuente: GEO paso a paso."
date: 09/02/2023
date_modified: 19/11/2026
folder: contenidos
author: Emirodgar
layout: default_1
permalink: seo-inteligencia-artificial
  
---

{:.lead} La búsqueda con IA no sustituye al SEO, pero cambia lo que significa "salir en Google". Ahora no basta con aparecer en una lista de enlaces: hay que ser una fuente que la IA decida usar en su respuesta. A eso se le llama **GEO** (*Generative Engine Optimization*).

> Esta guía se escribió en febrero de 2023, cuando solo existían ChatGPT y Bard. La he rehecho en noviembre de 2026 con lo que Google y OpenAI documentan hoy. Cuando algo es opinión mía y no documentación oficial, lo digo.

## Qué es la búsqueda con IA

Hoy conviven varias experiencias que responden con texto generado en lugar de solo listar enlaces:

- **AI Overviews (Google):** resúmenes que aparecen en el buscador para ayudar a entender un tema complejo, con enlaces para profundizar. Solo salen cuando Google considera que aportan algo más que los resultados clásicos.
- **AI Mode (Google):** una experiencia pensada para consultas que piden explorar, razonar o comparar, con una respuesta más completa y enlaces de apoyo.
- **Búsqueda de ChatGPT:** ChatGPT también consulta la web para responder y cita las páginas que usa.
- **Otros buscadores de respuestas:** Perplexity, Gemini y similares siguen la misma idea.

Dos conceptos útiles: **GEO** es optimizar para que te citen estos sistemas y **AEO** (*Answer Engine Optimization*) es el mismo objetivo visto desde las respuestas directas. En la práctica son lo mismo y se apoyan en el SEO de siempre.

## Cómo eligen las fuentes

Google lo documenta así para AI Overviews y AI Mode:

1. **Query fan-out.** Ante una consulta, el sistema lanza varias búsquedas relacionadas (subpreguntas) para reunir un conjunto más amplio de fuentes. Por eso una página puede aparecer citada por una pregunta que no era su palabra clave principal.
2. **Requisitos técnicos mínimos.** Para ser fuente, la página debe estar **indexada** y ser **elegible para mostrarse con snippet** en Google. No hay más requisitos, pero cumplirlos no garantiza que te muestren.
3. **Sin marcado especial.** Google indica que no hace falta ningún marcado ni archivo específico para aparecer en estas experiencias.

Con ChatGPT ocurre algo parecido: para salir en sus respuestas de búsqueda, su rastreador de búsqueda tiene que poder acceder a tu web (lo detallamos más abajo).

## Qué hacer para que te elijan

Los fundamentos oficiales son los de siempre. Encima de ellos, estas son las prácticas que yo aplico y recomiendo en la [newsletter](https://newsletter.chuletaseo.com/p/google-ai-mode-guia-para-posicionar):

### Lo básico (documentado por Google)

- **Que Googlebot pueda rastrear y renderizar la página.** Sin bloqueos en `robots.txt` ni en el CDN o hosting, y con código 200.
- **Contenido útil y original**, pensado para las personas que hacen la búsqueda, no para el buscador.
- **Texto importante en formato texto**, no solo en imágenes o scripts.
- **Buena experiencia de página**, en móvil y en escritorio.
- **Datos estructurados coherentes** con el contenido visible. Validados, y sin marcar cosas que el usuario no ve.
- **Imágenes y vídeo de calidad** que apoyen el contenido, y los datos de Merchant Center y Perfil de Empresa al día si te aplican.

### Cómo escribir para ser citado (mi criterio)

- **Secciones modulares.** Bloques cortos que responden por sí solos a una pregunta concreta, sin perder el hilo de toda la página.
- **Encabezados en forma de pregunta**, con las preguntas reales de tu audiencia.
- **Cubrir intenciones relacionadas.** Si el fan-out genera subpreguntas, tu contenido debería responder también a las variantes del tema.
- **Estructura clara:** listas, tablas, definiciones y ejemplos concretos.
- **Marca y autoría reconocibles.** Que se sepa quién escribe y por qué merece confianza.

Esto es criterio práctico, no una receta oficial. Google insiste en que no hay un truco específico para la IA.

## Qué no hace falta

Google no pide archivos ni formatos nuevos para aparecer en sus experiencias de IA, ni un tipo de contenido distinto al que ya funciona en búsqueda. Si alguien te vende un "archivo para IA" como imprescindible para Google, pídele la documentación oficial.

## Rastreadores de IA y robots.txt

Decidir a quién dejas entrar es una decisión de negocio. Esto es lo que documentan las dos empresas:

<div class="table-responsive" markdown="1">

| Rastreador | Para qué sirve | Si lo bloqueas |
|---|---|---|
| **Googlebot** | Rastreo e indexación de Google, base de AI Overviews y AI Mode | Dejas de ser elegible para Search y para sus experiencias de IA |
| **Google-Extended** | Controla el uso de tu contenido en entrenamiento y otros sistemas de Google | Limitas ese uso. Google lo indica como control, no como requisito de Search |
| **OAI-SearchBot** | Búsqueda de ChatGPT | No apareces en las respuestas de búsqueda de ChatGPT |
| **GPTBot** | Recopilar contenido para entrenar los modelos de OpenAI | Indicas que no quieres entrenamiento. No afecta a la búsqueda |
| **ChatGPT-User** | Visitas que inicia un usuario desde ChatGPT | Según OpenAI, las reglas de `robots.txt` pueden no aplicarse a estas visitas |

</div>

Un ejemplo para salir en ChatGPT pero no entrenar sus modelos:

    User-agent: OAI-SearchBot
    Allow: /

    User-agent: GPTBot
    Disallow: /

Revisa también tu CDN y tu firewall. Algunos servicios bloquean bots de IA por defecto y puedes estar fuera de las respuestas sin saberlo, aunque tu `robots.txt` diga lo contrario.

## Cómo medirlo

- **Search Console:** las impresiones y clics de AI Overviews y AI Mode se cuentan dentro del informe de rendimiento, en la búsqueda "Web". No hay un filtro separado, así que no puedes aislar su tráfico solo con esa herramienta.
- **Analítica:** revisa los referidos de ChatGPT, Perplexity y similares para ver cuánta visita llega desde ahí.
- **Valor, no solo clics:** Google recomienda evaluar conversiones (ventas, registros, consultas) y no solo visitas, porque el tráfico que llega desde estas respuestas suele ser más cualificado.

En la newsletter he explicado cómo [analizar el tráfico de IA que llega a tu web](https://newsletter.chuletaseo.com/p/analizar-el-trafico-de-ia-que-llega).

## Cómo ha cambiado esto desde 2023

- `Diciembre 2022` - Nace ChatGPT y se abre a millones de usuarios.
- `Febrero 2023` - Bing integra ChatGPT en su buscador y Google anuncia Bard.
- `Mayo 2025` - Google publica sus recomendaciones oficiales para tener éxito en AI Overviews y AI Mode.
- `Junio 2025` - Publico en la newsletter la guía para posicionar en AI Mode.

## Preguntas frecuentes

**¿Qué es GEO?** *Generative Engine Optimization*. Son las prácticas para que tu contenido sea elegido y citado por buscadores con IA como AI Overviews, AI Mode o ChatGPT.

**¿Es distinto del SEO?** Se apoya en él. Para ser fuente en Google tu página tiene que estar indexada y ser elegible con snippet. La diferencia está en cómo escribes y estructuras el contenido para responder preguntas concretas.

**¿Necesito un marcado o archivo especial para aparecer en AI Overviews?** No. Google indica que no hace falta ningún marcado ni archivo específico.

**¿Debo bloquear a los bots de IA?** Depende de tu objetivo. Si quieres salir en las respuestas de ChatGPT, tienes que permitir OAI-SearchBot. Si no quieres que se use tu contenido para entrenar sus modelos, puedes bloquear GPTBot sin afectar a la búsqueda.

## Recursos

- [Funciones de IA y tu sitio web (documentación de Google)](https://developers.google.com/search/docs/appearance/ai-features)
- [Cómo tener éxito en la búsqueda con IA (blog de Google Search Central, mayo de 2025)](https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search)
- [Rastreadores de OpenAI: OAI-SearchBot, GPTBot y ChatGPT-User](https://developers.openai.com/api/docs/bots)
- [Postura oficial de Google sobre contenido generado con IA](https://developers.google.com/search/blog/2023/02/google-search-and-ai-content)
- [Guía de AI Mode para posicionar (newsletter ChuletaSEO)](https://newsletter.chuletaseo.com/p/google-ai-mode-guia-para-posicionar)
- [Common Crawl y su importancia para el SEO (newsletter ChuletaSEO)](https://newsletter.chuletaseo.com/p/common-crawl-y-su-importancia-para)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Qué es GEO?", "acceptedAnswer": { "@type": "Answer", "text": "GEO (Generative Engine Optimization) son las prácticas para que tu contenido sea elegido y citado por buscadores con IA como AI Overviews, AI Mode o ChatGPT." } },
    { "@type": "Question", "name": "¿Es distinto del SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Se apoya en el SEO. Para ser fuente en Google la página tiene que estar indexada y ser elegible para mostrarse con snippet. La diferencia está en cómo se escribe y estructura el contenido para responder preguntas concretas." } },
    { "@type": "Question", "name": "¿Necesito un marcado o archivo especial para aparecer en AI Overviews?", "acceptedAnswer": { "@type": "Answer", "text": "No. Google indica que no hace falta ningún marcado ni archivo específico para aparecer en AI Overviews y AI Mode." } },
    { "@type": "Question", "name": "¿Debo bloquear a los bots de IA?", "acceptedAnswer": { "@type": "Answer", "text": "Depende del objetivo. Para salir en las respuestas de búsqueda de ChatGPT hay que permitir OAI-SearchBot. Si no quieres que tu contenido se use para entrenar los modelos de OpenAI, puedes bloquear GPTBot sin afectar a la búsqueda." } }
  ]
}
</script>
