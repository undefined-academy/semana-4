import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";

await import("dayjs/locale/en-au.js")

dayjs.locale("en-au")
dayjs.extend(relativeTime)

function toHumanize(date) {
    const wrappedDate = dayjs(date)
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));

    const isCurrentYear = wrappedDate.year() === new Date().getFullYear();

    if(!isCurrentYear) {
        return wrappedDate.format("MMMM DD, YYYY")
    } else if(daysDiff <= 30) {
        return wrappedDate.fromNow();
    } else {
        return wrappedDate.format("MMMM DD")
    }
}


const toPrint = toHumanize(dayjs().subtract(365, "days"))


var cardDate = document.getElementsByClassName("card-date");

for (var i = 0; i < cardDate.length; i++) {
  cardDate[i].innerHTML = toPrint;
  }