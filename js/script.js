// menu hamburger
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

  if((e.target) && (e.target.nodeName == "LI" || e.target.nodeName == "A" || e.target.classList.contains('menu__overlay'))) {
      this.classList.remove('active');
  }
});

// skills counts
const counters = document.querySelectorAll('.skills__rating_counter');
const lines = document.querySelectorAll('.skills__rating_line span');

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
})

// button up

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

// scroll

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
// thanks for message 
const thanks = document.querySelector('.thanks');
const btnContacts = document.querySelector('.btn_contacts');
const btnThanks = document.querySelector('.btn_thanks');

const thanksHidden = () => {
  thanks.classList.remove('hidden');
}
const thanksClose = (e) => {
  if  (e.target.classList.contains('btn_thanks')) {
    thanks.classList.add('hidden');
  } 
}
btnThanks.addEventListener('click', thanksClose);

// mask
let inputTel = document.querySelector('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputTel);
