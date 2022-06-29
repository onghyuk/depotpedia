const potato = document.querySelector(".button");
const img = document.querySelector("#img1");


active = () => {
    img.classList.toggle("active");
}


potato.addEventListener("click", active);