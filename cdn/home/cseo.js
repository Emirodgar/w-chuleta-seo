 
  /*
  fetch('https://chuletaseo.com/cdn/home/datos.json')
  .then(response => response.json())
  .then(data => {
    // Verificar que data sea un objeto iterable antes de usar forEach
    if (Array.isArray(data)) {
      data.forEach(item => {
        generarHTML(item)
      });
    } else {
      console.error('El contenido del archivo JSON no es una matriz.');
    }
  })
  .catch(error => {
    console.error('Error al leer el archivo JSON:', error);
  });*/
  
  
  data = '[{"name" : "Guía detallada sobre cómo funciona la Búsqueda de Google", "url" : "https://developers.google.com/search/docs/fundamentals/how-search-works?hl=es"},{"name" : "Abhinandan", "age" : "20"}]';
  var mydata = JSON.parse(data);
  
  
  var elemento = document.getElementById("c1");
	elemento.innerHTML += generarHTML(mydata);

function generarHTML(data) {
  let html = ``;

  data.forEach((item) => {
    html += `<tr class="border-b dark:bg-gray-900 dark:selection:bg-amber-800 dark:selection:text-white border-gray-200 dark:border-gray-600">
										<td class="flex items-center px-2 py-2">
											<span class="cursor-copy whitespace-pre font-mono text-xs font-normal text-fuchsia-800 dark:text-pink-400">es / Google</span>
										</td>
										<td class="whitespace-pre font-mono text-xs font-normal text-blue-600 dark:text-blue-300"><a href="${data[0].url}">${data[0].name}</a></td>
										<td class="font-mono text-xs font-normal text-gray-500 dark:text-gray-400"></td>
									</tr>`;
  });

  return html;
}