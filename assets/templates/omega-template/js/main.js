'use strict';
$(document).ready(function () {
  var pageHeaderNav = document.getElementsByClassName('page-header__nav');
  var pageHeaderBurger = document.getElementsByClassName('page-header__burger-field');

  $(pageHeaderBurger).click(function() {
    $(pageHeaderNav).toggleClass('active');
  });
  /* валидатор для телефонов */
    var commonTelInput = document.getElementsByClassName('common-tel-input');
    commonTelInput = Array.prototype.slice.call(commonTelInput);

    commonTelInput.forEach(function(element, i) {
      $(element).inputmask("+9 (999) 999-9999"); //specifying options
    });
  /* /валидатор для телефонов */
  /*Плавный скролл*/
  $(function () {
    $('a[href^="#"]').on('click', function (event) {
      // отменяем стандартное действие
      event.preventDefault();

      var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
      /*
       * sc - в переменную заносим информацию о том, к какому блоку надо перейти
       * dn - определяем положение блока на странице
       */

      $('html, body').animate({
        scrollTop: dn
      }, 1000);

      /*
       * 1000 скорость перехода в миллисекундах
       */
    });
  });
  /* */
  /* карусель товаров */
  $(".product-card__list").owlCarousel({
    responsive:{
      0:{
          items:1,
          margin:10,
          loop:true,
          autoWidth:true,
          dots:false,
          nav: false
      },
      750: {
        items: 3,
        margin: 10,
        loop: true,
        dots: false,
        nav: false
      },
      991: {
        items: 4,
        margin: 10,
        loop: true,
        dots: false,
        nav: false
      }
    }
  });
  /* /карусель товаров */
  var popupProductCard = document.getElementsByClassName('overlay--product-card');
  var popupProductCardBackBtn = document.getElementsByClassName('popup-product-card__back-btn');

  $(popupProductCardBackBtn).click(function() {
    $(popupProductCard).fadeOut(300);
  });
  /* переключение типов в каталоге */
  var catalogueNavItem = document.getElementsByClassName('catalogue__nav-item');
  catalogueNavItem = Array.prototype.slice.call(catalogueNavItem);

  var productTypeItem = document.getElementsByClassName('product-type__item');
  productTypeItem = Array.prototype.slice.call(productTypeItem);

  catalogueNavItem.forEach(function(el, j) {
    $(el).click(function() {
      $(productTypeItem).hide();
      $(productTypeItem[j]).show();
      $(catalogueNavItem).removeClass('catalogue__nav-item--active');
      $(catalogueNavItem[j]).addClass('catalogue__nav-item--active');
    })
  });
  /* /переключение типов в каталоге */
  /* открытие формы для заявки из карточки товара */
  var popupProductCardGetPriceBtn = document.getElementsByClassName('popup-product-card__get-price-btn');
  var popupCardSubmit = document.getElementsByClassName('overlay--popup-card-submit');
  var popupCardSubmitCloseBtn = document.getElementsByClassName('popup-card-submit__close-btn');
  
  $(popupProductCardGetPriceBtn).click(function() {
    $(popupProductCard).fadeOut(300);
    setTimeout(function() {
      $(popupCardSubmit).fadeIn(300);
    }, 300);
  });

  $(popupCardSubmitCloseBtn).click(function() {
    $(popupCardSubmit).fadeOut(300);
  });
  /* /открытие формы для заявки из карточки товара */
  /* переключение в характеристиках в карточках товаров */
  var popupProductCardNavItem = document.getElementsByClassName('popup-product-card__nav-item');
  popupProductCardNavItem = Array.prototype.slice.call(popupProductCardNavItem);

  var popupProductCardCharItem = document.getElementsByClassName('popup-product-card__char-item');
  popupProductCardCharItem = Array.prototype.slice.call(popupProductCardCharItem);

  popupProductCardNavItem.forEach(function(element, i) {
    $(element).click(function() {
      $(popupProductCardCharItem).hide();
      $(popupProductCardCharItem[i]).show();
      $(popupProductCardNavItem).removeClass('popup-product-card__nav-item--active');
      $(popupProductCardNavItem[i]).addClass('popup-product-card__nav-item--active');
    });
  });
  /* /переключение в характеристиках в карточках товаров */
    /* карусель брендов */
    $(".brands__list").owlCarousel({
      nav: true,
      responsive:{
        0:{
            items:1,
            margin:10,
            loop:true,
            autoWidth:true,
            dots:false
        },
        750: {
          items: 3,
          margin: 10,
          loop: true,
          dots: false
        },
        1280: {
          items: 3,
          margin: 10,
          loop: true,
          dots: false
        }
      }
    });
    /* /карусель брендов */
    /*активация брендов*/
    var brandsLogo = document.getElementsByClassName('brands__logo');
    brandsLogo = Array.prototype.slice.call(brandsLogo);

    brandsLogo.forEach(function(element, i) {
      $(element).click(function() {
        $(brandsLogo).removeClass('brands__logo--active');
        $(element).addClass('brands__logo--active');
      });
    });
    /* /активация брендов */
    /* открытие попапа обратного звонка */
      var popupCallback = document.getElementById('popup-callback');
      var callbackBtn = document.getElementsByClassName('callback-btn');

      var popupCallbackCloseBtn = document.getElementsByClassName('popup-callback__close-btn');

      $(callbackBtn).click(function() {
        $(popupCallback).fadeIn('300');
      });

      $(popupCallbackCloseBtn).click(function() {
        $(popupCallback).fadeOut('300');
      });
    /* /открытие попапа обратного звонка */
    /* благодарственные письма */
    $('.grateful__item-item-link').fancybox();

    $(".grateful__list").owlCarousel({
      nav: false,
      responsive:{
        0:{
            items:1,
            margin:10,
            loop:true,
            autoWidth:true,
            dots:true
        },
        750: {
          items: 2,
          margin: 60,
          loop: true,
          dots: true
        },
        991: {
          items: 3,
          margin: 60,
          loop: true,
          dots: true
        },
        1280: {
          items: 3,
          margin: 80,
          loop: true,
          dots: true
        }
      }
    });
    /* /благодарственные письма */
    /* карусель отзывов */

    $(".feedback__list").owlCarousel({
      nav: true,
      items:1,
      loop:true,
      dots:true
    });
    /* /карусель отзывов */
    /* popup success */
  var popupSuccess = $('#popup-success');
  /* /popup success */

  /* popup-callback */
  var popupCallback = $('#popup-callback');

  var popupCallbackForm = $('#popup-callback-form');

  popupCallbackForm.submit(function (ev) {
    $.ajax({
      type: 'POST',
      url: '/assets/templates/omega-template/mail/mail-callback.php',
      data: popupCallbackForm.serialize(),
      success: function (data) {
        $(popupCallback).fadeOut(300);
        setTimeout(function () {
          $(popupSuccess).fadeIn(300);
        }, 300);
        $('form').trigger("reset");
      }
    });
    ev.preventDefault();
  });
  /* /popup-callback*/
  /* popup форма заказа из карточки товара */
  var popupCardSubmitForm = $('popup-card-submit-form');

  popupCardSubmitForm.submit(function (ev) {
    $.ajax({
      type: 'POST',
      url: '/assets/templates/omega-template/mail/mail-card-submit.php',
      data: popupCardSubmitForm.serialize(),
      success: function (data) {
        setTimeout(function () {
          $(popupSuccess).fadeIn(300);
        }, 300);
        $('form').trigger("reset");
      }
    });
    ev.preventDefault();
  });
  /* /popup форма заказа из карточки товара */
  /* форма Начать работу */
    var startForm = $('#start-form');

    startForm.submit(function (ev) {
      $.ajax({
        type: 'POST',
        url: '/assets/templates/omega-template/mail/mail-callback.php',
        data: startForm.serialize(),
        success: function (data) {
          setTimeout(function () {
            $(popupSuccess).fadeIn(300);
          }, 300);
          $('form').trigger("reset");
        }
      });
      ev.preventDefault();
    });
  /* /форма начать работу */
    /* инициализируем яндекс карту 
    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("ya-map", {
            center: [44.615834, 40.124941],
            zoom: 16
        }),
    
            // Создаем метку с помощью вспомогательного класса.
            myPlacemark1 = new ymaps.Placemark([44.615834, 40.124941], {
                // Свойства.
                // Содержимое иконки, балуна и хинта.
                iconContent: '',
                balloonContent: '',
                hintContent: 'СтройКомфорт'
            }, {
                // Опции.
                // Стандартная фиолетовая иконка.
                preset: 'twirl#violetIcon'
            });
    
        //myMap.controls.add('smallZoomControl');
        // Добавляем все метки на карту.
        myMap.geoObjects.add(myPlacemark1);
    }
     /инициализируем яндекс карту */
});