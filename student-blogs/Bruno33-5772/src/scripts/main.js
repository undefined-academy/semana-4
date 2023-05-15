import humanizeDate from "./utils/humanize.js";

// Fecha con mayúscula al inicio
function capitalize (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Por cada time, convertir el datetime en fecha más fácil de leer
function humanizeDatePost ($date) {
    const datetime = $date.getAttribute("datetime");
    const humanizedDate = humanizeDate(datetime);
    $date.textContent = capitalize(humanizedDate);
}

// Obtener todos los elementos time para conversión
const $dates = document.querySelectorAll("time");
$dates.forEach(humanizeDatePost);