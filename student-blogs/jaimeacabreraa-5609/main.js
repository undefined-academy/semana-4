import "./styles/main.scss";
import { data } from "./data/blogs";
import { humanizarFecha } from "./scripts/humanizar-fecha";

import _ from "lodash";

const blogs = _.orderBy(data, ["date"], ["desc"]);

document.querySelector("#app").innerHTML = `
<nav class="navbar navbar-expand-lg bg-body-tertiary mb-4">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">💻 BlogDev</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>
<div class="container mb-5">
    <h1>💻 Blog Dev</h1>
    <p>
    Welcome to our HTML, CSS, and JS blog! Here you will find valuable information about the latest trends in web design and development, as well as practical tutorials and useful tips to improve your skills in these languages. HTML, CSS, and JS are fundamental tools in the world of web development, and that is why we are committed to providing you with relevant and up-to-date content. Whether you are just starting out or you are an expert, our goal is to help you learn, grow, and improve your skills. Join our community and discover everything we have to offer!
    </p>
</div>

<div class="container">
    <h1>Blogs</h1>
    <div class="row justify-content-around">
    ${blogs
      .map((blog) => {
        const cardTemplate = `
        <div id="blog${blog.id}" class="card p-2 mb-4" style="width: 18rem;">
          <img src="${blog.image_url}" class="card-img-top" alt="image_log_${
          blog.id
        }" width="100px">
          <div class="card-body">
            <h5 class="card-title">${blog.title}</h5>
            <p class="card-text">${blog.description}</p>
            <p class="card-text"><small class="text-muted">${
              blog.author
            } - ${humanizarFecha(blog.date)}</small></p>
            <div class="tags">
              ${blog.tags
                .map(
                  (tag) =>
                    `<a href="#" class="badge rounded-pill text-bg-primary">${tag}</a>`
                )
                .join("")}
            </div>
          </div>
        </div>`;

        return cardTemplate;
      })
      .join("")}    
    </div>
</div>


<footer class="bg-dark text-light py-3">
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <p>Información de contacto:</p>
      <ul>
        <li><a href="#">Correo electrónico</a></li>
        <li><a href="#">Teléfono</a></li>
        <li><a href="#">Dirección</a></li>
      </ul>
    </div>
    <div class="col-md-6">
      <p>Enlaces útiles:</p>
      <ul>
        <li><a href="#">Acerca de nosotros</a></li>
        <li><a href="#">Preguntas frecuentes</a></li>
        <li><a href="#">Política de privacidad</a></li>
      </ul>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12 text-center">
      <p>Derechos de autor © 2023 - BlogDev</p>
    </div>
  </div>
</div>
</footer>
`;
