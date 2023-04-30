import { entries } from "./data/post.mjs";
import { humanizeDate } from "./helpers/index.js";

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