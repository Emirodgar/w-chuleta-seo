---
title: Medir el tráfico de IA en GA4 - Canal AI Assistant y grupo de canales personalizado
description: "Cómo ver en Google Analytics 4 las visitas que llegan desde ChatGPT, Gemini, Perplexity o Claude: el canal AI Assistant, un grupo de canales personalizado con regex, límites y qué mirar."
date: 19/11/2026
folder: informes
author: Emirodgar
layout: default_1
permalink: medir-trafico-ia-ga4

---

Cada vez llegan más visitas desde asistentes de IA y, si no las separas, se mezclan con Referral o Direct. Esta guía explica cómo **medir el tráfico de IA en GA4**: qué canal trae ya Google Analytics, cómo completarlo con un grupo de canales personalizado y qué límites tiene la medición.
{:.lead}

<p><a class="btn js-nl-cta" data-cta="trafico-ia" href="https://newsletter.chuletaseo.com/p/analizar-el-trafico-de-ia-que-llega?utm_source=chuletaseo.com&amp;utm_medium=guia&amp;utm_campaign=trafico-ia">Ver la edición de la newsletter</a></p>

1. Índice
{:toc}

## Qué se puede medir y qué no

- **Sí:** las visitas que llegan con un enlace desde un asistente: sesiones, páginas de destino, interacción y conversiones.
- **No:** la pregunta del usuario, las menciones sin clic ni las veces que una IA cita tu marca sin enviar visita. Para eso necesitas otras herramientas de seguimiento de menciones.
- **No separable:** el tráfico de AI Overviews y AI Mode de Google. Según [Google](https://developers.google.com/search/docs/appearance/ai-features){:target="_blank"}, se incluye en el tráfico de búsqueda de Search Console, en el tipo Web, sin separarlo.

## Paso 1. El canal AI Assistant que ya trae GA4

La [documentación de canales predeterminados](https://support.google.com/analytics/answer/9756891?hl=en){:target="_blank"} incluye un canal **AI Assistant**: usuarios que llegan desde fuentes como ChatGPT, Gemini, DeepSeek, Copilot y Grok. La regla es que el medio coincida exactamente con `ai-assistant`. Google indica que **excluye AI Overviews y AI Mode**.

Cómo verlo: en *Informes → Adquisición → Adquisición de tráfico*, con la dimensión "Grupo de canales principal de la sesión", busca la fila AI Assistant. Si no aparece, puede que aún no tengas visitas de esas fuentes, o que tu propiedad use otro grupo de canales principal.

La página que he consultado **no incluye Perplexity ni Claude** en la lista. Para ellos y para cualquier plataforma nueva necesitas el paso 2. La página tampoco da la fecha en que se añadió el canal, así que no lo doy por hecho en propiedades antiguas.

## Paso 2. Canal personalizado para completar

Google permite crear [grupos de canales personalizados](https://support.google.com/analytics/answer/13051316?hl=en){:target="_blank"}. Lo que dice la documentación:

- Ruta: *Admin → Visualización de datos → Grupos de canales* (en inglés, Admin → Data display → Channel groups). Hace falta ser Editor o superior.
- Se crea copiando el grupo predeterminado y añadiendo canales con grupos de condiciones.
- **El orden importa:** el tráfico se asigna al primer canal cuya definición cumple. Coloca tu canal de IA **por encima de Referral**.
- Se aplica **de forma retroactiva** a los informes.
- Una propiedad estándar admite 2 grupos personalizados.

### Qué poner en el canal

Crea un canal llamado "IA (completo)" con la condición *Fuente de la sesión* que *coincide con la expresión regular*. En GA4 la coincidencia es completa, por eso la expresión empieza y termina con `.*`:

```
.*(chatgpt|openai|perplexity|claude|gemini|copilot|deepseek|grok|phind).*
```

Esta expresión es una propuesta mía y no la he probado con tus datos. Es amplia a propósito, y puede coincidir con fuentes que no son de IA (por ejemplo, una web con "claude" en el dominio). Antes de guardarla, mira tus fuentes reales: en el informe de adquisición con la dimensión *Fuente de la sesión*, filtra por cada nombre y revisa que sean lo que esperas. Si quieres sumar también el canal nativo, añade otra condición *O* con el grupo de canales AI Assistant.

## ChatGPT y las etiquetas UTM

[OpenAI indica en su FAQ para editores](https://help.openai.com/en/articles/12627856){:target="_blank"} que ChatGPT añade `utm_source=chatgpt.com` a los enlaces de referencia, y que quienes permiten el acceso de OAI-SearchBot pueden seguir ese tráfico con herramientas como Google Analytics. Dos consecuencias:

- Si bloqueas OAI-SearchBot en robots.txt, tu contenido deja de ser elegible para aparecer en las respuestas de búsqueda de ChatGPT. Mira la [guía de rastreadores de IA y robots.txt](https://chuletaseo.com/rastreadores-ia-robots-txt).
- Una visita que llega sin la etiqueta ni el referrer se contará como Direct. Algunos blogs informan de periodos en los que muchos enlaces llegaron sin etiqueta. No lo he podido confirmar con OpenAI.

## Qué mirar una vez separado

1. **Sesiones y tendencia** del canal. Al principio el volumen será pequeño: lo importante es la evolución mes a mes.
2. **Páginas de destino.** Qué contenidos citan los asistentes. Es la forma de inferir qué preguntas generan las visitas.
3. **Interacción y conversiones** frente a Organic Search. Compáralo con cuidado, con muestras pequeñas.
4. **Fuente por fuente.** Cada asistente se comporta distinto: no los agrupes si quieres decidir dónde actuar.
5. **Páginas sin visitas de IA** que sí posicionan en Google: son candidatas a revisar para que respondan de forma más clara y directa.

Si no quieres montarlo a mano, el [dashboard de tráfico de IA](https://chuletaseo.com/dashboards-seo-gratuitos) de Looker Studio parte de una fuente de GA4 y ya muestra plataformas, páginas, conversión y países.

## Limitaciones

- **Direct escondido.** Apps móviles, navegadores integrados y enlaces copiados pueden llegar sin referrer. Tus cifras de IA son un suelo, no el total.
- **Sin consulta.** No sabrás qué preguntó la persona.
- **Sin menciones.** Una cita sin clic no aparece en GA4.
- **La lista cambia.** Aparecen asistentes nuevos y cambian dominios: revisa la expresión regular cada cierto tiempo.
- **Parámetros extra.** Si ves URLs con `srsltid`, es otro asunto: mira la guía del [parámetro srsltid](https://chuletaseo.com/parametro-srsltid).

## Checklist

- [ ] Localiza el canal AI Assistant en Adquisición de tráfico.
- [ ] Lista las fuentes reales de tu propiedad que parezcan IA.
- [ ] Crea el grupo de canales personalizado y colócalo sobre Referral.
- [ ] Comprueba que el tráfico clasificado es el esperado.
- [ ] Guarda una exploración o un informe con las páginas de destino.
- [ ] Revisa la expresión regular cada trimestre.
- [ ] Si usas Looker Studio, conecta el dashboard de tráfico de IA a tu propiedad.

<section id="cs_recursos"></section>

## Recursos

- [Analizar el tráfico de IA que llega a nuestro sitio (newsletter)](https://newsletter.chuletaseo.com/p/analizar-el-trafico-de-ia-que-llega){:target="_blank"}
- [Canales predeterminados de GA4](https://support.google.com/analytics/answer/9756891?hl=en){:target="_blank"}
- [Grupos de canales personalizados en GA4](https://support.google.com/analytics/answer/13051316?hl=en){:target="_blank"}
- [Funciones de IA y tu sitio web (Google)](https://developers.google.com/search/docs/appearance/ai-features){:target="_blank"}
- [Publishers and Developers FAQ (OpenAI)](https://help.openai.com/en/articles/12627856){:target="_blank"}
- [Dashboards SEO gratuitos](https://chuletaseo.com/dashboards-seo-gratuitos)
- [Chuleta GEO](https://chuletaseo.com/chuleta-geo)
- [SEO e inteligencia artificial](https://chuletaseo.com/seo-inteligencia-artificial)
- [Google Analytics 4: guía](https://chuletaseo.com/google-analytics)

<section id="cs_pr"></section>

## Preguntas y respuestas

<div class="row">
          <div class="col-lg-12">
            <div class="accordion accordion-alterate arrow-right" id="popularTopics">
              <div class="card">
                <div class="card-header" id="heading1">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">¿GA4 separa el tráfico de AI Overviews y AI Mode?</a> </h5>
                </div>
                <div id="collapse1" class="collapse" aria-labelledby="heading1" data-parent="#popularTopics">
                  <div class="card-body">No de forma documentada. Según Google, el tráfico de AI Overviews y AI Mode se incluye en el tráfico de búsqueda de Search Console, dentro del tipo Web. Y la definición del canal AI Assistant de GA4 excluye expresamente AI Overviews y AI Mode. No hay forma oficial de aislarlo.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading2">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">¿Por qué una parte de mi tráfico de ChatGPT aparece como Direct?</a> </h5>
                </div>
                <div id="collapse2" class="collapse" aria-labelledby="heading2" data-parent="#popularTopics">
                  <div class="card-body">Porque una visita sin referrer ni etiquetas no se puede atribuir. OpenAI indica que etiqueta sus enlaces con utm_source=chatgpt.com, pero si el enlace se abre desde una app o se pierde la etiqueta, GA4 lo registra como Direct. Por eso las cifras de IA son un mínimo.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading3">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">¿Puedo saber qué preguntó el usuario?</a> </h5>
                </div>
                <div id="collapse3" class="collapse" aria-labelledby="heading3" data-parent="#popularTopics">
                  <div class="card-body">No. GA4 solo registra la visita y su origen. Lo que se puede hacer es mirar qué páginas reciben esas visitas e inferir qué tipo de consulta las genera.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading4">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">¿Qué hago si el canal AI Assistant ya recoge ChatGPT y Gemini?</a> </h5>
                </div>
                <div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#popularTopics">
                  <div class="card-body">Úsalo como base y crea un canal personalizado solo para completarlo: Perplexity, Claude y otras plataformas que no figuran en la lista de Google. Así no pierdes lo que GA4 ya clasifica.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading5">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">¿Los datos pasados se reclasifican al crear el canal?</a> </h5>
                </div>
                <div id="collapse5" class="collapse" aria-labelledby="heading5" data-parent="#popularTopics">
                  <div class="card-body">Sí. Google indica que los grupos de canales personalizados se pueden aplicar de forma retroactiva en los informes.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
