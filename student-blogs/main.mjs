import _ from "lodash"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"

await import ("dayjs/locale/es-us.js")


const entries = [
{
    titulo: "Introducción a HTML5",
    descripcion:
    "En este artículo se explica qué es HTML5 y cómo funciona. También se detallan las principales novedades y mejoras respecto a HTML4.",
    fecha: "2022-01-15",
    autor: "Juan Pérez",
    tags: ["HTML5", "Web", "Desarrollo"],
},
{
    titulo: "Cómo diseñar una web responsive",
    descripcion:
    "En este artículo se explican las claves para diseñar una web responsive, es decir, que se adapte a diferentes tamaños de pantalla. Se detallan las herramientas y técnicas más útiles.",
    fecha: "2022-02-02",
    autor: "María García",
    tags: ["Responsive Design", "Web", "Diseño"],
},
{
    titulo: "Introducción a CSS3",
    descripcion:
    "En este artículo se explica qué es CSS3 y cómo funciona. También se detallan las principales novedades y mejoras respecto a CSS2.",
    fecha: "2022-02-15",
    autor: "Pedro González",
    tags: ["CSS3", "Web", "Desarrollo"],
},
{
    titulo: "Cómo optimizar el rendimiento de una web",
    descripcion:
    "En este artículo se explican las claves para optimizar el rendimiento de una web, es decir, para que cargue más rápido y sea más eficiente. Se detallan las herramientas y técnicas más útiles.",
    fecha: "2022-03-02",
    autor: "Ana Rodríguez",
    tags: ["Optimización", "Web", "Desarrollo"],
},
{
    titulo: "Cómo crear una página web desde cero",
    descripcion:
    "En este artículo se explican los pasos para crear una página web desde cero, desde la elección del nombre de dominio hasta la publicación en Internet. Se detallan las herramientas y técnicas más útiles.",
    fecha: "2022-03-15",
    autor: "Juan Pérez",
    tags: ["Web", "Desarrollo"],
},
{
    titulo: "Cómo usar jQuery en una web",
    descripcion:
    "En este artículo se explica qué es jQuery y cómo se puede utilizar en una web para añadir interactividad y dinamismo. Se detallan los principales métodos y funciones.",
    fecha: "2022-04-02",
    autor: "María García",
    tags: ["jQuery", "Web", "Desarrollo"],
},
{
    titulo: "Cómo crear un diseño atractivo para una web",
    descripcion:
    "En este artículo se explican las claves para crear un diseño atractivo y efectivo para una web, desde la elección de colores hasta la disposición de los elementos. Se detallan las herramientas y técnicas más útiles.",
    fecha: "2022-04-15",
    autor: "Pedro González",
    tags: ["Diseño", "Web", "Desarrollo"],
},
];


// Ejercicio 01 - Semana 04

//Filtro por tag de Desarrollo

function filterByDesarrolloTag(entry) {
    return _.includes(entry.tags, "Desarrollo")
}

const entriesFilteredByDesarrolloTag = _.filter(entries, filterByDesarrolloTag)
console.log(entriesFilteredByDesarrolloTag)


// Mapeo por titulo

const entriesMappedByTitle = _.map(entries, "titulo")
console.log(entriesMappedByTitle)

// Agrupo por Autor

const entriesGrouppedByAuthor = _.groupBy(entries, "autor")
console.log(entriesGrouppedByAuthor)

// Ejercicio 02 - Semana 04

dayjs.locale("es-us")
dayjs.extend(relativeTime)


function humanizarFecha(date){
    const wrappedDate = dayjs(date)
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"))

    const añoActual = wrappedDate.year() === new Date().getFullYear();

    if(!añoActual){
        return wrappedDate.format("MMMM DD, YYYY")
    } else if (daysDiff <= 30){
        return wrappedDate.fromNow()
    } else {
        return wrappedDate.format("MMMM DD")
    }
}

console.log(humanizarFecha(new Date(Date.now())));
console.log(humanizarFecha(dayjs().subtract(5, "days")))
console.log(humanizarFecha(dayjs().subtract(35, "days")))
console.log(humanizarFecha(dayjs().subtract(300, "days")))
console.log(humanizarFecha(dayjs().add(5000, "days")))

