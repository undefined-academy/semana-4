import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
await import("dayjs/locale/es-us.js");
dayjs.locale("es-us");
dayjs.extend(relativeTime);
function humanize(date) {
  const wrappedDate = dayjs(date);
  const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));

  const isCurrentYear = wrappedDate.year() === new Date().getFullYear();

  if (!isCurrentYear) {
    return wrappedDate.format("MMMM DD, YYYY");
  } else if (daysDiff <= 30) {
    return wrappedDate.fromNow();
  } else {
    return wrappedDate.format("MMMM DD");
  }
}
document.getElementById("dateHtml").innerHTML = humanize("2023-04-19");
document.getElementById("dateCss").innerHTML = humanize("2023-02-09");
document.getElementById("dateJavascript").innerHTML = humanize("2022-01-29");
document.getElementById("dateGeneral").innerHTML = humanize("2022-10-19");

console.log(humanize(Date.now()));
console.log(humanize(dayjs().subtract(5, "days")));
console.log(humanize(dayjs().subtract(60, "days")));
console.log(humanize(dayjs().subtract(500, "days")));
console.log(humanize(dayjs().add(300, "days")));
