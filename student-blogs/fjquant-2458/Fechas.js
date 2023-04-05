import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime.js"

import("dayjs/locale/es-us.js")

dayjs.locale("es.us")
dayjs.extend(relativeTime)

function humanizar(fecha){
    const incognita = dayjs(fecha)
    const daysdiff = Math.abs(incognita.diff(Date.now(), "dias"));

    const añoEnCurso = incognita.year() === new Date().getFullYear();

    if(!añoEnCurso) {
        return incognita.format("MMMM DD, YYYY")
    }     else if (daysdiff >= 30) {
        return incognita.format("MMMM DD")
    }     else {
        return incognita.fromNow()
    }
}

console.log(humanizar(Date.now()))
console.log(humanizar(dayjs().subtract(5, "days")))
console.log(humanizar(dayjs().subtract(60, "days")))
console.log(humanizar(dayjs().subtract(500, "days")))
console.log(humanizar(dayjs().add(300, "days")))