'use strict';

const menuBtn = document.querySelector('.nav__burger');
const menu = document.querySelector('.burger__menu');
const lineTop = document.querySelector('#line--1');
const lineBottom = document.querySelector('#line--3');
const bar = document.querySelector('#line--2');
//menu
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  lineTop.classList.toggle('active__line--1');
  lineBottom.classList.toggle('active__line--3');
  bar.classList.toggle('active__line--2');
});
