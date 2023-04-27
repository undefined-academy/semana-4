// Agregar funcion para humanizar las fechas


import _ from "lodash"
import dayjs from "dayjs"
import duration from "dayjs/plugin/duration.js"
import relativeTime from "dayjs/plugin/relativeTime.js"
dayjs.extend(duration)
dayjs.extend(relativeTime)



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

const entriesGrouppedByAuthor = _.groupBy(entries, "autor") 
// console.log(entriesGrouppedByAuthor)

function filterByCss3Tag(entry) {
  return _.includes(entry.tags, "CSS3")
}

const entriesFilteredByCss3Tag = _.filter(entries, filterByCss3Tag)
// console.log(entriesFilteredByCss3Tag)

const entriesMappedByTitle = _.map(entries, "titulo")
// console.log(entriesMappedByTitle)

const entriesOrderedByDate = _.orderBy(entries, ["fecha", "titulo"], ["desc", "asc"])
// console.log(entriesOrderedByDate)

function countTags(acc, entry) {
  return acc + entry.tags.length
}

const countEntriesTags = _.reduce(entries, countTags, 0)
// console.log(countEntriesTags)

const mergedEntries = _.merge(entries[0], entries[1])
// console.log(mergedEntries)

const pickedTitleTagsEntry = _.pick(entries[0], ["titulo", "tags"])
// console.log(pickedTitleTagsEntry)

const omittedDescriptionEntry = _.omit(entries[1], ["descripcion"])
// console.log(omittedDescriptionEntry)

const hasDate = _.has(entries[2], "fecha")
// console.log(hasDate)

function mapFirstTitle (entries) {
  return _.first(_.map(entries, "titulo"))
}

const invertedTitleByEntry = _.invert(_.mapValues(_.groupBy(entries, "autor"), mapFirstTitle))
//console.log(invertedTitleByEntry)


/***************************************************** 
    Practica 4 Clase 1
********************************************************/

function filterByDesarrolloTag (entry) {
    return _.includes(entry.tags, "Desarrollo")

}
function mapTitle (entries) {
    return _.map(entries, "titulo")
  }

const exerciseDesarrollo = _.filter(entries, filterByDesarrolloTag)
//console.log(exerciseDesarrollo)

const exerciseFirstMap = _.mapValues(_.groupBy(exerciseDesarrollo, "autor"), mapFirstTitle)
//console.log(exerciseFirstMap)


const exerciseMap = _.mapValues(_.groupBy(exerciseDesarrollo, "autor"), mapTitle)
console.log(exerciseMap)
const propAutor = Object.keys(exerciseMap);

propAutor.forEach(prop => {
  // Autor
  const $spanAutor = document.createElement("span");
  $spanAutor.innerHTML = `Autor: ${prop}`
  $spanAutor.classList.add('autor')
  document.getElementById("MyDIV").appendChild($spanAutor);

  // Titulo
  const title = exerciseMap[prop];
  console.log(title)
  title.forEach(title => {
    
    const $spanTitle = document.createElement("span");
    $spanTitle.innerHTML = `Titulo: ${title}`;
    $spanTitle.classList.add('titlespan');
    document.getElementById("MyDIV").appendChild($spanTitle);
  })

})




/***************************************************** 
    Practica 4 Clase 2 con Vanilla JS
********************************************************/

function humanizeVanilla(e) {
  const dateToWork = new Date(e.target.value);
  const dateNow = new Date();
  const ONE_MONTH_IN_SECONDS = 30*24*60*60;
  const ONE_DAYS_IN_SECONDS = 24*60*60;
  const ONE_HOURS_IN_SECONDS = 60*60;
  const ONE_MINUTE_IN_SECONDS = 60;
  const result = document.querySelector(".result");
  

  //const dateNowInSeconds = dateNow.getSeconds() + dateNow.getMinutes()*60 + dateNow.getHours()*60*60 + dateNow.getDate()*24*3600 + dateNow.getMonth()*30*24*3600;
  //console.log(`Estos son los segundos de la fecha actual ${dateNowInSeconds}`)

  console.log(Date.parse(dateToWork));
  console.log(Date.parse(dateNow));
  
  const dateToWorkInSeconds = Date.parse(dateToWork)/1000;
  const dateNowInSeconds = Date.parse(dateNow)/1000;
  const difTime = dateNowInSeconds - dateToWorkInSeconds;

  const annio = dateToWork.getFullYear();
  const mes = dateToWork.getMonth()+1;
  const day = dateToWork.getDay();
  const hours = dateNow.getHours();
  const min = dateNow.getMinutes();
  
  const oneMonthAgoInSeconds = dateNowInSeconds - ONE_MONTH_IN_SECONDS
  console.log(new Date(oneMonthAgoInSeconds*1000));
  console.log(new Date(dateToWorkInSeconds*1000));
  console.log(dateToWorkInSeconds ,oneMonthAgoInSeconds,difTime);

  if (difTime > 1) {
    // Si no es del mismo año = Fecha Completa  RESUELTO
    if (dateNow.getFullYear() !== annio ) {
      const nameMonth = dateToWork.toLocaleString('default', {month:'long'})[0].toUpperCase()+dateToWork.toLocaleString('default', {month:'long'}).slice(1)
      result.innerHTML = `${nameMonth} ${day}, ${annio}`
    }

    // Si es menos de 30 días
    if (dateToWorkInSeconds > oneMonthAgoInSeconds) {
      // Poner de forma humanizada
      
      

      //Semanas
      if ((difTime < ONE_MONTH_IN_SECONDS) & (difTime > ONE_DAYS_IN_SECONDS*7)) {
        const numberOfWeek = Math.floor(difTime/(7*ONE_DAYS_IN_SECONDS))
        result.innerHTML = `Hace ${numberOfWeek} ${numberOfWeek>1 ? 'Semanas' : 'Semana'}`
      }
      //Dias
      if ((difTime < ONE_DAYS_IN_SECONDS*7) & (difTime > ONE_DAYS_IN_SECONDS)) {
        const numberOfDays = Math.floor(difTime/(24*ONE_HOURS_IN_SECONDS))

        result.innerHTML = `Hace ${numberOfDays} ${numberOfDays>1 ? "Dias" : 'Dia'}`
      }
      // Horas
      if ((difTime < ONE_DAYS_IN_SECONDS) & (difTime > ONE_HOURS_IN_SECONDS)){
        const numberOfHours = Math.floor(difTime/(60*ONE_MINUTE_IN_SECONDS))
        result.innerHTML = `Hace ${numberOfHours} ${numberOfHours>1 ? "Horas" : 'Hora'}`

      }
      // Minutos
      if (difTime < ONE_MINUTE_IN_SECONDS) {
        const numberOfSeconds = Math.floor(difTime/(ONE_MINUTE_IN_SECONDS))
        result.innerHTML = `Hace ${numberOfSeconds} ${numberOfSeconds>1 ? "Segundos" : 'Segundo'}`
        
      }
      // Segundos
      if (difTime < ONE_HOURS_IN_SECONDS) {
        const numberOfMinutes = Math.floor(difTime/(ONE_MINUTE_IN_SECONDS))
        result.innerHTML = `Hace ${numberOfMinutes} ${numberOfMinutes>1 ? "Minutos" : 'Minuto'}`
        
      }

          
    } else if (dateToWorkInSeconds < oneMonthAgoInSeconds) {
      const nameMonth = dateToWork.toLocaleString('default', {month:'long'})[0].toUpperCase()+dateToWork.toLocaleString('default', {month:'long'}).slice(1)
      result.innerHTML = `${nameMonth} ${day}`
    }
  } else {
    result.innerHTML = `La fecha no puede ser Mayor a la actual`
  }

}
const dateInit = document.querySelector(".date")
//console.log(dateInit)
dateInit.addEventListener("change", humanizeVanilla)


/***************************************************** 
    Practica 4 Clase 2 con libreria dayjs
********************************************************/

//const today = dayjs();
//console.log(today.format())

const dateInitDayjs = document.querySelector(".date_dayjs");
console.log(dateInitDayjs);
dateInitDayjs.addEventListener("change", humanizedayjs);

function humanizedayjs(e) {
  
  const dateToWork = dayjs(e.target.value);
  const dateNow = dayjs();
  const ONE_MONTH_IN_SECONDS = 30*24*60*60;
  const ONE_DAYS_IN_SECONDS = 24*60*60;
  const ONE_HOURS_IN_SECONDS = 60*60;
  const ONE_MINUTE_IN_SECONDS = 60;
  const result = document.querySelector(".result-dayjs");
  

  //const dateNowInSeconds = dateNow.getSeconds() + dateNow.getMinutes()*60 + dateNow.getHours()*60*60 + dateNow.getDate()*24*3600 + dateNow.getMonth()*30*24*3600;
  //console.log(`Estos son los segundos de la fecha actual ${dateNowInSeconds}`)

  console.log(dateToWork.format());
  console.log(dateNow.format());
  
  const dateToWorkInSeconds = dateToWork.unix();
  const dateNowInSeconds = dateNow.unix();
  const difTime = dateNowInSeconds - dateToWorkInSeconds;
  const durations = dateNow.diff(dateToWork);
  const oneMonthAgoInSeconds = dateNowInSeconds - ONE_MONTH_IN_SECONDS

  console.log(difTime, durations);
  console.log(dayjs.duration(durations, "minutes").humanize(true)); // in a minute
  console.log(dayjs(dateToWork).fromNow())
  if (difTime > 1) {
    // Si no es del mismo año = Fecha Completa  RESUELTO
    if (dateNow.year() !== dateToWork.year() ) {
      const nameMonth = dateToWork.format('MMMM')
      result.innerHTML = `${nameMonth} ${dateToWork.format('DD')}, ${dateToWork.format('YYYY')}`
    }
    // Si es menos de 30 días
    if (dateToWorkInSeconds > oneMonthAgoInSeconds) {
      // Poner de forma humanizada

      // Dias y meses
      result.innerHTML = dayjs(dateToWork).fromNow()
      

    }  
  }  
} 
