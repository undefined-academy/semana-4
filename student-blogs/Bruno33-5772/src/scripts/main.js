import humanizeDate from "./utils/humanize.js";

function capitalize (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function humanizeDatePost ($date) {
    const datetime = $date.getAttribute("datetime");
    const humanizedDate = humanizeDate(datetime);
    $date.textContent = capitalize(humanizedDate);
}

const $dates = document.querySelectorAll("time");
$dates.forEach(humanizeDatePost);