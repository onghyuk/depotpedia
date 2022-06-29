const bt1 = document.querySelector("#bt1");
const bt2 = document.querySelector("#bt2");
const bt3 = document.querySelector("#bt3");
const bt4 = document.querySelector("#bt4");


const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");




active = () => {
    img1.classList.toggle("active");
}

active2 = () => {
    img2.classList.toggle("active");
}

active3 = () => {
    img3.classList.toggle("active");
}

active4 = () => {
    img4.classList.toggle("active");
}

bt1.addEventListener("click", active);
bt2.addEventListener("click", active2);
bt3.addEventListener("click", active3);
bt4.addEventListener("click", active4);


