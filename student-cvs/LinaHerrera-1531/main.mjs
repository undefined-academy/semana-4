import dayjs from "dayjs"
//relativeTime" de "dayjs" que permite formatear fechas en función del tiempo relativo en lugar de fechas absolutas
import relativeTime from "dayjs/plugin/relativeTime.js"

//Espero a que cargue es-us que contiene las traducciones de "dayjs" para español 
await import("dayjs/locale/es-us.js")

//lo integro para que las fechas se formateen y traduzcan correctamente
dayjs.locale("es-us")
//para usar .fromNow() q calcula y muestra la diferencia entre una fecha pasada/futura y la fecha actual en formato legible para humanos.
dayjs.extend(relativeTime)

//función que toma una fecha como entrada y realiza el formateo de la fecha segun condiciones abajo
function humanize(date) {
//pa cualquier fecha q me pase, la pongo en formato dayjs poder formatearla y realizar comparaciones
	const wrappedDate = dayjs(date)
// Calculo la diferencia en "days"" entre la fecha proporcionada y la fecha actual ((Date.now()) utilizando el método diff, 
//y Math.abs() para obtener el valor absoluto (siempre positivo) de la diferencia.
	const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));
//Comparo el año de la fecha proporcionada con el año actual utilizando el método year() de "dayjs" y getFullYear() de Date pa el actual
	const isCurrentYear = wrappedDate.year() === new Date().getFullYear();

//Si la fecha proporcionada no es del año actual, se formatea en el formato "MMMM DD, YYYY"
	if(!isCurrentYear) {
		return wrappedDate.format("MMMM DD, YYYY")
//Si la fecha proporcionada es del año actual y la diferencia en días entre la fecha proporcionada y la fecha actual es menor o 
//igual a 30 días, entonces se formatea en función del tiempo relativo utilizando el método fromNow() de "dayjs", que devuelve una 
//cadena de texto que representa la diferencia de tiempo relativa en términos de "hace X días", "hace X horas
	} else if(daysDiff <= 30) {
		return wrappedDate.fromNow();
//si es del mismo año y mayor a 30 días, de devuelve mes en palabras y dia en num
	} else {
		return wrappedDate.format("MMMM DD")
	}
}

console.log(humanize("2023-06-02"))
console.log(humanize(Date.now()))
//dayjs().subtract()" es un método que se utiliza en Day.js para restar una cantidad de tiempo específica a una fecha
console.log(humanize(dayjs().subtract(5, "days")))
console.log(humanize(dayjs().subtract(60, "days")))
console.log(humanize(dayjs().subtract(500, "days")))
console.log(humanize(dayjs().add(30, "days")))
console.log(humanize(dayjs().add(300, "days")))