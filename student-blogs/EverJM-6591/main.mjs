import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";

dayjs.extend(relativeTime);

function humanize(date) {
	const wrappedDate = dayjs(date)
	const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));
	const isCurrentYear = wrappedDate.year() === new Date().getFullYear();

	if(!isCurrentYear) {
		return wrappedDate.format("MMMM/DD/YYYY");
	} else if(daysDiff <= 30) {
		return wrappedDate.fromNow();
	} else {
		return wrappedDate.format("MMMM/DD");
	}
}

function dateHuman(name, date){
	document.querySelector(`#${ name }`).innerHTML = `<i class="fa-regular fa-clock"></i> ${ humanize(date) }`;
}

dateHuman("date1", "05/20/2023");
dateHuman("date2", "05/31/2023");
dateHuman("date3", "02/20/2023");
dateHuman("date4", "04/20/2023");
dateHuman("date5", "05/20/2022");
dateHuman("date6", "04/25/2023");
dateHuman("date7", "04/29/2023");
dateHuman("date8", "05/30/2023");
dateHuman("date9", "05/21/2023");