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


// показ формы добавления в корзину на странице index.html

var linkOrderPromoGoods = document.querySelector('.promo-goods__order');
var additionFormPromoGoods = document.querySelector(".promo-goods__form");
var additionFormOverlay = document.querySelector(".promo-goods__modal");

if(linkOrderPromoGoods && additionFormOverlay && additionFormOverlay) {
  linkOrderPromoGoods.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(additionFormOverlay);
    additionFormPromoGoods.classList.add("modal-show");
    additionFormOverlay.classList.add("modal-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (additionFormPromoGoods.classList.contains("modal-show")) {
        additionFormPromoGoods.classList.remove("modal-show");
        additionFormOverlay.classList.remove("modal-show");
        additionFormPromoGoods.offsetWidth = additionFormPromoGoods.offsetWidth;
      }
    }
  });
}

// показ формы добавления в корзину на странице catalog.html

var linkBuyProduct = document.querySelectorAll('.product__buy');
var additionFormCatalog = document.querySelector(".catalog__form");
var catalogAdditionFormOverlay = document.querySelector(".catalog__modal");

if(linkBuyProduct) {
  for (var i = linkBuyProduct.length - 1; i >= 0; i--) {
    linkBuyProduct[i].addEventListener("click", function(event) {
      event.preventDefault();

      additionFormCatalog.classList.add("modal-show");
      catalogAdditionFormOverlay.classList.add("modal-show");
    });
  }

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (additionFormCatalog.classList.contains("modal-show")) {
        additionFormCatalog.classList.remove("modal-show");
        catalogAdditionFormOverlay.classList.remove("modal-show");
        additionFormCatalog.offsetWidth = additionFormCatalog.offsetWidth;
      }
    }
  });
}


//автозаполнение формы
var orderForm = document.querySelector(".order-form");

if(orderForm) {
  var storageEmail = localStorage.getItem("user-email");
  var storageName = localStorage.getItem("user-name");
  var storageSurname = localStorage.getItem("user-surname");
  var storagePatronymic = localStorage.getItem("user-patronymic");

  var userName = orderForm.querySelector("[name=user-name]");
  var userSurname = orderForm.querySelector("[name=user-surname]");
  var userPatronymic = orderForm.querySelector("[name=user-patronymic]");
  var userEmail = orderForm.querySelector("[name=user-email]");

  orderForm.addEventListener("submit", function(event) {
    console.log(localStorage);
    console.log(userEmail.value);
    localStorage.setItem("user-email", userEmail.value);
    localStorage.setItem("user-name", userName.value);
    localStorage.setItem("user-surname", userSurname.value);
    localStorage.setItem("user-patronymic", userPatronymic.value);
  });


  if (storageEmail) {
    userEmail.value = storageEmail;
  }

  if (storageName) {
    userName.value = storageName;
  }

  if (storageSurname) {
    userSurname.value = storageSurname;
  }

  if (storagePatronymic) {
    userPatronymic.value = storagePatronymic;
  }
}
