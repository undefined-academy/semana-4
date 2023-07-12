import dayjs from "dayjs";
import es from "dayjs/locale/es";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale(es);

function days(date) {
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

console.log(days(Date.now()));
console.log(days(dayjs().subtract(5, "days")));
console.log(days(dayjs().subtract(60, "days")));
console.log(days(dayjs().subtract(500, "days")));
console.log(days(dayjs().add(300, "days")));
console.log(days(dayjs().add(30, "days")));

// * Evitar evento por default del formulario

const submitButton = document.querySelector('input[type="submit"]');

submitButton.addEventListener("click", (e) => {
	e.preventDefault();
	alert("Listo👍");
});
