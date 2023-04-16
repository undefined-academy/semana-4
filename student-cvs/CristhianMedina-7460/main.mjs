function stopAction(event) {
  event.preventDefault();
  console.log('Hi world');
}

const form = document.querySelector("form");
form.addEventListener("submit", stopAction);