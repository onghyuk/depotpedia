
const wrapper = document.querySelector('.wrapper');


wrapper.onclick = function(event) {
    const target = event.target;

    if (target.className != 'button') return;
    
   
    target.firstElementChild.classList.toggle('active');
};
