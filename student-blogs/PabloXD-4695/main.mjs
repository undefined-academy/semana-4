import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
dayjs.extend(relativeTime);

const time1 = "2023-04-02";
const time2 = "2023-03-02";
const time3 = "2022-04-02";

const humanizeDate = (date) => {
  const now = dayjs();
  const diff = now.diff(date, "days");
  if (diff < 30) {
    return date.fromNow();
  }
  return date.year() === now.year()
    ? date.format("MMMM D")
    : date.format("MMMM D, YYYY");
};

console.log(humanizeDate(dayjs(time1)));
console.log(humanizeDate(dayjs(time2)));
console.log(humanizeDate(dayjs(time3)));
