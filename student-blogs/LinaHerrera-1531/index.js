
//pa importar por convencion pongo _ pero lo podria nombrar como quiera, ejem installLodash
import _ from "lodash"

const entries = [
    {
        titulo: "Introducción a HTML5",
        descripcion: "En este artículo se explica qué es HTML5 y cómo funciona. También se detallan las principales novedades y mejoras respecto a HTML4.",
        fecha: "2022-01-15",
        autor: "Juan Pérez",
        tags: ["HTML5", "Web", "Desarrollo"],
    },
    {
        titulo: "Cómo diseñar una web responsive",
        descripcion: "En este artículo se explican las claves para diseñar una web responsive, es decir, que se adapte a diferentes tamaños de pantalla. Se detallan las herramientas y técnicas más útiles.",
        fecha: "2022-02-02",
        autor: "María García",
        tags: ["Responsive Design", "Web", "Diseño"],
    },
    {
        titulo: "Introducción a CSS3",
        descripcion: "En este artículo se explica qué es CSS3 y cómo funciona. También se detallan las principales novedades y mejoras respecto a CSS2.",
        fecha: "2022-02-15",
        autor: "Pedro González",
        tags: ["CSS3", "Web", "Desarrollo"],
    },
    {
        titulo: "Cómo optimizar el rendimiento de una web",
        descripcion: "En este artículo se explican las claves para optimizar el rendimiento de una web, es decir, para que cargue más rápido y sea más eficiente. Se detallan las herramientas y técnicas más útiles.",
        fecha: "2022-03-02",
        autor: "Ana Rodríguez",
        tags: ["Optimización", "Web", "Desarrollo"],
    },
    {
        titulo: "Cómo crear una página web desde cero",
        descripcion:"En este artículo se explican los pasos para crear una página web desde cero, desde la elección del nombre de dominio hasta la publicación en Internet. Se detallan las herramientas y técnicas más útiles.",
        fecha: "2022-03-15",
        autor: "Juan Pérez",
        tags: ["Web", "Desarrollo"],
    },
    {
        titulo: "Cómo usar jQuery en una web",
        descripcion:"En este artículo se explica qué es jQuery y cómo se puede utilizar en una web para añadir interactividad y dinamismo. Se detallan los principales métodos y funciones.",
        fecha: "2022-04-02",
        autor: "María García",
        tags: ["jQuery", "Web", "Desarrollo"],
    },
    {
        titulo: "Cómo crear un diseño atractivo para una web",
        descripcion: "En este artículo se explican las claves para crear un diseño atractivo y efectivo para una web, desde la elección de colores hasta la disposición de los elementos. Se detallan las herramientas y técnicas más útiles.",
        fecha: "2022-04-15",
        autor: "Pedro González",
        tags: ["Diseño", "Web", "Desarrollo"],
    },
];

//Muestro entradas por autor
const entriesGrouppedByAuthor = _.groupBy(entries, "autor")
//console.log(entriesGrouppedByAuthor)
//console.log(entriesGrouppedByAuthor["Ana Rodríguez"])

//Esta funcion recibe entrada por entrada cuando se aplica el .filter de la const
function filterByCss3Tag(entry) {
    //retorno F o V cuando revisa c/entry su tag q sea igual al indicado (CSS3)
    return _.includes(entry.tags, "CSS3")
}

const entriesFilteredByCss3Tag = _.filter(entries, filterByCss3Tag)
// console.log(entriesFilteredByCss3Tag)


//Mapear por titulo: Me devuelve UNICAMENTE los titulos de todas las entradas 
const entriesMappedByTitle = _.map(entries, "titulo")
// console.log(entriesMappedByTitle)

//Organiza 1ero por fecha (desc), y son iguales, continua ordenando por titulo (asc)
const entriesOrderedByDate = _.orderBy(entries, ["fecha", "titulo"], ["desc", "asc"])
// console.log(entriesOrderedByDate)


//para saber el total de tags q tengo en toda la const entries
function countTags(acc, entry) {
    return acc + entry.tags.length
}
 //el cero m indica el valor en q inicia mi acumulador (acc) a contar
const countEntriesTags = _.reduce(entries, countTags, 0)
// console.log(countEntriesTags)


//combino los articulos 1 y 2, si tienen algo igual, queda con la info del ultimo q paso
const mergedEntries = _.merge(entries[0], entries[1])
// console.log(mergedEntries)


//me da de la entrada q le indico , la info especificada (titulo y tag)
const pickedTitleTagsEntry = _.pick(entries[0], ["titulo", "tags"])
// console.log(pickedTitleTagsEntry)


//m muestra todo menod description
const omittedDescriptionEntry = _.omit(entries[1], ["descripcion"])
// console.log(omittedDescriptionEntry)


//m devuelve true or false en este caso fecha
const hasDate = _.has(entries[2], "fecha")
// console.log(hasDate)


//.map saca de las entradas el titulo, q se agrupen por autor, . first saca el 1er valor (aca el titulo)
function mapFirstTitle(entries) {
    return _.first(_.map(entries, "titulo"))
}

//.groupBy me devuelve un objeto agrupepado por autor.  .mapValues toma ese objeto y corre la funcion mapFirstTitle, el . invert cambia la llave a q sea valor y vice
const invertedTitleByEntry = _.invert(_.mapValues(_.groupBy(entries, "autor"), mapFirstTitle))
//console.log(invertedTitleByEntry) 
//devuelve el 1er titulo como llave y el su autor como valor para los 4 autores en entries


//Filtrar las entradas que tenga el tag de Desarrollo

function filterByDesarrolloTag(entry) {
    return _.includes(entry.tags, "Desarrollo")
}

const entriesFilteredByDesarrolloTag = _.filter(entries, filterByDesarrolloTag)
// console.log(entriesFilteredByDesarrolloTag)



//Filtrar las entradas que tenga el tag de Desarrollo , Mapea por titulo y Agrupa por autor.
const mapeoDllo = _.mapValues(_.groupBy(_.filter(entries, filterByDesarrolloTag), "autor"), mapFirstTitle)
console.log(mapeoDllo)