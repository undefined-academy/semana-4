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


//_.groupBy agrupa como si fueran objetos y te busca por autor las publicaciones de los autores
const entriesByAutor = _.groupBy(entries, "autor")
//console.log(entriesByAutor["Ana Rodríguez"])


// filtra y busca en especifico un filtro en este caso estamos buscando el tag que ocupe CSS3
function filterByCss3Tag(entry){
  return _.includes(entry.tags, "CSS3")
}

const entriesFilterByCss3Tag = _.filter(entries, filterByCss3Tag)
//console.log(entriesFilterByCss3Tag)

//_.map te permite mapear los elementos de un array y te permite buscar por titulo
const entriesMappedByTitle = _.map(entries,"titulo")
//console.log(entriesMappedByTitle)

//_.orderBy te permite ordenar los elementos de un array y te permite buscar por fecha
const entriesOrderByDate = _.orderBy(entries, ["fecha", "titulo"], ["asc", "desc"])
//console.log(entriesOrderByDate)

//_.reduce te permite reducir los elementos de un array y te permite buscar por tags
function countTags(acc, entry){
  return acc + entry.tags.length
}

const countEntriesTags = _.reduce(entries, countTags, 0)
//console.log(countEntriesTags)

//combinar dos objtetos
const mergedEntries = _.merge(entries[0], entries[1])
//console.log(mergedEntries)

//_.pick te permite seleccionar los elementos de un array y te permite buscar por titulo y tags
const pickedTitleTagsEntry = _.pick(entries[0], ["titulo", "tags"])
//console.log(pickedTitleTagsEntry)

//_.omit te permite omitir los elementos de un array y te permite buscar por descripcion
const omittedDescriptionEntry = _.omit(entries[1], ["descripcion"])
// console.log(omittedDescriptionEntry)

//_.has te permite buscar si un elemento existe en un array y te permite buscar por fecha
const hasDate = _.has(entries[2], "fecha")
// console.log(hasDate)

//_.invert te permite invertir los elementos de un array y te permite buscar por autor
function mapFirstTitle (entries) {
  return _.first(_.map(entries, "titulo"))
}
const invertedTitleByEntry = _.invert(_.mapValues(_.groupBy(entries, "autor"), mapFirstTitle))
//console.log(invertedTitleByEntry)

//tarea
const filteredByDevelopmentTag = _.filter(entries, function(entry){
  return _.includes(entry.tags, "Desarrollo")
})
//console.log(filteredByDevelopmentTag)

const grouppedByAuthor = _.groupBy(filteredByDevelopmentTag, "autor")
//console.log(grouppedByAuthor)

const titleByAuthor = _.mapValues(grouppedByAuthor, function(entries){
  return _.map(entries, "titulo")
})

//console.log(titleByAuthor)

