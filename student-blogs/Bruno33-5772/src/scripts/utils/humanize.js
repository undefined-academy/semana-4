import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";

await import("dayjs/locale/es.js");
dayjs.locale("es");
dayjs.extend(relativeTime);

export default function humanizeDate (dateInput) {
    const date = dayjs(dateInput);
    const today = dayjs();
    if (today.diff(date,"month") === 0) {
        return date.fromNow();
    } else if ((today.year() - date.year()) === 0) {
        return date.format("MMMM D");
    } else {
        return date.format("MMMM DD, YYYY");
    }
}