---
title: Rastreadores de IA y robots.txt - Qué bots permitir o bloquear (GPTBot, Google-Extended, ClaudeBot)
description: "Guía de rastreadores de IA: qué hacen GPTBot, OAI-SearchBot, Google-Extended, ClaudeBot, PerplexityBot y otros, qué pasa si los bloqueas y ejemplos de robots.txt listos para copiar."
date: 19/11/2026
folder: indexacion
author: Emirodgar
layout: default_1
permalink: rastreadores-ia-robots-txt

---

Los **rastreadores de IA** son los robots con los que las empresas de inteligencia artificial recogen contenido de la web: unos para **entrenar modelos**, otros para **alimentar su buscador** y otros para **leer una página cuando un usuario lo pide**. Con el archivo `robots.txt` puedes decidir cuáles dejas entrar. Esta guía explica qué hace cada uno y qué consecuencias tiene bloquearlo.
{:.lead}

1. Índice
{:toc}

## Los tres usos de un rastreador de IA

Cada empresa documenta sus bots por separado, pero casi todos encajan en una de estas categorías. Distinguirlas evita el error más común: bloquear un bot de entrenamiento creyendo que así desapareces de las respuestas de la IA, o al revés.

| Uso | Qué hace | Ejemplos |
|---|---|---|
| **Entrenamiento** | Recoge contenido que puede usarse para entrenar modelos. | GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot |
| **Búsqueda e índice** | Construye el índice con el que el producto enlaza y cita webs. | OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot |
| **Acción del usuario** | Visita una página concreta cuando alguien se lo pide a la IA. | ChatGPT-User, Claude-User, Perplexity-User |

## Tabla de rastreadores

| Empresa | User-agent | Para qué sirve | Si lo bloqueas |
|---|---|---|---|
| **Google** | `Googlebot` | Rastreador de Google Search, incluidas sus funciones. | Sales de Search. Es también el control de acceso para AI Overviews y AI Mode. |
| **Google** | `Google-Extended` | Token de robots.txt: sin user-agent propio. Controla el uso del contenido para entrenar futuros modelos Gemini y para fundamentación en Gemini Apps y Vertex AI. | No afecta a Search ni al ranking. |
| **OpenAI** | `OAI-SearchBot` | Muestra webs en los resultados de búsqueda de ChatGPT. | No apareces en sus respuestas de búsqueda, aunque puedes seguir saliendo como enlace de navegación. |
| **OpenAI** | `GPTBot` | Rastreo cuyo contenido puede usarse para entrenar modelos. | Indicas que tu contenido no debe usarse para entrenamiento. |
| **OpenAI** | `ChatGPT-User` | Acciones iniciadas por un usuario en ChatGPT. | Según OpenAI, al actuar por petición del usuario, las reglas de robots.txt pueden no aplicarse. |
| **Anthropic** | `ClaudeBot` | Recoge contenido que puede contribuir al entrenamiento. | Tu contenido futuro se excluye del entrenamiento. |
| **Anthropic** | `Claude-SearchBot` | Mejora la calidad y precisión de los resultados de búsqueda de Claude. | Puede reducir tu visibilidad en esos resultados. |
| **Anthropic** | `Claude-User` | Accede a webs cuando un usuario de Claude lo necesita. | Puede reducir tu visibilidad en búsquedas dirigidas por usuarios. |
| **Perplexity** | `PerplexityBot` | Muestra y enlaza webs en los resultados de Perplexity. No se usa para entrenar modelos fundacionales, según la propia empresa. | Dejas de aparecer en sus resultados. |
| **Perplexity** | `Perplexity-User` | Visita una página cuando un usuario pregunta. | Perplexity indica que generalmente ignora robots.txt. |
| **Apple** | `Applebot` | Alimenta Spotlight, Siri y Safari, y puede usarse también para entrenar modelos. | Sales de esas búsquedas de Apple. |
| **Apple** | `Applebot-Extended` | No rastrea: solo decide si lo que ya recogió Applebot se usa para entrenar los modelos generativos de Apple. | Puedes seguir apareciendo en búsqueda. No cuenta en el ranking. |
| **Common Crawl** | `CCBot` | Rastreador de una fundación sin ánimo de lucro cuyo archivo abierto se usa en investigación y en el entrenamiento de modelos. | Sales de sus futuros rastreos. |

Esta tabla recoge la documentación de cada empresa a noviembre de 2026. Puede cambiar, y hay más bots que no incluyo (como los de redes sociales o los de otros buscadores). Si necesitas el listado de bots tradicionales de buscadores, mira [cómo identificar robots de búsqueda](https://chuletaseo.com/identificar-robots-busqueda).

## Qué pasa con AI Overviews y AI Mode

Aquí hay una confusión frecuente. **No existe un user-agent de Google para bloquear AI Overviews o AI Mode.** Según la documentación de Google:

- **No hay requisitos adicionales** para aparecer: la página debe estar indexada y poder mostrarse en Search con un fragmento.
- **No hace falta crear archivos de texto o marcado nuevo** para IA ni datos estructurados especiales.
- **Para limitar lo que se muestra** se usan `nosnippet`, `data-nosnippet`, `max-snippet` o `noindex`. Tienes el detalle en la guía de [nosnippet](https://chuletaseo.com/nosnippet).
- **Google-Extended no afecta a Search.** Bloquearlo no te saca de AI Overviews ni de AI Mode.

Si bloqueas `Googlebot`, sales de Google Search entero. Para el GEO en Google, lo que importa sigue siendo estar indexado y ser útil. Mira la [Chuleta GEO](https://chuletaseo.com/chuleta-geo) y [SEO e inteligencia artificial](https://chuletaseo.com/seo-inteligencia-artificial).

## Tres estrategias de robots.txt

Elige según lo que quieras conseguir. Pon el archivo en la raíz del dominio (`https://tudominio.com/robots.txt`).

### 1. Abrirlo todo (la opción por defecto)

Si no tienes reglas para estos bots, el contenido es accesible para todos. Es lo más sencillo y la opción coherente si quieres máxima visibilidad en respuestas de IA.

```
User-agent: *
Allow: /

Sitemap: https://tudominio.com/sitemap.xml
```

### 2. Aparecer en la búsqueda de IA, pero no entrenar modelos

Es la postura más habitual para editores que quieren citas y tráfico sin ceder contenido al entrenamiento.

```
User-agent: *
Allow: /

# Entrenamiento de modelos: bloqueado
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: CCBot
Disallow: /

# Búsqueda de IA: permitida (no hace falta una regla, pero puedes dejarla explícita)
User-agent: OAI-SearchBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://tudominio.com/sitemap.xml
```

### 3. Bloquear todo lo que sea IA

Solo tiene sentido si prefieres no aparecer en esas respuestas. Ten en cuenta que perderás las citas y los enlaces desde esos productos.

```
User-agent: GPTBot
Disallow: /

User-agent: OAI-SearchBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Claude-SearchBot
Disallow: /

User-agent: Claude-User
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: Perplexity-User
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: CCBot
Disallow: /
```

Tres detalles para no equivocarte:

- **Un bot sigue su grupo más específico.** Si un bot tiene su propio bloque con su nombre, sigue ese bloque y no el de `User-agent: *`.
- **Un cambio no es inmediato.** OpenAI y Perplexity hablan de hasta 24 horas.
- **Prueba el archivo** antes de publicarlo. Un `Disallow: /` mal puesto en `*` bloquea todo el sitio.

## Qué no consigue el robots.txt

- **No es un sistema de seguridad.** Es una petición que los bots educados cumplen. Para contenido privado, usa autenticación.
- **No siempre se aplica a las visitas por petición del usuario.** OpenAI y Perplexity avisan de que sus fetchers de usuario pueden ignorarlo.
- **No borra lo que ya se rastreó.** Solo afecta a lo que se rastree a partir de ahora.
- **Los user-agent se pueden falsificar.** Google, Common Crawl y otros advierten de que otros rastreadores se hacen pasar por los suyos.

## Cómo verificar quién te visita

Mira primero tus logs de servidor. Un ejemplo para contar visitas por IP de los bots principales (ajústalo al formato de tu log):

```
grep -E "GPTBot|OAI-SearchBot|ChatGPT-User|ClaudeBot|Claude-SearchBot|PerplexityBot|CCBot" access.log | awk '{print $1}' | sort | uniq -c | sort -rn | head
```

Después, comprueba que la IP está en el rango oficial de esa empresa. Estas son las listas que publican:

- **OpenAI:** `openai.com/searchbot.json`, `openai.com/gptbot.json` y `openai.com/chatgpt-user.json`.
- **Anthropic:** `claude.com/crawling/bots.json`.
- **Perplexity:** `perplexity.ai/perplexitybot.json` y `perplexity.ai/perplexity-user.json`.
- **Common Crawl:** `index.commoncrawl.org/ccbot.json`, además de la verificación por DNS inverso.

Anthropic avisa de que bloquear por IP no es un método fiable para excluirse. La vía recomendada es robots.txt.

Un detalle práctico: si usas un cortafuegos o un gestor de bots (por ejemplo, el de tu CDN), esas reglas pueden bloquear a los rastreadores aunque tu robots.txt los permita. Si quieres ser visible para la IA, revisa también esa capa.

## Checklist rápida

1. **Decide tu objetivo:** visibilidad en IA, protección del contenido o un punto medio.
2. **Separa entrenamiento y búsqueda** al escribir las reglas.
3. **Publica el robots.txt** en la raíz y pruébalo.
4. **Comprueba el sitemap** y que tus páginas importantes están indexadas. Mira [sitemap XML](https://chuletaseo.com/sitemap-xml).
5. **Revisa los logs** al cabo de unos días.
6. **Revisa la lista cada pocos meses**, porque las empresas añaden y retiran bots.

<section id="cs_recursos"></section>

## Recursos

- [Rastreadores de OpenAI](https://developers.openai.com/api/docs/bots){:target="_blank"}
- [Rastreadores de Anthropic](https://support.claude.com/en/articles/8896518-anthropic-crawlers){:target="_blank"}
- [Rastreadores de Perplexity](https://docs.perplexity.ai/docs/resources/perplexity-crawlers){:target="_blank"}
- [Rastreadores comunes de Google y Google-Extended](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers){:target="_blank"}
- [Funciones de IA y tu web (Google)](https://developers.google.com/search/docs/appearance/ai-features){:target="_blank"}
- [Applebot y Applebot-Extended](https://support.apple.com/en-us/119829){:target="_blank"}
- [CCBot (Common Crawl)](https://commoncrawl.org/ccbot){:target="_blank"}
- [Glosario SEO y GEO](https://chuletaseo.com/glosario-seo)

<section id="cs_pr"></section>

## Preguntas y respuestas

<div class="row">
          <div class="col-lg-12">
            <div class="accordion accordion-alterate arrow-right" id="popularTopics">
              <div class="card">
                <div class="card-header" id="heading1">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">¿Bloquear GPTBot hace que ChatGPT deje de citar mi web?</a> </h5>
                </div>
                <div id="collapse1" class="collapse" aria-labelledby="heading1" data-parent="#popularTopics">
                  <div class="card-body">No. GPTBot controla si tu contenido puede usarse para entrenar los modelos de OpenAI. Para aparecer en las respuestas de búsqueda de ChatGPT lo que cuenta es OAI-SearchBot. OpenAI indica que cada configuración es independiente.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading2">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">¿Google-Extended afecta a mi posición en Google?</a> </h5>
                </div>
                <div id="collapse2" class="collapse" aria-labelledby="heading2" data-parent="#popularTopics">
                  <div class="card-body">No. Según Google, Google-Extended no influye en la inclusión en Search ni se usa como señal de ranking. Solo controla si el contenido puede usarse para entrenar futuros modelos Gemini y para la fundamentación en Gemini Apps y Vertex AI.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading3">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">¿Cómo controlo si salgo en AI Overviews o en AI Mode?</a> </h5>
                </div>
                <div id="collapse3" class="collapse" aria-labelledby="heading3" data-parent="#popularTopics">
                  <div class="card-body">Con los mismos controles de Search. Google explica que no hay requisitos adicionales: la página debe estar indexada y poder mostrarse con un fragmento. Para limitar lo que se muestra se usan nosnippet, data-nosnippet, max-snippet o noindex, y para el acceso, las reglas de robots.txt para Googlebot.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading4">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">¿Respetan todos los bots el robots.txt?</a> </h5>
                </div>
                <div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#popularTopics">
                  <div class="card-body">Los rastreadores automáticos de las grandes empresas sí lo declaran. Los fetchers que actúan cuando un usuario lo pide (ChatGPT-User, Perplexity-User) pueden no aplicarlo, y cualquiera puede falsificar un user-agent. Si necesitas bloquear de verdad, combina robots.txt con la verificación de IP y las reglas de tu cortafuegos.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading5">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">¿Cuánto tarda un cambio en robots.txt en notarse?</a> </h5>
                </div>
                <div id="collapse5" class="collapse" aria-labelledby="heading5" data-parent="#popularTopics">
                  <div class="card-body">OpenAI y Perplexity hablan de hasta 24 horas para reflejar los cambios. En Google puede tardar más: su documentación cita desde varios días hasta varios meses para que los cambios se reflejen en las funciones de IA.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
