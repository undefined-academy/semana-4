import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
dayjs.extend(relativeTime);
import es from "dayjs/locale/es.js";
dayjs.locale(es);



function humanize(dates){
    const now = dayjs()

    if(now.diff(dates, "year") < 1 && now.diff(dates, "month") >= 1){
        return dayjs().format("MMMM DD");
    }
    else if(now.diff(dates, "year") > 1){
        return dayjs().format("MMMM DD, YYYY");
    }
    else{
    return now.to(dates);
    }
}