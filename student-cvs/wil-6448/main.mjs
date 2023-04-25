// main.mjs
function handleSubmit(event) {
    event.preventDefault(); //
    console.log("Hola mundo");
}
const $form = document.querySelector(".form__contact");
$form.addEventListener("submit", handleSubmit);

//humanize.js

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js"

//await import("dayjs/locale/es-us.js");
import("dayjs/locale/es-us.js");

dayjs.locale("es-us");
dayjs.extend(relativeTime);

// console.log(dayjs().format());

function humanize(date) {
    const wrappedDate = dayjs(date);
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));

    const isCurrentYear = wrappedDate.year() === new Date().getFullYear();

    if(!isCurrentYear) {
        return wrappedDate.format("MMM DD YYYY")
    } else if(daysDiff <= 30) {
        return wrappedDate.fromNow();
    } else {
        return wrappedDate.format("MMM DD");
    }
}

function humanizeDate($date) {
    const datetime = $date.getAttribute("datetime");
    const humanizedDate = humanize(datetime);
    $date.textContent = capitalize(humanizedDate); 
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function humanizeArticlesDate() {
    const $dates = document.querySelectorAll("time");
    $dates.forEach(humanizeDate);
}

function main() {
    humanizeArticlesDate();
}

main();