const MESES = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

function convertMsToDays(fecha) {
    return (fecha / 1000 / 60 / 60 / 24)
};

const fecha = new Date();

function humanizarFecha(fechaIn) {

    const fechaHoy = new Date();

    /* if (fechaIn > fechaHoy) {
        alert("La fecha de inicio es mayor a la de término.");
    } */

    const diferenciaDias = convertMsToDays(fechaHoy - fechaIn);

    if (diferenciaDias < 0) {
        return `Sucederá en: ${Math.trunc(Math.abs(diferenciaDias))} días`
    }

    else if (diferenciaDias < 30) {
        if (diferenciaDias < 1) {
            const minutos = diferenciaDias * 24 * 60
            return `Hace ${Math.trunc(Math.abs(minutos))} minutos `
        } else {
            return `Hace ${Math.trunc(diferenciaDias)} días`
        }
    }

    else if (diferenciaDias > 365) {
        return `${MESES[fechaIn.getMonth()]} ${fechaIn.getDate()}, ${fechaIn.getFullYear()}`
    } else {
        return MESES[fechaIn.getMonth()] + " " +fechaIn.getDate()
    }
}


let $timeTags = document.querySelectorAll('time')

$timeTags.forEach(timeTag => {
    let date = new Date(timeTag.getAttribute('datetime'))
    let humanDate = humanizarFecha(date)

    timeTag.innerText = humanDate
})

/*         console.log("Sucederá en: %d días", Math.trunc(Math.abs(diferenciaDias))) */

/* console.log("Hace %d minutos", Math.trunc(Math.abs(minutos))) */

/*             console.log("Hace %d días, exactamente: %d", Math.trunc(diferenciaDias), diferenciaDias) */

/*         console.log("la fecha es Mayor >= a un mes")
        console.log(MESES[fechaIn.getMonth()], fechaIn.getDate()) */


/* console.log("la fecha es Mayor >= a un mes") */

/*         console.log("%s %d, del %d", MESES[fechaIn.getMonth()], fechaIn.getDate(), fechaIn.getFullYear()) */
