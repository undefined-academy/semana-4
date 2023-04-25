import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
dayjs.extend(relativeTime);
import es from "dayjs/locale/es.js";
dayjs.locale(es);

function humanize(date) {
  const wrappedDate = dayjs(date);
  const dayDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));
  const isCurrentYear = wrappedDate.year() === new Date().getFullYear();

  if (!isCurrentYear) {
    return wrappedDate.format("MMMM DD, YYYY");
  } else if (dayDiff <= 30) {
    return wrappedDate.format();
  } else {
    return wrappedDate.format("MMMM DD");
  }
}
const date = dayjs("2023-04-18");
const humanizeDate = humanize(date);
document.getElementById("date").innerHTML = humanizeDate;
