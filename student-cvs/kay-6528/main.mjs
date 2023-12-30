//Fechas Humanizadas
import daysjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js';
daysjs.extend(relativeTime);

await import("dayjs/locale/es-us.js");
daysjs.locale("es-us");

function humanizedDate(date) {
  const wrappedDate = daysjs(date);
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

console.log(humanizedDate("1996 09 25"));