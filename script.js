const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.mobile');
const closeBtn = document.querySelector('.menu-close');

menuBtn.addEventListener('click', function() {
    menu.classList.add('active')
})

closeBtn.addEventListener('click', function() {
    menu.classList.remove('active')
})