import dayjs from "dayjs" 
import relativeTime from "dayjs/plugin/relativeTime.js"
import utc from "dayjs/plugin/utc.js"
await  import("dayjs/locale/es-us.js")

dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.locale("es-us")


function humanizarfecha(date){
    const datenow=dayjs(date);
    const fechasdiff=Math.abs(datenow.diff(dayjs(),"day"));
    const IFyear= dayjs(date).year()==dayjs().year();
    if (!IFyear){
        return dayjs(date).format("MMMM DD,YYYY");
    }
    else if (fechasdiff<=30){
        return dayjs(date).fromNow();
    }else {
        return dayjs(date).format("MMMM D")
    }   
}
//humanizar la fecha 
const $timeTags = document.querySelectorAll("time");
$timeTags.forEach((timeTag) => {
    let date = timeTag.getAttribute("datetime");
    console.log(date);
    let converteDate = humanizarfecha(date);
    console.log(converteDate);
    let timeNow=dayjs().format("DD MMMM,YYYY");
    timeTag.innerText = timeNow;
});



function handlesubmit(event){
    event.preventDefault();
    console.log("Hola mundo");
}
const $form=
 document.querySelector("form");
 $form.addEventListener("submit",handlesubmit);

 