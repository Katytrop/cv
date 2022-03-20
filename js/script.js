// меню гамбургер
const ham = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');

ham.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

// полоска скиллов
const counters = document.querySelectorAll('.skills__rating_counter');
const lines = document.querySelectorAll('.skills__rating_line span');

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
})
