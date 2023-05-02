import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration.js';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import 'dayjs/locale/es.js';
import updateLocale from 'dayjs/plugin/updateLocale.js';


dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

dayjs.updateLocale(dayjs.locale("es"));

export default function humanizeDate(simpleDate) {
    const date = dayjs(simpleDate);
    const currentDate = dayjs();
    const years = currentDate.diff(date, "years");
    const months = currentDate.diff(date, "months");

    let result = "";
    // wrong condition? : years > 0
    if (date.year() !== currentDate.year()) {
        result = date.format("MMMM DD, YYYY");
    } else {
        if (months < 1) {
            result = date.from(currentDate);
        } else {
            result = `${date.format("MMMM DD")}`;
        }
    }

    return result;
}

humanizeDate('2022-04-14T16:30:15.000Z');
humanizeDate('2023-04-14T16:30:15.000Z');
humanizeDate('2024-04-14T16:30:15.000Z');
humanizeDate(dayjs());