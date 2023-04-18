import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"
dayjs.extend(relativeTime)

const today = dayjs()

function capitalize (string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function humanizar (dateToHumanize){
    const date = dayjs(dateToHumanize);
    let newDate = dayjs(date);
    if(Math.abs(date.diff(today, "month", true)) <= 1){
        newDate = dayjs(date).from(today)
    }else if (Math.abs(date.diff(today, "year", true)) <= 1){
        newDate = date.format("MMMM DD")
    }else{
        newDate = date.format("MMMM DD, YYYY")
    }
    return newDate;
}

function humanizaDate($date){
    const datetime = $date.getAttribute("datetime");
    const humanizedDate = humanizar(datetime);
    $date.textContent = capitalize(humanizedDate);
}

const $dates = document.querySelectorAll("time")
$dates.forEach(humanizaDate)

/** const dateToHumanize = dayjs("2023-04-20")
humanizar(dateToHumanize)

const dateToHumanize2 = dayjs("2022-12-18")
humanizar(dateToHumanize2)

const dateToHumanize3 = dayjs("2025-01-01")
humanizar(dateToHumanize3) **/