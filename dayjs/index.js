import dayjs from "dayjs";
import es from "dayjs/locale/es";

dayjs.locale(es);

function CalcDateDiff() {
  let display = document.querySelector("#answer");

  let userDate = document.querySelector("#user-date").value;
  userDate = dayjs(userDate);

  const today = dayjs();

  let response = "";

  if (Math.abs(today.diff(userDate, "minute")) <= 60) {
    response = `${Math.abs(today.diff(userDate, "minute"))} minutos`;
  } else if (Math.abs(today.diff(userDate, "hour")) <= 24) {
    response = `${Math.abs(today.diff(userDate, "hour"))} horas`;
  } else if (Math.abs(today.diff(userDate, "day")) <= 28) {
    response = `${Math.abs(today.diff(userDate, "day"))} días`;
  } else if (dayjs(userDate).format("YYYY") == dayjs(today).format("YYYY")) {
    response = `${Math.abs(today.diff(userDate, "day"))} días, ${dayjs(userDate).format("MMMM D")}`;
  } else {
    response = `${Math.abs(today.diff(userDate, "month"))} meses, ${dayjs(userDate).format("MMMM D - YYYY")}`;
  }
  
  if (dayjs().isBefore(userDate)) {
    response = `Faltan ${response}`;
  }
  
  if (dayjs().isAfter(userDate)) {
    response = `Han pasado ${response}`;
  }

  display.textContent = response;
  return null;
}
console.log('Hola');

const btn = document.querySelector("#calc");
btn.addEventListener("click", CalcDateDiff);