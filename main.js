$('.slider').slick();    
let btn=document.querySelector('.mobile-menu');
let active=document.querySelector('.nav');
function toggleClass() {
    active.classList.toggle('active');
}   
btn.addEventListener('click' , toggleClass);