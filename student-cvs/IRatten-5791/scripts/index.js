import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import "dayjs/locale/es.js";

dayjs.extend(relativeTime);
dayjs.locale('es')

function humanizeDate(date) {
  const turnDate = dayjs(date);
  const isMonth = Math.abs(turnDate.diff(dayjs(Date.now()), 'month'));

  if (isMonth <= 1) {
    return turnDate.fromNow();
  } else {
    if (dayjs(turnDate).year() === dayjs(Date.now()).year()) {
      return turnDate.format("MMMM D");
    } else {
      return turnDate.format("MMMM DD, YYYY");
    }
  }
}

const yesterday = dayjs("2023-04-20 13:05:00");
console.log(humanizeDate(yesterday));