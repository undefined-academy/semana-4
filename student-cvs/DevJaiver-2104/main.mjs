// main.mjs


import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";

await import('dayjs/locale/es-us.js');
dayjs.locale('es-us');
dayjs.extend(relativeTime);

const _PublicationDateSheetLife = dayjs("2023-04-01 15:20");

function humanizeFecha(date){

    const wrappedDate = dayjs(date);
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));

    const isCurrentYear = wrappedDate.year() === new Date().getFullYear();

    if(!isCurrentYear){
        return wrappedDate.format("MMMM DD, YYYY");
    }
    else if(daysDiff <= 30){
        return wrappedDate.fromNow();
    }
    else{
        return wrappedDate.format("MMMM DD");
    }
}

function handleSubmit(event) {
    event.preventDefault(); 
    console.log("Hola mundo");
}
    
const $form =document.querySelector("form");
$form.addEventListener("submit", handleSubmit);

const _DateSheetLife = humanizeFecha(_PublicationDateSheetLife);
console.log(_DateSheetLife);

const $PublicationSheetLife = document.getElementById("PublicationSheetLife");
$PublicationSheetLife.innerText = _DateSheetLife;










