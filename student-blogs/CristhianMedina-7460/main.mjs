import dayjs from "dayjs";
import es from "dayjs/locale/es";

dayjs.locale(es);

function CalcDatePublished() {
  let publishedTimeList = document.querySelectorAll(".published-time");
  let dateListFromPublished = [];
  const today = dayjs();

  for(let i = 0; i < publishedTimeList.length; i++) {
    dateListFromPublished.push(dayjs(publishedTimeList[i].innerText));
  }

  dateListFromPublished.forEach((value, i) => {
    if (Math.abs(today.diff(value, "minute")) <= 60) {
      publishedTimeList[i].innerText = `hace ${Math.abs(today.diff(value, "minute"))} minutos`;
    } else if (Math.abs(today.diff(value, "hour")) <= 24) {
      publishedTimeList[i].innerText = `hace ${Math.abs(today.diff(value, "hour"))} horas`;
    } else if (Math.abs(today.diff(value, "day")) <= 28) {
      publishedTimeList[i].innerText = `hace ${Math.abs(today.diff(value, "day"))} días`;
    } else if (dayjs(value).format("YYYY") == dayjs(today).format("YYYY")) {
      publishedTimeList[i].innerText = `${dayjs(value).format("D MMMM")}`;
    } else {
      publishedTimeList[i].innerText = `${dayjs(value).format("MMMM, YYYY")}`;
    }
  });

  return null;
}

window.addEventListener("load", CalcDatePublished);