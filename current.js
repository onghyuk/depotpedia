
const currentDepot = document.querySelector('.currentDepot');


currentDepot.onclick = function(event) {
    const target = event.target;

    if (target.className != 'underline') return;
        const parent = target.parentElement;

        parent.lastElementChild.classList.toggle('show');
    
    
};