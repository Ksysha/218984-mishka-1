var toggleButton = document.querySelector('.main-nav__toggle');
var mainLists = document.querySelector('.main-nav__lists');
var userLists = document.querySelector('.main-nav__user-lists');
var mainNav = document.querySelector('.main-nav');

mainNav.classList.remove('main-nav--nojs');
mainNav.classList.add('main-nav--closed');
mainLists.classList.add('main-nav__lists--closed');
userLists.classList.add('main-nav__user-lists--closed');

toggleButton.addEventListener('click', function () {
  mainLists.classList.toggle('main-nav__lists--closed');
  userLists.classList.toggle('main-nav__user-lists--closed');

  mainNav.classList.toggle('main-nav--closed');
  mainNav.classList.toggle('main-nav--opened');
});
