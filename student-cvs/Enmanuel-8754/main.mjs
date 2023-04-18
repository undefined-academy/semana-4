import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import realtivetime from "dayjs/plugin/relativeTime.js";
import "dayjs/locale/es.js";

dayjs.extend(utc);
dayjs.extend(realtivetime);
dayjs.locale("es");                             // establece el idioma español.

//const fecha = dayjs();   // Creando fecha ES

//const fechaHuman = fecha.format("dddd, D [de] MMMM [del] YYYY [a las] h:mm A"); //Humanizando fecha ES


function humanizeDate(date) {
    const NowDate = dayjs(date);
    const diffInDays = Math.abs(NowDate.diff(Date.now(), "days"));
    const CurrentYear = NowDate.year() === new Date().getFullYear();

    if (!CurrentYear) {
        return NowDate.format("dddd, D [de] MMMM [del] YYYY [a las] h:mm A");
    } else if (diffInDays <= 30) {
        return NowDate.fromNow();
    } else {
        return NowDate.format("MMMM DD");
    }
}

const timeTags = document.querySelectorAll("time");

timeTags.forEach((timeTag) => {
  const formattedDate = humanizeDate(timeTag.getAttribute("datetime"));
  timeTag.textContent = formattedDate;
});
