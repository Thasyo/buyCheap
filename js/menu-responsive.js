const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-bar");

menu.addEventListener("click", () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})