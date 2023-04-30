import { entries } from "./data/post.mjs";
import { humanizeDate } from "./helpers/index.js";

//Llenar Posts
const postsContainer = document.querySelector('#posts');
document.querySelector

function tagsIterations(tagsArray) {
    return tagsArray.map(tag => `<p>${tag}</p>`).join('');
}

entries.forEach((entry) => {

    const tags = tagsIterations(entry.tags);
    const {titulo, descripcion, fecha} =entry;

    const post = document.createElement('article');
    post.classList.add('post1');
    post.innerHTML = `
        <div class="post-image">
            <img class="image" alt="imagen" src="https://source.unsplash.com/uppjafUWPj8">
        </div>
        <div class="post-principal">
            <div class="post-readtime">
                <span>${humanizeDate(fecha)}</span>
            </div>
            <div class="post-info">
                <h3>${titulo}</h3>
                <p>${descripcion}</p>
            </div>
            <div class="post-tags">
                ${tags}
            </div>
            <div class="post-button">
                <button>Ver mas</button>
            </div>
        </div>
    `;

    postsContainer.appendChild(post);
});