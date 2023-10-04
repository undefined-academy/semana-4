import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

await import("dayjs/locale/es");

dayjs.locale("es");
dayjs.extend(relativeTime);

function humanize(date) {
  const wrappedDate = dayjs(date);
  const diffDate = Math.abs(wrappedDate.diff(dayjs(), "days"));
  const today = dayjs();

  if (wrappedDate.year() !== today.year()) {
    return wrappedDate.format("MMMM DD");
  } else if (diffDate <= 30) {
    return wrappedDate.fromNow();
  } else {
    return wrappedDate.format("MMMM DD, YYYY");
  }
}

function handleSubmit(event) {
  event.preventDefault(); //
  console.log("Hola mundo");
}
const $form = document.querySelector("form");
$form.addEventListener("submit", handleSubmit);
