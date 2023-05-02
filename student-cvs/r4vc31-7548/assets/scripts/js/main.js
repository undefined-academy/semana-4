import dayjs from "dayjs";
import humanizeDate from "./utils/humanize";

function handleSubmit(event) {
    event.preventDefault();
    console.log("Hola mundo");
}

const $form = document.querySelector("form");
$form.addEventListener("submit", handleSubmit);

console.log(`Hello World 😱 ${humanizeDate("2021-01-01")}`);

const $age = document.querySelector("#age");
const birthday = dayjs("2001-03-04");
const currentAge = birthday.fromNow(true);
$age.innerHTML = currentAge;
