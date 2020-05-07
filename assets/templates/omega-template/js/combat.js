'use strict';
$(document).ready(function () {
  /* карусель федераций */
  $(".federations__list").owlCarousel({
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
  /* /карусель федераций */
  /*активация федераций*/
  var federationsLogo = document.getElementsByClassName('federations__logo');
  federationsLogo = Array.prototype.slice.call(federationsLogo);

  federationsLogo.forEach(function(element, i) {
    $(element).click(function() {
      $(federationsLogo).removeClass('federations__logo--active');
      $(element).addClass('federations__logo--active');
    });
  });
  /* /активация федераций */
  /* открываем квиз по единоборствам */
  var combatQuiz = $('#combat-quiz');
  var combatQuizClosebtn = $('#combat-quiz .quiz__close-btn');

  $(combatQuizClosebtn).click(function () {
    $(combatQuiz).fadeOut(300);
  });

  var combatQuizChooseBtn = $('.combat-quiz__choose-btn');
  $(combatQuizChooseBtn).click(function () {
    $(combatQuiz).fadeIn(300);
  });
  /* /открываем квиз по единоборствам */
  /* stage1 */
  var stage1 = $('#combat-quiz .qstage--1');
  var stage1Radio = $('#combat-quiz .qstage--1 .qstage__radio');
  var stage1NextBtn = $('#combat-quiz .qstage--1 .qstage__nav--next');

  var stage1Buffer;

  $(stage1Radio).click(function () {
    stage1Buffer = $(this).val();
    console.log(stage1Buffer);
  });

  $(stage1NextBtn).click(function () {
    if (stage1Buffer) {
      $(stage1).fadeOut(300);
      setTimeout(function () {
        $(stage2).fadeIn(300);
      }, 300);
    }
  });
  /* /stage1 */
  /* stage2 */
  var stage2 = $('#combat-quiz .qstage--2');
  var stage2Radio = $('#combat-quiz .qstage--2 .qstage__radio');
  var stage2NextBtn = $('#combat-quiz .qstage--2 .qstage__nav--next');
  var stage2PrevBtn = $('#combat-quiz .qstage--2 .qstage__nav--prev');

  var stage2Buffer;

  $(stage2Radio).click(function () {
    stage2Buffer = $(this).val();
    console.log(stage2Buffer);
  });

  $(stage2NextBtn).click(function () {
    if (stage2Buffer) {
      $(stage2).fadeOut(300);
      setTimeout(function () {
        $(stage3).fadeIn(300);
      }, 300);
    }
  });

  $(stage2PrevBtn).click(function () {
    $(stage2).fadeOut(300);
    setTimeout(function () {
      $(stage1).fadeIn(300);
    }, 300);
  });
  /* /stage2 */
  /* stage3 */
  var stage3 = $('#combat-quiz .qstage--3');
  var stage3Radio = $('#combat-quiz .qstage--3 .qstage__radio');
  var stage3NextBtn = $('#combat-quiz .qstage--3 .qstage__nav--next');
  var stage3PrevBtn = $('#combat-quiz .qstage--3 .qstage__nav--prev');

  var stage3Buffer;

  $(stage3Radio).click(function () {
    stage3Buffer = $(this).val();
    console.log(stage3Buffer);
  });

  $(stage3NextBtn).click(function () {
    if (stage3Buffer) {
      $(stage3).fadeOut(300);
      setTimeout(function () {
        $(qSubmit).fadeIn(300);
        $(qSubmitAnswers).val('Страница: Хоккей - защита' + '\nТип формы: ' + stage1Buffer + '\nУровень защиты: ' + stage2Buffer + '\nДиапазон размеров: ' + stage3Buffer);
      }, 300);
    }
  });

  $(stage3PrevBtn).click(function () {
    $(stage3).fadeOut(300);
    setTimeout(function () {
      $(stage2).fadeIn(300);
    }, 300);
  });
  /* /stage3 */
  /* qsubmitShield */
  var qSubmit = $('#combat-quiz .qsubmit');
  var qSubmitAnswers = $('#combat-quiz .qsubmit__input--answers');

  var qSubmitForm = $('#qsubmit-form');

  qSubmitForm.submit(function (ev) {
    $.ajax({
      type: 'POST',
      url: '/assets/templates/omega-template/mail/mail-quiz.php',
      data: qSubmitForm.serialize(),
      success: function (data) {
        $(qSubmit).fadeOut(300);
        setTimeout(function () {
          $(qSuccess).fadeIn(300);
        }, 300);
      }
    });
    ev.preventDefault();
  });
  /* /qsubmitShield */
  /* qsuccess */
  var qSuccess = $('#combat-quiz .qsuccess');
  /* /qsuccess */
});

