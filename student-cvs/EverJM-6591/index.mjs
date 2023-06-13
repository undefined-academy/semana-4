

function scrollHeader(){
    let scrollPosition = document.documentElement.scrollTop;
    document.querySelector("header").style.boxShadow = (scrollPosition >= 100) ? "var(--color-box-shadow) 0px 7px 31px 0px" : "var(--color-none) 0"; 
}

window.addEventListener('scroll', scrollHeader);