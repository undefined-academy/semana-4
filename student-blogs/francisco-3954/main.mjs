import dayjs from "dayjs";
import "dayjs/locale/es.js"
import relativeTime from "dayjs/plugin/relativeTime.js";

dayjs.locale('es')
dayjs.extend(relativeTime)

function humanizarFecha(date) {

    const dateFrom = dayjs(date)
    const today = dayjs()
    
    const years = today.diff(dateFrom, "years")
    const months = today.diff(dateFrom, "months")

    
    if(years) {
        return dateFrom.format("MMMM DD, YYYY")
    } else if(months > 1) {
        return dateFrom.format("MMMM DD")
    } else {
        return dateFrom.fromNow()
    }

}


const dates = document.getElementsByTagName("time")

for (let index = 0; index < dates.length; index++) {
    const element = dates[index];
    
    const humanizateDate = humanizarFecha(element.dateTime)
    
    element.innerText = humanizateDate
}


