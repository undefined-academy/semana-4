import humanize from  "./scripts/humanize.js"


function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const $dates = document.querySelector("#humanizedDateId");
let humanizedDate = humanize("2023-04-15T15:16:28-05:00");
humanizedDate = capitalize(humanizedDate);
$dates.textContent = humanizedDate;

const form = document.getElementsByClassName("contactMeForm");
form[0].addEventListener("submit", function(event) {
    event.preventDefault();
})

const burger = document.querySelector('.toggle-menu');
const navLinks = document.querySelector('.menu');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});