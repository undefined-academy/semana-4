import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js';

await import('dayjs/locale/es.js');
dayjs.extend(relativeTime);
dayjs.locale('es');

const postTime1 = document.querySelector("#postTime-1");
const postTime2 = document.querySelector("#postTime-2");
const postTime3 = document.querySelector("#postTime-3");

function humanizarFecha(fecha) {
    const time = dayjs();
    const segundos = time.diff(fecha, "seconds");
    const minutos = time.diff(fecha, "minute");
    const horas = time.diff(fecha, "hour");
    const dias = time.diff(fecha, "day");
    const anio = dayjs(fecha).format("YYYY");

    switch (true) {
        case segundos < 60:
            return `Hace ${segundos} segundos`;
            break;
        case minutos < 60:
            return `Hace ${minutos} minutos`;
            break;
        case horas >= 1 && horas < 24:
            return `Hace ${horas} horas`;
            break;
        case (dias > 0) && (dias < 30):
            return `Hace ${dias} Dias`;
            break;
        case anio == dayjs().format("YYYY") && dias > 30:
            return dayjs(fecha).format("MMMM DD");
            break;
        case anio != dayjs().format("YYYY"):
            return dayjs(fecha).format("MMMM DD, YYYY");
            break;
        default:
            break;
    }
}

postTime1.innerHTML = humanizarFecha(dayjs().subtract(25, "minutes"));
postTime2.innerHTML = humanizarFecha(dayjs().subtract(7, "hours"));
postTime3.innerHTML = humanizarFecha(dayjs().subtract(8, "hours"));