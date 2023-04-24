import dayjs from "dayjs"
import utc from "dayjs/plugin/utc.js"
import relativeTime from "dayjs/plugin/relativeTime.js"

dayjs.extend(utc)
dayjs.extend(relativeTime)

const currentDate = new dayjs();

function humanize(date){

    const WrappedDate = dayjs(date)
    const isHumanDate = Math.abs(WrappedDate.diff(new Date(),'day')) < 30
    const moreAMonth = !isHumanDate && WrappedDate.year() == dayjs().year()

    
    if(isHumanDate){
        //console.log(WrappedDate.fromNow())
        return WrappedDate.fromNow();
    }
    else if(moreAMonth){
        //console.log(WrappedDate.format("MMMM DD"))
        return WrappedDate.format("MMMM DD");
    }
    else{
        //console.log( WrappedDate.format("MMMM DD, YYYY"))
        return  WrappedDate.format("MMMM DD, YYYY");
    }

}

console.log("hola")
const dates = document.getElementsByTagName("time");
//console.log(dates)

Array.from(dates).forEach(date => {
    date.innerHTML = humanize(date.innerHTML);
})










