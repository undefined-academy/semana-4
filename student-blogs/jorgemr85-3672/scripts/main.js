import humanize from "./utils/humanize";

console.log(humanize("2023-20-05"))



const $date = document.querySelectorAll("time");
console.log($date);

// function humanizeDate($date){
//     const datetime = $date.getAttribute("datetime");
//     const humanize = humanize(datetime);
//     console.log($date.getAttribute("datetime"));
// }


function humanizeDate($date, i){
    const datetime = $date.getAttribute("datetime");
    const humanizeDate = humanize(datetime);
    $date.textContent=humanizeDate;
    console.log(humanizeDate);
}

$date.forEach(humanizeDate)

// const $date = document.querySelectorAll("time")
// $date.forEach(humanizeDate)
