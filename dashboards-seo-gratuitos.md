---
title: Dashboards SEO gratuitos en Looker Studio - Plantillas para Search Console y GA4
description: "Plantillas gratuitas de Looker Studio para SEO: dashboard completo, tráfico de IA, Google Discover, actualizaciones de Google, contenidos y ecommerce. Cómo usarlas con tus datos."
date: 19/11/2026
folder: informes
author: Emirodgar
layout: default_1
permalink: dashboards-seo-gratuitos

---

Una colección de **dashboards SEO gratuitos de Looker Studio** para analizar tu web con tus propios datos de Search Console y Google Analytics 4. Los he creado y usado en mis proyectos y los comparto abiertos: sirven para ver la evolución del tráfico, detectar oportunidades, medir el tráfico de IA y entender el impacto de las actualizaciones de Google.
{:.lead}

<p><a class="btn js-nl-cta" data-cta="dashboards" href="https://newsletter.chuletaseo.com/?utm_source=chuletaseo.com&amp;utm_medium=guia&amp;utm_campaign=dashboards">Recibir nuevos dashboards</a></p>

1. Índice
{:toc}

## Los dashboards

Todos son informes de Looker Studio. Los abres con el enlace, haces una copia y la conectas a tus datos (más abajo te explico cómo).

| Dashboard | Para qué sirve | Datos |
|---|---|---|
| [**Dashboard SEO completo**](https://lookerstudio.google.com/reporting/54c1f350-7fcc-4a13-9d2f-e0799abc3a45/page/p_ai7yme063c){:target="_blank"} | Informe general con 19 informes. Solo está en español. | Search Console y GA4 |
| [**Tráfico de plataformas de IA**](https://lookerstudio.google.com/u/0/reporting/f3d67536-554f-40ef-a958-f08f7d45f568/page/p_3l3ng3jr6c){:target="_blank"} | Visitas que llegan desde ChatGPT, Perplexity, Copilot, Claude, Gemini y otras, con las páginas y los países. | GA4 |
| [**Tráfico de Google Discover**](https://lookerstudio.google.com/u/0/reporting/a785ad62-8b12-45c4-87a4-5e6783505f9c/page/p_3l3ng3jr6c){:target="_blank"} | Tráfico diario desde Discover y qué publicaciones han tenido más interés. Pensado para medios. | Search Console |
| [**Impacto estimado de la IA en el tráfico orgánico**](https://lookerstudio.google.com/reporting/06cfec7f-4c13-42b0-a015-3b390b49a42e/page/p_ai7yme063c){:target="_blank"} | Estima el tráfico orgánico que podrían canibalizar las respuestas generativas de Google e identifica las zonas de riesgo. | Search Console |
| [**Análisis de actualizaciones de Google**](https://lookerstudio.google.com/u/0/reporting/987c73f1-2021-479f-abec-1ae418e1b241/page/p_ai7yme063c){:target="_blank"} | Muestra cómo evoluciona el tráfico SEO y cuánto lo afectan las actualizaciones. | Search Console |
| [**Análisis de contenidos SEO**](https://lookerstudio.google.com/u/0/reporting/1d7366b9-3549-413f-82f4-23866217dba3/page/OO8PC){:target="_blank"} | Datos y gráficos para analizar los contenidos y su visibilidad. | Search Console |
| [**Ecommerce**](https://lookerstudio.google.com/u/0/reporting/18548000-2c74-4e23-a00e-c7225a0edfa2/page/cb7PC){:target="_blank"} | Datos de ventas del módulo de ecommerce y oportunidades para aumentarlas. | GA4 (ecommerce) |

La plantilla base de los diseños es de Katherine Kato. El resto es de Emilio Rodríguez García.

## Qué encontrarás en el dashboard SEO completo

Es el más usado. Estas son sus secciones principales:

- **Evolución global:** captación y conversión de todos los canales y calidad del tráfico.
- **Análisis SEO:** evolución, captación, indexación, palabras clave, posición media y mercados.
- **Análisis de contenidos:** términos por clústeres o secciones, intención de búsqueda y páginas con más impresiones o clics.
- **Ecommerce:** ventas por canal, dispositivo, ubicación y producto o servicio.
- **Algoritmos de Google:** fechas de despliegue superpuestas a clics e impresiones.
- **Inteligencia artificial:** tráfico desde plataformas de IA y búsquedas informacionales que podrían recibir respuesta de IA.
- **Canibalización:** páginas que posicionan para las mismas búsquedas.
- **Oportunidades:** por palabras, por páginas y anomalías, con las métricas propias "potencial" y "clics perdidos".

Hay una versión privada más especializada que uso con clientes, con filtros de marca y no marca. La pública no la incluye.

## Cómo usar un dashboard con tus datos

1. **Abre el enlace** del dashboard que quieras.
2. **Haz una copia del informe.** En Looker Studio, desde el menú Archivo, usa "Hacer una copia". Si no ves la opción, puede que no tengas permiso con esa cuenta: entra con la cuenta de Google que usas en tu analítica.
3. **Elige tus fuentes de datos** en la ventana de copia, o sustitúyelas después desde el menú Recurso y "Administrar fuentes de datos agregadas". Google explica cómo [sustituir la fuente de datos de un componente, una página o un informe](https://docs.cloud.google.com/looker/docs/studio/replace-the-data-source-for-a-component-page-or-report){:target="_blank"}. Looker Studio intenta asignar los campos por identificador y nombre, pero revisa que todos los gráficos sigan funcionando.
4. **Comprueba los datos** comparando algunas cifras con Search Console o GA4.

Los nombres exactos de los menús pueden variar con el tiempo. Si algo no coincide, consulta la ayuda actual de Looker Studio.

### Conectar Search Console

Google detalla cómo [conectar Search Console con Looker Studio](https://docs.cloud.google.com/looker/docs/studio/connect-to-search-console){:target="_blank"}. Lo más importante:

- **Impresiones del sitio o de URL.** Son dos formas de agregar los datos. Una misma fuente solo puede usar una, así que para tener las dos necesitas dos fuentes. **Impresiones de URL** es la que permite ver Discover y Google News, además de web, imagen, vídeo y noticias.
- **Misma cuenta.** Usa la misma cuenta de Google en Search Console y Looker Studio, con al menos permiso de visualización.
- **Consultas vacías.** Search Console no muestra todas las consultas por privacidad. Filtra los valores nulos si te distorsionan el análisis.

## Dashboard de tráfico de IA: cómo se lee

Este dashboard se conecta a una fuente de GA4 y muestra:

- **Plataformas de IA** que envían visitas y su evolución.
- **Páginas de entrada**, para inferir qué contenidos aparecen en las respuestas.
- **Conversión** de esos visitantes.
- **País de origen.**

Tiene un límite importante: **no sabes qué pregunta trajo la visita.** Lo que puedes hacer es un análisis inverso: mirar qué páginas reciben visitas de IA y deducir qué tipo de consultas las pueden generar. Hay más detalle en la edición de la newsletter [Analizar el tráfico de IA que llega a nuestro sitio](https://newsletter.chuletaseo.com/p/analizar-el-trafico-de-ia-que-llega){:target="_blank"}.

Para el contexto, mira la [Chuleta GEO](https://chuletaseo.com/chuleta-geo) y [SEO e inteligencia artificial](https://chuletaseo.com/seo-inteligencia-artificial).

## Cómo sacarles partido

- **Mira el dashboard SEO una vez al mes**, no cada día. Las tendencias importan más que un día concreto.
- **Cruza las actualizaciones** con tus caídas o subidas con la [cronología oficial de actualizaciones](https://chuletaseo.com/actualizacion-core).
- **Empieza por las oportunidades:** páginas con muchas impresiones y poca posición o CTR.
- **Mide el tráfico de IA desde el principio**, aunque ahora sea pequeño: es la forma de ver la tendencia.
- **Combínalo con otras herramientas.** Aquí tienes un listado de [herramientas SEO](https://chuletaseo.com/herramientas-seo).

<section id="cs_recursos"></section>

## Recursos

- [Dashboards SEO gratuitos (emirodgar.com)](https://emirodgar.com/seo-dashboards/){:target="_blank"}
- [Dashboard SEO gratuito: edición de la newsletter](https://newsletter.chuletaseo.com/p/dashboard-seo-gratuito){:target="_blank"}
- [Dos dashboards SEO para exprimir tu tráfico](https://newsletter.chuletaseo.com/p/dos-dashboards-seo-para-exprimir){:target="_blank"}
- [Conectar Search Console con Looker Studio](https://docs.cloud.google.com/looker/docs/studio/connect-to-search-console){:target="_blank"}
- [Campos personalizados en Looker Studio](https://chuletaseo.com/campos-personalizados-data-studio)
- [Google Analytics 4: guía](https://chuletaseo.com/google-analytics)

<section id="cs_pr"></section>

## Preguntas y respuestas

<div class="row">
          <div class="col-lg-12">
            <div class="accordion accordion-alterate arrow-right" id="popularTopics">
              <div class="card">
                <div class="card-header" id="heading1">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">¿Los dashboards almacenan mis datos?</a> </h5>
                </div>
                <div id="collapse1" class="collapse" aria-labelledby="heading1" data-parent="#popularTopics">
                  <div class="card-body">No. Son informes de Looker Studio que muestran los datos que tú conectas desde tu propia cuenta de Google Analytics 4 o Search Console. El autor indica que el dashboard SEO no almacena ningún dato.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading2">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">¿Necesito pagar algo?</a> </h5>
                </div>
                <div id="collapse2" class="collapse" aria-labelledby="heading2" data-parent="#popularTopics">
                  <div class="card-body">No. Looker Studio, el conector de Search Console y el de Google Analytics son gratuitos, y las plantillas de esta página también.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading3">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">¿Por qué no veo mi sitio en Search Console al conectar?</a> </h5>
                </div>
                <div id="collapse3" class="collapse" aria-labelledby="heading3" data-parent="#popularTopics">
                  <div class="card-body">Comprueba que usas la misma cuenta de Google en Looker Studio y en Search Console, y que tienes al menos permiso de visualización sobre la propiedad.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading4">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">¿Puedo saber qué consulta de IA trajo una visita?</a> </h5>
                </div>
                <div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#popularTopics">
                  <div class="card-body">No. El dashboard de tráfico de IA muestra desde qué plataformas llegan las visitas y a qué páginas, pero no la consulta o conversación que las originó. Lo que sí permite es inferir por las páginas de entrada qué tipo de preguntas pueden estar generándolas.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading5">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">¿Por qué una consulta aparece vacía en Search Console?</a> </h5>
                </div>
                <div id="collapse5" class="collapse" aria-labelledby="heading5" data-parent="#popularTopics">
                  <div class="card-body">Search Console no muestra todas las consultas por privacidad, y algunas se agrupan en una fila sin valor. Puedes excluir esos nulos con un filtro en el campo de consulta.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
