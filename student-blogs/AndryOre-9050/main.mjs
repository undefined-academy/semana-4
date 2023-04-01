import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js';

dayjs.extend(relativeTime);

function humanizeDate(date) {
	const now = dayjs();
	const dateObj = dayjs(date);
	const difference = now.diff(dateObj, 'month', true);

	if (difference < 1) {
		return dateObj.fromNow();
	} else if (dateObj.year() === now.year()) {
		return dateObj.format('MMMM D');
	} else {
		return dateObj.format('MMMM D, YYYY');
	}
}

const cardDetailsList = document.querySelectorAll('.cardDetails');

cardDetailsList.forEach((cardDetails) => {
	const cardDate = cardDetails.firstElementChild.textContent;
	const cardHumanizedDate = humanizeDate(cardDate);
	cardDetails.firstElementChild.textContent = cardHumanizedDate;
});
