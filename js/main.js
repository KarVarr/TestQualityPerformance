'use strict';

const menuBtn = document.querySelector('.nav__burger');
const menu = document.querySelector('.burger__menu');
const lineTop = document.querySelector('#line--1');
const lineBottom = document.querySelector('#line--3');
const bar = document.querySelector('#line--2');

const slides = document.querySelectorAll('.slide');
const btnPrev = document.querySelector('.header__arrow--left');
const btnNext = document.querySelector('.header__arrow--right ');

//slider
let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = slide => {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

goToSlide(0);
const nextSlide = () => {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = () => {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

//menu
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  lineTop.classList.toggle('active__line--1');
  lineBottom.classList.toggle('active__line--3');
  bar.classList.toggle('active__line--2');
});
