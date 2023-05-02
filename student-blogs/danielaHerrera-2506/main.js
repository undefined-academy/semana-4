import dayjs from "./node_modules/dayjs/esm/index.js";
import relativeTime from "./node_modules/dayjs/esm/plugin/relativeTime/index.js";


await import("dayjs/locale/es-us.js")

dayjs.locale("es-us")
dayjs.extend(relativeTime)

function humanizarFecha(date) {
  const wrappedDate = dayjs(date)
  const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));

  const isCurrentYear = wrappedDate.year() === new Date().getFullYear();

  if(!isCurrentYear) {
    return wrappedDate.format("MMMM DD, YYYY")
  } else if(daysDiff <= 30){
    return wrappedDate.fromNow();
  } else {
    return wrappedDate.format("MMMM DD")
  }
}

console.log(humanizarFecha(Date.now()));
console.log(humanizarFecha(dayjs().subtract(5, "days")));
console.log(humanizarFecha(dayjs().subtract(60, "days")));
console.log(humanizarFecha(dayjs().subtract(500, "days")));
console.log(humanizarFecha(dayjs().add(300, "days")));

const fechas = document.querySelectorAll("time")

fechas.forEach((fecha) => {
  console.log(humanizarFecha(fecha.dateTime))
  fecha.innerHTML = humanizarFecha(fecha.dateTime)
})