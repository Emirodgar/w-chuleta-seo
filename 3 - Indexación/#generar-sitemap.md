

Si necesitamos generar un sitemap XML con el listado de las páginas del sitio web, podemos hacer uso de múltiples herramientas gratuitas. Si preferimos hacerlo a mano, Lino ha compartido un sencillo código que podemos ejecutar directamente desde la consola de nuestro navegador. Para ello sólo necesitaremos sustituir las URL de nuestras páginas en el array de ```["url1", "url2", "url3"]``` y posteriormente ejecutar el siguiente código.

```
let text = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n <url>\n';
const urls = ["url1", "url2", "url3"];
urls.forEach(myFunction);
text += " </url>\n</urlset>";
console.log(text);
 
function myFunction(item, index) {
  text += "  <loc>" + item + "</loc>\n"; 
}

```


Importancia de usar el atributo lastmod en los sitemaps https://blogs.bing.com/webmaster/february-2023/The-Importance-of-Setting-the-lastmod-Tag-in-Your-Sitemap/