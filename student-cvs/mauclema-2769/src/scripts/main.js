import humanize from "./utils/humanize.js";

function capitalize(str){
return str.charAt(0).toUpperCase()+str.slice(1);

}

function humanizeDate($date, i){

    const datetime=$date.getAttribute("datetime");
    const humanizedDate=humanize(datetime);
    console.log(humanizedDate);

    $date.textContent=capitalize(humanizedDate);
}

const $dates=document.querySelectorAll("time")
$dates.forEach(humanizeDate)