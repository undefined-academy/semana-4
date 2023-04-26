import dayjs from "dayjs"
import utc from "dayjs/plugin/utc.js"
import relativeTime from "dayjs/plugin/relativeTime.js"
import weekday from "dayjs/plugin/weekday.js"
await import("dayjs/locale/es-us.js")

dayjs.extend(utc)
dayjs.extend(relativeTime)
dayjs.extend(weekday)
dayjs.locale("es-us")

const fecha = dayjs("2023-02-30")
const fechaHoy = dayjs()

const diferenciaMes = fechaHoy.diff(fecha, "month")
function humanizarFecha(fecha) {
  if (fechaHoy.get("year") != fecha.get("year")) {
    return fecha.format("MMMM, DD YYYY")
  } else if (diferenciaMes == 0) {
    return fecha.fromNow()
  } else if (diferenciaMes > 0) {
    return fecha.format("MMMM DD")
  }
}

const humanizado = humanizarFecha(fecha)
console.log(humanizado)
