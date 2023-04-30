import dayjs from "dayjs";
import { entries } from "./data/post.mjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
await import("dayjs/locale/es-us.js")

dayjs.locale("es-us");
dayjs.extend(relativeTime);

function humanizeDate(date) {
    const wrappedDate = dayjs(date);
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));

    const isCurrentYear = wrappedDate.year() === new Date().getFullYear();

    if (!isCurrentYear) {
        return wrappedDate.format("MMMM DD, YYYY");
    }else if (daysDiff <= 30){
        return wrappedDate.fromNow();
    }else{
        return wrappedDate.format("MMMM DD");
    }
}

//Llenar Posts
const postsContainer = document.querySelector('#posts');

entries.forEach((entry) => {

    const {titulo, descripcion, fecha} =entry;

    const post = document.createElement('article');
    post.classList.add('post1');
    post.innerHTML = `
        <div class="post-image">
            <img class="image" alt="imagen" src="https://source.unsplash.com/uppjafUWPj8">
        </div>
        <div class="post-principal">
            <div class="post-readtime">
                <p>HTLM</p>
                <span>${humanizeDate(fecha)}</span>
            </div>
            <div class="post-info">
                <h3>${titulo}</h3>
                <p>${descripcion}</p>
            </div>
            <div class="post-button">
                <button>Ver mas</button>
            </div>
        </div>
    `;

    postsContainer.appendChild(post);
});