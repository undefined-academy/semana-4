import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"
import utc from "dayjs/plugin/utc.js"
await import("dayjs/locale/es-us.js")

dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.locale("es-us")


function humanizarfecha(date) {
    const datenow = dayjs(date);
    const fechasdiff = Math.abs(datenow.diff(dayjs(), "day"));
    const IFyear = dayjs(date).year() == dayjs().year();
    if (!IFyear) {
        return dayjs(date).format("MMMM DD,YYYY");
    }
    else if (fechasdiff <= 30) {
        return dayjs(date).fromNow();
    } else {
        return dayjs(date).format("MMMM D")
    }
}

let $timeTags = document.querySelectorAll("time");
$timeTags.forEach((timeTag) => {
    let date = timeTag.getAttribute("datetime");
    let convertedDate = humanizarfecha(date);
    console.log(convertedDate);
    timeTag.innerText = date;
});
