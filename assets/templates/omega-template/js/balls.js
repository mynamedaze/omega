'use strict';
$(document).ready(function () {
  /* анимация мяча */
  var ballLayersBallWrapper = document.getElementsByClassName('ball-layers__ball-wrapper');

  var ballLayersLayerItem = document.getElementsByClassName('ball-layers__layer-item');
  ballLayersLayerItem = Array.prototype.slice.call(ballLayersLayerItem);

  var ballLayersLayerList = document.getElementsByClassName('ball-layers__layer-list');

  var ballLayersPlusList = document.getElementsByClassName('ball-layers__plus-list');

  setTimeout(function () {
    $(ballLayersBallWrapper).fadeIn(500);
    setTimeout(function () {
      $(ballLayersLayerList).addClass('ball-layers__layer-list--active');
    }, 700);
    setTimeout(function () {
      $(ballLayersPlusList).fadeIn(300);
    }, 2000);
  }, 1000);
  /* */

  /* переключение слоев мяча при нажатии на цифру с полоской слева и стрелкой справа */
  var ballLayersNextBtn = document.getElementsByClassName('ball-layers__next-btn');
  ballLayersNextBtn = Array.prototype.slice.call(ballLayersNextBtn);

  var ballLayersNextItem = document.getElementsByClassName('ball-layers__next-item');
  ballLayersNextItem = Array.prototype.slice.call(ballLayersNextItem);

  ballLayersNextBtn.forEach(function (elem, i) {
    $(elem).click(function () {
      if (i < ballLayersNextBtn.length - 1) {
        $(ballLayersNextItem[i]).fadeOut(300);
        setTimeout(function () {
          $(ballLayersNextItem[i + 1]).fadeIn(300);
        }, 300);
      } else {
        $(ballLayersNextItem[i]).fadeOut(300);
        setTimeout(function () {
          $(ballLayersNextItem[0]).fadeIn(300);
        }, 300);
      }
    });
  });
  /* /переключение слоев мяча при нажатии на цифру с полоской слева и стрелкой справа */

  /* связывание надписей на мяче со стрелкой */
  var ballLayersPlusLabel = document.getElementsByClassName('ball-layers__plus-label');
  ballLayersPlusLabel = Array.prototype.slice.call(ballLayersPlusLabel);

  ballLayersPlusLabel.forEach(function (e, j) {
    $(e).click(function () {
      $(ballLayersNextItem).fadeOut(300);
      setTimeout(function () {
        $(ballLayersNextItem[j]).fadeIn(300);
      }, 300);
    });
  });
  /* /связывание надписей на мяче со стрелкой */
  /* открываем квиз по мячам */
  var ballQuiz = $('#ball-quiz');
  var ballQuizClosebtn = $('#ball-quiz .quiz__close-btn');

  $(ballQuizClosebtn).click(function () {
    $(ballQuiz).fadeOut(300);
  });

  var ballQuizChooseBtn = $('.ball-quiz__choose-btn');
  $(ballQuizChooseBtn).click(function () {
    $(ballQuiz).fadeIn(300);
  });
  /* /открываем квиз по мячам */
  /* stage1 */
  var stage1 = $('#ball-quiz .qstage--1');
  var stage1Radio = $('#ball-quiz .qstage--1 .qstage__radio');
  var stage1NextBtn = $('#ball-quiz .qstage--1 .qstage__nav--next');

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
  var stage2 = $('#ball-quiz .qstage--2');
  var stage2Radio = $('#ball-quiz .qstage--2 .qstage__radio');
  var stage2NextBtn = $('#ball-quiz .qstage--2 .qstage__nav--next');
  var stage2PrevBtn = $('#ball-quiz .qstage--2 .qstage__nav--prev');

  var stage2Buffer;

  $(stage2Radio).click(function () {
    stage2Buffer = $(this).val();
    console.log(stage2Buffer);
  });

  $(stage2NextBtn).click(function () {
    if (stage2Buffer) {
      $(stage2).fadeOut(300);
      setTimeout(function () {
        $(qSubmit).fadeIn(300);
        $(qSubmitAnswers).val('Страница: мячи' + '\nНазначение мяча: ' + stage1Buffer + '\nПоверхность использования: ' + stage2Buffer);
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
  /* qsubmit */
  var qSubmit = $('#ball-quiz .qsubmit');
  var qSubmitAnswers = $('#ball-quiz .qsubmit__input--answers');

  var qSubmitFormBall = $('#qsubmit-form-ball');

  qSubmitFormBall.submit(function (ev) {
    $.ajax({
      type: 'POST',
      url: '/assets/templates/omega-template/mail/mail-quiz.php',
      data: qSubmitFormBall.serialize(),
      success: function (data) {
        $(qSubmit).fadeOut(300);
        setTimeout(function () {
          $(qSuccess).fadeIn(300);
        }, 300);
      }
    });
    ev.preventDefault();
  });
  /* /qsubmit */

  /* qsuccess */
  var qSuccess = $('#ball-quiz .qsuccess');
  /* /qsuccess */
});