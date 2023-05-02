// Function humanize
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";

dayjs.extend(relativeTime);
dayjs.locale("es");

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  

const humanizeDates = () => {
    
  const times = document.querySelectorAll('time');
  times.forEach((time) => {

    const dateTime = time.getAttribute('datetime');
    const ONE_MONTH = 30;
    const ONE_YEAR = 365;
    const diffInDays = dayjs().diff(dayjs(dateTime), 'day');
    let humanizedDate;

    if (diffInDays < ONE_MONTH) {
        humanizedDate = dayjs(dateTime).fromNow();
        humanizedDate = capitalize(humanizedDate);
    } else if (diffInDays <= ONE_YEAR) {
        humanizedDate = dayjs(dateTime).format('MMMM D');
        humanizedDate = capitalize(humanizedDate);
    } else {
        humanizedDate = dayjs(dateTime).format('MMMM D, YYYY');
        humanizedDate = capitalize(humanizedDate);
    }
    
    time.textContent = humanizedDate;

  });
};

humanizeDates();


// Prevent default
function handleSubmit(event) {
    event.preventDefault(); // 🍎
    console.log("Hola mundo");
}
    
const $form =document.querySelector("form");
$form.addEventListener("submit", handleSubmit);