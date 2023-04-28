import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"

await import("dayjs/locale/es-us.js")

dayjs.locale("es-us")
dayjs.extend(relativeTime)

function humanize(date) {
	const wrappedDate = dayjs(date)
	return wrappedDate.format("DD MMMM YYYY HH:mm:ss")


}

 console.log(humanize(Date.now()));

 const fechaFormato = document.getElementById("fecha");
 fechaFormato.textContent = humanize(Date.now());


