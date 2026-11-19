---
title: dataLayer de Google Tag Manager y GA4 - Qué es, cómo usarlo y errores comunes
description: "Qué es el dataLayer, cómo enviar eventos con dataLayer.push, leerlos con variables de Tag Manager, mandarlos a GA4, depurarlos y los errores que impiden que se disparen las etiquetas."
date: 19/11/2026
folder: informes
author: Emirodgar
layout: default_1
permalink: datalayer-gtm-ga4

---

El **dataLayer** es la capa de datos con la que tu web le cuenta a Google Tag Manager qué está pasando: un clic, una compra, el tipo de página. Si lo entiendes, puedes medir en GA4 cualquier interacción sin depender de que el desarrollo toque cada etiqueta. Esta guía explica cómo funciona, cómo enviar eventos y los errores que más hacen fallar la medición.
{:.lead}

<p><a class="btn js-nl-cta" data-cta="datalayer" href="https://newsletter.chuletaseo.com/?utm_source=chuletaseo.com&amp;utm_medium=guia&amp;utm_campaign=datalayer">Recibir la newsletter</a></p>

1. Índice
{:toc}

## Qué es el dataLayer

Según la [documentación de Google](https://developers.google.com/tag-platform/tag-manager/datalayer){:target="_blank"}, el dataLayer es un objeto de JavaScript que Google Tag Manager y gtag.js usan para pasar información a las etiquetas. Tiene estructura JSON y los activadores pueden basarse en sus valores: por ejemplo, disparar una etiqueta cuando llega un evento concreto.

La idea práctica: **tu web empuja datos al dataLayer y Tag Manager los lee**. Así, el código de la web solo informa de lo que ocurre, y Tag Manager decide qué etiquetas se disparan.

## Declararlo

Crea el array antes del código del contenedor de Tag Manager, para que los valores estén disponibles cuando este se cargue:

```javascript
window.dataLayer = window.dataLayer || [];
```

Los datos que deban estar disponibles al cargar la página se empujan por encima del fragmento de Tag Manager. Google recomienda instanciarlo lo más arriba posible en el código fuente.

## Enviar variables y eventos con push

Añades o actualizas valores con `dataLayer.push()`:

```javascript
dataLayer.push({
  'tipo_pagina': 'guia',
  'event': 'guia_vista'
});
```

- La clave **`event`** le indica a Tag Manager que ha ocurrido un evento. Su valor es el nombre con el que lo identifican los activadores de tipo "Evento personalizado".
- Las variables que envías **duran solo mientras el visitante sigue en la página actual**. Para usarlas en otra página, vuelve a enviarlas en cada una.

Ejemplo de un clic en un botón:

```html
<button onclick="dataLayer.push({'event': 'clic_boton_newsletter'});">Recibir la newsletter</button>
```

### El orden importa

Tag Manager procesa los mensajes en cola, el primero que entra es el primero que sale. Si metes datos y después un evento por separado, los valores pueden no estar listos. La solución de Google: **envía el nombre del evento junto con los datos** en el mismo push y escucha ese evento con un activador de evento personalizado.

## Leer los datos en Tag Manager

Las etiquetas leen el dataLayer con **variables de capa de datos**. En Tag Manager, según la [ayuda de Google](https://support.google.com/tagmanager/answer/7683362?hl=en){:target="_blank"}:

1. Ve a *Variables* y pulsa *Nueva* en Variables definidas por el usuario.
2. Elige el tipo *Variable de capa de datos* e indica el nombre de la clave.
3. Ponle un nombre claro, por ejemplo "DLV - tipo_pagina", y guarda.

**Versión 1 y versión 2:** en la versión 1 un punto en el nombre de una clave se lee como parte de la clave. En la versión 2 se lee como anidación, de modo que `a.b.c` se interpreta como `{a: {b: {c: ...}}}`. Para leer datos anidados, como los de ecommerce, usa la versión 2.

## Mandar el evento a GA4

El patrón habitual:

1. **Activador:** de tipo *Evento personalizado*, con el mismo nombre que pusiste en `event` (por ejemplo `clic_boton_newsletter`).
2. **Etiqueta:** de tipo *Evento de Google Analytics: GA4*, con el nombre de evento que quieras ver en GA4 y los parámetros que necesites, tomados de tus variables de capa de datos.
3. **Dimensión personalizada en GA4:** si quieres ver un parámetro en los informes, créalo como [dimensión personalizada con ámbito de evento](https://support.google.com/analytics/answer/14240153?hl=en){:target="_blank"}. Google indica que puede tardar de 24 a 48 horas en estar disponible. Las propiedades estándar admiten 50 de este tipo.

Evita nombres de evento y parámetros que cambien según la página. Elige una convención y úsala siempre: Google avisa de que usar `visitor_type` en una página y `visitorType` en otra impide que las etiquetas se disparen de forma coherente.

## Ecommerce

Los eventos de ecommerce de GA4 llevan un array `items`. Según la [guía de Google para GA4](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce){:target="_blank"}:

- Cada producto necesita `item_id` o `item_name`, y se recomienda enviar ambos.
- El array admite hasta 200 elementos.
- Si envías `value`, indica `currency` en el evento.
- En `purchase`, `transaction_id` es obligatorio.

Ejemplo de la estructura de una compra enviada al dataLayer:

```javascript
dataLayer.push({ ecommerce: null });  // limpia el objeto anterior
dataLayer.push({
  event: 'purchase',
  ecommerce: {
    transaction_id: 'T-1001',
    value: 49.90,
    currency: 'EUR',
    items: [{ item_id: 'SKU-1', item_name: 'Producto', price: 49.90, quantity: 1 }]
  }
});
```

El `dataLayer.push({ ecommerce: null })` previo es una práctica muy extendida: Tag Manager fusiona los datos y puede arrastrar claves del evento anterior. No he podido comprobar esa recomendación en la documentación de Google que consulté, así que contrástala con la guía de ecommerce de Tag Manager antes de implementarla.

## Depurar

En Tag Manager, pulsa *Vista previa* en el espacio de trabajo. Se abre [Tag Assistant](https://support.google.com/tagmanager/answer/6107056?hl=en){:target="_blank"}: escribe la URL de tu web y conecta. Mientras navegas puedes ver qué etiquetas se han disparado, en qué orden y qué activador las provocó. Si una no se dispara, mira si el evento llegó y con qué nombre exacto.

Para comprobar que el dato llega a GA4, usa DebugView. Google indica que los informes estándar, las exploraciones y la API tardan alrededor de 24 horas en mostrar los datos.

## Errores frecuentes

La documentación de Google recoge estos:

- **Sobrescribir el array.** `dataLayer = [{...}]` reemplaza los valores existentes. Declara una vez con `window.dataLayer = window.dataLayer || [];` y usa `push`. Reasignarlo después de cargar Tag Manager puede impedir que las etiquetas se disparen.
- **Escribir `datalayer`.** El nombre distingue mayúsculas: debe ser `dataLayer`.
- **Claves sin comillas.** `{new-variable: 'valor'}` no es válido. Usa `{'new-variable': 'valor'}`.
- **Nombres inconsistentes** entre páginas.
- **Varios dataLayer.** Solo se admite un array por página.
- **Esperar que el valor persista** en la página siguiente.

## Checklist

- [ ] El dataLayer se declara antes del código de Tag Manager.
- [ ] Cada evento lleva `event` y sus datos en el mismo push.
- [ ] Convención de nombres escrita y compartida con el equipo.
- [ ] Variables de capa de datos creadas en Tag Manager (versión 2 si hay anidación).
- [ ] Evento personalizado y etiqueta GA4 configurados.
- [ ] Parámetros registrados como dimensiones personalizadas.
- [ ] Probado con la vista previa y DebugView antes de publicar.

<section id="cs_recursos"></section>

## Recursos

- [El dataLayer (documentación de Google)](https://developers.google.com/tag-platform/tag-manager/datalayer){:target="_blank"}
- [Variable de capa de datos en Tag Manager](https://support.google.com/tagmanager/answer/7683362?hl=en){:target="_blank"}
- [Vista previa y depuración de contenedores](https://support.google.com/tagmanager/answer/6107056?hl=en){:target="_blank"}
- [Dimensiones y métricas personalizadas de GA4](https://support.google.com/analytics/answer/14240153?hl=en){:target="_blank"}
- [Eventos de ecommerce de GA4](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce){:target="_blank"}
- [Google Analytics 4: guía](https://chuletaseo.com/google-analytics)
- [Medir el tráfico de IA en GA4](https://chuletaseo.com/medir-trafico-ia-ga4)
- [Herramientas SEO](https://chuletaseo.com/herramientas-seo)

<section id="cs_pr"></section>

## Preguntas y respuestas

<div class="row">
          <div class="col-lg-12">
            <div class="accordion accordion-alterate arrow-right" id="popularTopics">
              <div class="card">
                <div class="card-header" id="heading1">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">¿Qué es el dataLayer en una frase?</a> </h5>
                </div>
                <div id="collapse1" class="collapse" aria-labelledby="heading1" data-parent="#popularTopics">
                  <div class="card-body">Un objeto de JavaScript, estructurado como JSON, que Google Tag Manager y gtag.js usan para pasar información a las etiquetas. Los activadores pueden basarse en sus valores.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading2">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">¿Por qué mi etiqueta no se dispara aunque el push está en la página?</a> </h5>
                </div>
                <div id="collapse2" class="collapse" aria-labelledby="heading2" data-parent="#popularTopics">
                  <div class="card-body">Las causas más comunes que recoge Google: escribir datalayer en minúsculas (debe ser dataLayer), sobrescribir el array con dataLayer = [...] en lugar de usar push, claves sin comillas o con nombres distintos entre páginas, o que el valor no esté listo cuando se dispara la etiqueta. Revisa la pestaña de datos en el modo de vista previa.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading3">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">¿Los valores del dataLayer se mantienen al cambiar de página?</a> </h5>
                </div>
                <div id="collapse3" class="collapse" aria-labelledby="heading3" data-parent="#popularTopics">
                  <div class="card-body">No. Según Google, las variables solo duran mientras el visitante permanece en la página actual. Si quieres usarlas en otra, tienes que volver a enviarlas en cada página.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading4">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">¿Tengo que registrar los parámetros en GA4?</a> </h5>
                </div>
                <div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#popularTopics">
                  <div class="card-body">Sí, si quieres verlos en informes. Los parámetros de evento se analizan creando una dimensión personalizada con ámbito de evento. Google indica que puede tardar de 24 a 48 horas en estar disponible, y que las propiedades estándar admiten 50 dimensiones de ese tipo.</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="heading5">
                  <h5 class="mb-0"> <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">¿Puedo usar gtag.js en lugar de Tag Manager?</a> </h5>
                </div>
                <div id="collapse5" class="collapse" aria-labelledby="heading5" data-parent="#popularTopics">
                  <div class="card-body">Sí. gtag.js también usa el dataLayer. Con Tag Manager separas el código de la web de la configuración de etiquetas, que puede cambiar quien gestiona la medición sin tocar el código.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
