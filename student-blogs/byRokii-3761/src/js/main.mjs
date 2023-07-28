import dayjs from "dayjs";
import es from "dayjs/locale/es";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale(es);

function humanize(date) {
    const fecha = dayjs(date);
    const daysDiff = Math.abs(fecha.diff(Date.now(), "days"));
    const isCurrentYear = fecha.year() === new Date().getFullYear();

    if (!isCurrentYear) {
        return fecha.format("MMMM DD, YYYY");
    } else if (daysDiff <= 30) {
        return fecha.fromNow();
    } else {
        return fecha.format("MMMM DD");
    }
}

console.log("todo ok");