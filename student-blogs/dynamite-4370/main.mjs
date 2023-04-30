import dayjs from "dayjs";
import { entries } from "./data/post.mjs";


const postsContainer = document.querySelector('#posts');

entries.forEach((entry) => {
    const post = document.createElement('article');
    post.classList.add('post1');
    post.innerHTML = `
        <div class="post-image">
            <img class="image" alt="imagen" src="https://source.unsplash.com/uppjafUWPj8">
        </div>
        <div class="post-principal">
            <div class="post-readtime">
                <p>HTLM</p>
                <span>5min Read</span>
            </div>
            <div class="post-info">
                <h3>${entry.titulo}</h3>
                <p>${entry.descripcion}</p>
            </div>
            <div class="post-button">
                <button>Ver mas</button>
            </div>
        </div>
    `;

    postsContainer.appendChild(post);
});