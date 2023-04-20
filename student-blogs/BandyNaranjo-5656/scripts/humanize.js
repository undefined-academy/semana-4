import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"
import "dayjs/locale/es-us.js"

dayjs.extend(relativeTime)
dayjs.locale("es-us")

export default function humanizeDates(date) {
    const dateDayjs = dayjs(date);
    const diffDays = dayjs().diff(dateDayjs,'day');
    if (dateDayjs.year() != dayjs().year()) {
        
        return dateDayjs.format('MMMM D, YYYY.');
    } else if (diffDays > 28) {
        return dateDayjs.format('MMMM D.');
    } else {
        if (diffDays == 7) {
            return 'hace 1 semana';
        } else if (diffDays == 14){
            return 'hace 2 semanas';
        } else if(diffDays == 21){
            return 'hace 3 semanas';
        } else if(diffDays == 28){
            return 'hace 1 mes';
        } else {
            return  dateDayjs.fromNow();
        }
    }
}