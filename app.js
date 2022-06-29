const bt1 = document.querySelector("#bt1");
const bt2 = document.querySelector("#bt2");

const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");



active = () => {
    img1.classList.toggle("active");
}

active2 = () => {
    img2.classList.toggle("active");
}

bt1.addEventListener("click", active);
bt2.addEventListener("click", active2);
