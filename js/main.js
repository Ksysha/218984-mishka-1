var toggleButton = document.querySelector('.main-nav__toggle');
var mainLists = document.querySelector('.main-nav__lists');
var userLists = document.querySelector('.main-nav__user-lists');

toggleButton.addEventListener('click', function () {
  mainLists.classList.toggle('main-nav--closed');
  userLists.classList.toggle('main-nav--closed');
});
