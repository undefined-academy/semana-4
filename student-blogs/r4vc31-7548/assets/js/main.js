import humanizeDate from "./utils/humanize.js";

const $projectDates = [...document.querySelectorAll("time")];
$projectDates.forEach((projectDate) => {
    projectDate.textContent = humanizeDate(projectDate.getAttribute("datetime"));
})

