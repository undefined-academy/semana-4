
// imports para humanizar fecha-----------------------
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"
import es from "dayjs/locale/es.js"


function handleSubmit(event) {
    event.preventDefault();
    console.log("Hola mundo");
}

// const $form = document.querySelector("form");
// $form.addEventListener("submit", handleSubmit);


// Funcion para humanizar fecha-----------------------
dayjs.extend(relativeTime)
dayjs.locale(es)


function humanizarFecha (fecha) {
    const today1 = dayjs()
    const diferenciaMinutos = today1.diff(fecha, "minute")
    const diferenciaHoras = today1.diff(fecha, "hour")
    const diferenciaSemanas = today1.diff(fecha, "week")
    const diferenciaDias = today1.diff(fecha, "day")
    const year = dayjs(fecha).format("YYYY")

    switch (true) {
        case diferenciaMinutos < 60:
            console.log(`Hace ${diferenciaMinutos} minutos`)
            return `Hace ${diferenciaMinutos} minutos`
            break;
        case diferenciaHoras >= 1 && diferenciaHoras < 24:
            console.log(`Hace ${diferenciaHoras} horas`)
            return `Hace ${diferenciaHoras} horas`
            break;
        case (diferenciaDias > 0) && (diferenciaDias < 30):
            console.log(`Hace ${diferenciaDias} dias`)
            return `Hace ${diferenciaDias} dias`
            break;
        case year == dayjs().format("YYYY") && diferenciaDias > 30:
            console.log("La fecha es en "+ dayjs(fecha).format("MMMM DD"))
            return dayjs(fecha).format("MMMM DD")
            break;
        case year != dayjs().format("YYYY"):
            console.log("La fecha es en " + dayjs(fecha).format("MMMM DD, YYYY"))
            return dayjs(fecha).format("MMMM DD, YYYY")
            break;
        default:
            break;
    }
} 

humanizarFecha("2022-02-01T22:20:23-05:00")

const contenedorFecha = document.querySelector("time");
const fechaActualizacion = contenedorFecha.textContent;
console.log(fechaActualizacion)

contenedorFecha.textContent = humanizarFecha(fechaActualizacion)

