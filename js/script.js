// меню гамбургер
const ham = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
const menuBlock = document.querySelectorAll('.menu__block');

ham.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

menu.addEventListener("click",function(e) {

  if((e.target) && (e.target.nodeName == "LI" || e.target.nodeName == "A")){
      this.classList.remove('active');
  }
});

// полоска скиллов
const counters = document.querySelectorAll('.skills__rating_counter');
const lines = document.querySelectorAll('.skills__rating_line span');

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
})

// кнопка вверх

const btnUp = document.querySelector('.pageup');

function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      btnUp.classList.add('pageup_show');
    }
    if (scrolled < coords) {
      btnUp.classList.remove('pageup_show');
    }
}
function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
}

window.addEventListener ('scroll', trackScroll);
btnUp.addEventListener ('click', backToTop);

// плавеый скролл

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
