
fetch('datos.json')
  .then(response => response.json())
  .then(data => {
    //console.log(data);
	generarHTML(data)
  })
  .catch(error => {
    console.error('Error al leer el archivo JSON:', error);
  });

function generarHTML(data) {
  let html = `	<div class="w-full">
		<div class="h-full w-full space-y-3 rounded bg-zinc-50 p-4 pt-1 shadow-sm dark:bg-gray-700">
			<header class="border-b border-gray-200 p-2 dark:border-slate-600"><h2 class="text-lg font-semibold text-gray-800 dark:text-zinc-50">Empezar en SEO</h2></header>
				<ul class="list-reset">`;

  // Generar elementos de lista basados en los datos del JSON
  data.forEach((item) => {
    html += `<li>${item}</li>`;
  });

  html += `
        </ul>
      </body>
    </html>`;

  return html;
}