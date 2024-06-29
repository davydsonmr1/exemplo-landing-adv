const mobileBtn = document.querySelector(".mobile-btn");
const closeBtn = document.querySelector(".close-menu");
const formBtn = document.querySelector(".form-btn");
const inputName = document.querySelector("#inputName");
const inputEmail = document.querySelector("#inputEmail");
const inputTel = document.querySelector("#inputTel");
const textArea = document.querySelector("#textArea");

// Funções

function toggleMenuMobile() {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
}

function closeMenu() {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
}

function Submit() {
    formBtn.preventDefault();
    inputName.innerText = "";
    inputEmail.innerText = "";
    inputTel.innerText = "";
    textArea.innerText = "";
}

// Eventos

mobileBtn.addEventListener("click", toggleMenuMobile);
closeBtn.addEventListener("click", closeMenu);
formBtn.addEventListener("click", Submit);