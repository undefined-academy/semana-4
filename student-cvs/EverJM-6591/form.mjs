const form = document.querySelector(".form");

form.addEventListener("submit",handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); 
    alert("Estamos trabajando en algunas funcionaes :)");
}