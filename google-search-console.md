---
title: Google Search Console - Guía práctica para SEO (rendimiento, indexación e inspección)
description: "Cómo usar Google Search Console: tipos de propiedad, informe de rendimiento y sus límites, indexación de páginas, inspección de URL, sitemaps y exportación a BigQuery. Con rutina de revisión."
date: 19/11/2026
folder: informes
author: Emirodgar
layout: default_1
permalink: google-search-console

---

**Google Search Console** es la fuente de datos más fiable que tienes sobre cómo te ve Google: qué búsquedas te muestran, cuántos clics recibes y qué páginas están indexadas. Es gratuita. Esta guía explica sus informes principales **y sus límites**, que son lo que más confunde.
{:.lead}

<p><a class="btn js-nl-cta" data-cta="search-console" href="https://newsletter.chuletaseo.com/?utm_source=chuletaseo.com&amp;utm_medium=guia&amp;utm_campaign=search-console">Recibir la newsletter</a></p>

1. Índice
{:toc}

## Propiedades y permisos

Al añadir tu web eliges un tipo de propiedad. Según la [ayuda de Google sobre verificación](https://support.google.com/webmasters/answer/9008080?hl=en){:target="_blank"}:

- **Propiedad de dominio:** cubre todas las variantes de protocolo (http/https) y subdominios. Solo se verifica con un registro **DNS**.
- **Propiedad de prefijo de URL:** cubre una URL concreta con su protocolo. Se puede verificar con archivo HTML, etiqueta HTML, Google Analytics o Google Tag Manager.

Recomendación: crea la de **dominio** como principal, para no perder subdominios ni versiones http. No elimines el registro DNS después de verificar, o perderás la verificación.

El **propietario verificado** tiene el máximo nivel de permisos. Si das acceso a una agencia o a un freelance, empieza por el nivel más bajo que le permita trabajar. Si todos los propietarios pierden el acceso, todos los usuarios pierden el acceso a la propiedad.

## Informe de rendimiento

Es el informe que más se usa. Según la [ayuda de Google](https://support.google.com/webmasters/answer/7576553?hl=en){:target="_blank"}:

- **Clics:** veces que un usuario llegó a tu sitio desde los resultados de Google.
- **Impresiones:** veces que tu sitio apareció en los resultados.
- **CTR:** clics divididos entre impresiones.
- **Posición media:** la posición media del resultado más alto de tu sitio. Es una media: un número alto puede esconder una consulta en el primer puesto y otra en el 50.

**Dimensiones:** consultas, páginas, países, dispositivos, apariencia en el buscador y fechas. **Tipos de búsqueda:** web, web multimodal, imagen, vídeo y noticias.

Sobre las funciones de IA, Google indica que [AI Overviews y AI Mode se incluyen en el tráfico de Search Console](https://developers.google.com/search/docs/appearance/ai-features){:target="_blank"}, dentro del tipo Web, sin separarlas.

### Los límites que debes conocer

La página [Acerca de los datos](https://support.google.com/webmasters/answer/96568?hl=en){:target="_blank"} recoge lo que más confunde:

- **No es todo.** Search Console guarda las filas principales, no todas, y deja fuera las consultas poco frecuentes por privacidad.
- **1.000 filas** como máximo en las tablas. La API puede devolver una selección mayor.
- **Retraso.** Los datos suelen estar disponibles en 2 o 3 días. Una web nueva puede tardar hasta una semana en mostrar datos.
- **Hora de California.** Las cifras diarias siguen esa zona horaria, así que pueden no coincidir con otras herramientas.
- **Los totales pueden diferir.** El gráfico agrega por propiedad y las tablas por página o por consulta, por eso los totales del gráfico y de la tabla no siempre coinciden.
- **Historial limitado.** Se suele citar que el informe conserva unos 16 meses. Esa cifra no aparece en las páginas de Google que he consultado: compruébala antes de planificar con ella. Si quieres conservar más historia, activa la exportación a BigQuery.

### Cómo sacarle partido

1. **Compara periodos iguales**, por ejemplo los últimos 28 días con los 28 anteriores, o el mismo mes de otro año.
2. **Busca páginas con muchas impresiones y CTR bajo**: son las más baratas de mejorar con un título y una descripción mejores.
3. **Filtra por consulta con expresión regular** para separar marca y no marca. Google tiene también un filtro propio de consultas de marca y no marca, con una ventana de 16 meses que empezó en marzo de 2025.
4. **Revisa tendencias, no días sueltos.** Los datos más recientes pueden ser preliminares y cambiar en unas horas.
5. **Cruza con las actualizaciones de Google.** Consulta la [cronología oficial](https://chuletaseo.com/actualizacion-core).

## Indexación de páginas

El informe de [indexación de páginas](https://support.google.com/webmasters/answer/7440203?hl=en){:target="_blank"} muestra qué URLs están indexadas y por qué no lo están otras. Google insiste en algo: **que una página no esté indexada no es necesariamente malo.** Estos son los motivos más frecuentes:

| Estado | Qué significa | Qué hacer |
|---|---|---|
| Rastreada: actualmente sin indexar | Google la rastreó y decidió no indexarla. | Si es importante, mejora el contenido, el enlazado interno y la calidad. |
| Descubierta: actualmente sin indexar | Google conoce la URL pero aún no la ha rastreado. | Enlázala desde páginas importantes y revisa la capacidad del servidor. |
| Duplicada sin canonical elegida por el usuario | Google eligió otra página como canonical. | Inspecciona la URL y declara la canonical que quieras. |
| Duplicada: Google eligió una canonical distinta | Declaraste una canonical y Google prefiere otra. | Compara ambas en la inspección de URL. |
| Página alternativa con canonical adecuada | Variante móvil, AMP o de idioma que apunta bien. | Normalmente nada. |
| Excluida por noindex | Una directiva noindex impide indexarla. | Quítala si quieres que se indexe. |
| Bloqueada por robots.txt | Google no puede rastrearla. | Desbloquéala si quieres que se rastree. Bloquear no garantiza que no se indexe. |
| Error 404, 5xx, soft 404, redirección | Problemas de respuesta del servidor. | Corrígelos si la página debe existir. |

**Validar una corrección:** pulsa "Validar corrección" solo cuando hayas arreglado todas las instancias. Google indica que la validación suele tardar unas dos semanas.

Para ampliar: [guía de indexación](https://chuletaseo.com/indexacion), [eliminar una página de Google](https://chuletaseo.com/eliminar-pagina-indexada-google) y [sitemap XML](https://chuletaseo.com/sitemap-xml).

## Inspección de URL

La [herramienta de inspección de URL](https://support.google.com/webmasters/answer/9012289?hl=en){:target="_blank"} te dice cómo ve Google una página concreta:

- **Versión indexada:** muestra la última versión que Google indexó, no una prueba en directo. Incluye la canonical elegida por Google, que puede no coincidir con la tuya, y si el rastreo está permitido.
- **Probar la URL publicada:** hace una petición en tiempo real y sirve para comprobar si una corrección funciona. Una prueba correcta **no garantiza la indexación**. Solo confirma que el rastreador puede acceder a la página.
- **Solicitar indexación:** no garantiza que la página entre en el índice y tiene un límite diario. Para muchas páginas, Google recomienda enviar un sitemap.
- **Lo que no comprueba:** acciones manuales, problemas de seguridad ni el cumplimiento de las directrices de calidad.

## Sitemaps

Envía tu sitemap en el apartado Sitemaps. Sirve para que Google descubra las URLs. Mira la [guía de sitemap XML](https://chuletaseo.com/sitemap-xml) para su formato y errores.

## Exportación a BigQuery

Si quieres conservar los datos de rendimiento y analizarlos sin los límites de la interfaz, Search Console puede [exportarlos a BigQuery cada día](https://support.google.com/webmasters/answer/12917675?hl=en){:target="_blank"}. Lo importante:

- Necesitas un proyecto de Google Cloud con facturación y BigQuery activados.
- Exporta todos los datos de rendimiento, **excepto las consultas anonimizadas**.
- **No es retroactiva.** Los datos anteriores al inicio solo se pueden obtener de la API o de los informes.
- La primera exportación llega hasta 48 horas después de configurarla.
- El dataset debe empezar por `searchconsole`, y la ubicación no se cambia fácilmente después.
- Los datos se acumulan indefinidamente salvo que fijes una caducidad.

Actívala cuanto antes: cada día sin exportar es un día de histórico que no recuperas. Para visualizarlos, mira los [dashboards gratuitos de Looker Studio](https://chuletaseo.com/dashboards-seo-gratuitos).

## Rutina de revisión

**Cada semana (10 minutos)**
- Rendimiento: clics e impresiones de los últimos 28 días frente al periodo anterior.
- Indexación de páginas: nuevos errores o picos de URLs excluidas.

**Cada mes**
- Páginas con muchas impresiones y CTR bajo: lista de títulos y descripciones para reescribir.
- Consultas que aparecen en posiciones 8 a 20: candidatas a mejorar el contenido.
- Comparación con las actualizaciones de Google del periodo.

**Tras un cambio importante** (migración, rediseño, nuevo CMS)
- Inspecciona las URLs clave, revisa el informe de indexación y compara el rendimiento. Aquí tienes la [guía de migración SEO](https://chuletaseo.com/migracion-seo).

## Errores frecuentes

- **Esperar que cuadre con GA4.** Mide cosas distintas.
- **Mirar un solo día.** Los últimos días son preliminares.
- **Tratar toda URL no indexada como un error.** Primero lee el motivo.
- **Solicitar indexación en masa.** Tiene límite y no garantiza nada.
- **Dar permisos de propietario a todo el mundo.**

<section id="cs_recursos"></section>

## Recursos

- [Informe de rendimiento (ayuda de Google)](https://support.google.com/webmasters/answer/7576553?hl=en){:target="_blank"}
- [Acerca de los datos de Search Console](https://support.google.com/webmasters/answer/96568?hl=en){:target="_blank"}
- [Informe de indexación de páginas](https://support.google.com/webmasters/answer/7440203?hl=en){:target="_blank"}
- [Herramienta de inspección de URL](https://support.google.com/webmasters/answer/9012289?hl=en){:target="_blank"}
- [Exportación masiva a BigQuery](https://support.google.com/webmasters/answer/12917675?hl=en){:target="_blank"}
- [Verificar la propiedad de un sitio](https://support.google.com/webmasters/answer/9008080?hl=en){:target="_blank"}
- [Google Analytics 4: guía](https://chuletaseo.com/google-analytics)
- [Dashboards SEO gratuitos](https://chuletaseo.com/dashboards-seo-gratuitos)
- [Herramientas SEO](https://chuletaseo.com/herramientas-seo)

<section id="cs_pr"></section>

## Preguntas y respuestas

<div class="row">
          <div class="col-lg-12">
            <div class="accordion accordion-alterate arrow-right" id="popularTopics">
              <div class="card">
                <div class="card-header" id="heading1">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">¿Por qué los clics de Search Console no coinciden con las sesiones de GA4?</a> </h5>
                </div>
                <div id="collapse1" class="collapse" aria-labelledby="heading1" data-parent="#popularTopics">
                  <div class="card-body">Google lo explica: Search Console cubre un subconjunto de URLs, elimina duplicados y visitas de robots, Analytics solo mide a quien tiene JavaScript activado y Search Console puede no haber vuelto a rastrear los cambios recientes. Además, los datos diarios de rendimiento siguen la hora de California.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading2">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">¿Por qué no veo todas mis consultas?</a> </h5>
                </div>
                <div id="collapse2" class="collapse" aria-labelledby="heading2" data-parent="#popularTopics">
                  <div class="card-body">Search Console guarda las filas principales, no todas, y deja fuera las consultas poco frecuentes para proteger la privacidad. Además la tabla muestra como máximo 1.000 filas. La API puede devolver una selección mayor.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading3">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">¿"No indexada" significa que tengo un problema?</a> </h5>
                </div>
                <div id="collapse3" class="collapse" aria-labelledby="heading3" data-parent="#popularTopics">
                  <div class="card-body">No necesariamente. Google indica que no indexa todas las páginas de la web. Revisa el motivo de cada URL: una página con redirección o una alternativa con canonical correcta no requiere acción. Actúa si es una página importante.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading4">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">¿Solicitar indexación acelera que Google indexe una página?</a> </h5>
                </div>
                <div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#popularTopics">
                  <div class="card-body">Google avisa de que enviar la solicitud no garantiza que la página entre en el índice. Para muchas páginas nuevas o actualizadas recomienda enviar un sitemap. Además hay un límite diario de solicitudes.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading5">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">¿Puedo recuperar los datos de antes de activar la exportación a BigQuery?</a> </h5>
                </div>
                <div id="collapse5" class="collapse" aria-labelledby="heading5" data-parent="#popularTopics">
                  <div class="card-body">No. La exportación no rellena datos históricos: para lo anterior debes usar la API de Search Console o los informes. Por eso conviene activarla cuanto antes.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
