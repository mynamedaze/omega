'use strict';
$(document).ready(function () {
  /* открываем квиз по защите */
  var quizHockeyShield = $('#quiz-hockey-shield');
  var quizHockeyShieldClosebtn = $('#quiz-hockey-shield .quiz__close-btn');

  $(quizHockeyShieldClosebtn).click(function () {
    $(quizHockeyShield).fadeOut(300);
  });

  var quizHockeyShieldChooseBtn = $('.hockey-quiz__choose-btn--shield');
  $(quizHockeyShieldChooseBtn).click(function () {
    $(quizHockeyShield).fadeIn(300);
  });
  /* /открываем квиз по защите */
  /* открываем квиз по клюшкам */
    var quizHockeyKlushka = $('#quiz-hockey-klushka');
    var quizHockeyKlushkaClosebtn = $('#quiz-hockey-klushka .quiz__close-btn');
  
    $(quizHockeyKlushkaClosebtn).click(function () {
      $(quizHockeyKlushka).fadeOut(300);
    });
  
    var quizHockeyKlushkaChooseBtn = $('.hockey-quiz__choose-btn--klushka');
    $(quizHockeyKlushkaChooseBtn).click(function () {
      $(quizHockeyKlushka).fadeIn(300);
    });
  /* /открываем квиз по клюшкам */
  /** отрабатываем квиз по защите **/
  /* stage1 */
  var stage1 = $('#quiz-hockey-shield .qstage--1');
  var stage1Radio = $('#quiz-hockey-shield .qstage--1 .qstage__radio');
  var stage1NextBtn = $('#quiz-hockey-shield .qstage--1 .qstage__nav--next');

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
  var stage2 = $('#quiz-hockey-shield .qstage--2');
  var stage2Radio = $('#quiz-hockey-shield .qstage--2 .qstage__radio');
  var stage2NextBtn = $('#quiz-hockey-shield .qstage--2 .qstage__nav--next');
  var stage2PrevBtn = $('#quiz-hockey-shield .qstage--2 .qstage__nav--prev');

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
  var stage3 = $('#quiz-hockey-shield .qstage--3');
  var stage3Radio = $('#quiz-hockey-shield .qstage--3 .qstage__radio');
  var stage3NextBtn = $('#quiz-hockey-shield .qstage--3 .qstage__nav--next');
  var stage3PrevBtn = $('#quiz-hockey-shield .qstage--3 .qstage__nav--prev');

  var stage3Buffer;

  $(stage3Radio).click(function () {
    stage3Buffer = $(this).val();
    console.log(stage3Buffer);
  });

  $(stage3NextBtn).click(function () {
    if (stage3Buffer) {
      $(stage3).fadeOut(300);
      setTimeout(function () {
        $(qSubmitShield).fadeIn(300);
        $(qSubmitShieldAnswers).val('Страница: Хоккей - защита' + '\nТип формы: ' + stage1Buffer + '\nУровень защиты: ' + stage2Buffer + '\nДиапазон размеров: ' + stage3Buffer);
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
  var qSubmitShield = $('#quiz-hockey-shield .qsubmit');
  var qSubmitShieldAnswers = $('#quiz-hockey-shield .qsubmit__input--answers');

  var qSubmitShieldForm = $('#qsubmit-shield-form');

  qSubmitShieldForm.submit(function (ev) {
    $.ajax({
      type: 'POST',
      url: '/assets/templates/omega-template/mail/mail-quiz.php',
      data: qSubmitShieldForm.serialize(),
      success: function (data) {
        $(qSubmitShield).fadeOut(300);
        setTimeout(function () {
          $(qSuccess).fadeIn(300);
        }, 300);
      }
    });
    ev.preventDefault();
  });
  /* /qsubmitShield */
  /** /отрабатываем квиз по защите **/
  /* --------------------------- */
  /** отрабатываем квиз по клюшкам **/
  /* stage1 */
  var stage1K = $('#quiz-hockey-klushka .qstage--1');
  var stage1KRadio = $('#quiz-hockey-klushka .qstage--1 .qstage__radio');
  var stage1KNextBtn = $('#quiz-hockey-klushka .qstage--1 .qstage__nav--next');

  var stage1KBuffer;

  $(stage1KRadio).click(function () {
    stage1KBuffer = $(this).val();
    console.log(stage1KBuffer);
  });

  $(stage1KNextBtn).click(function () {
    if (stage1KBuffer) {
      $(stage1K).fadeOut(300);
      setTimeout(function () {
        $(stage2K).fadeIn(300);
      }, 300);
    }
  });
  /* /stage1 */
  /* stage2 */
  var stage2K = $('#quiz-hockey-klushka .qstage--2');
  var stage2KRadio = $('#quiz-hockey-klushka .qstage--2 .qstage__radio');
  var stage2KNextBtn = $('#quiz-hockey-klushka .qstage--2 .qstage__nav--next');
  var stage2KPrevBtn = $('#quiz-hockey-klushka .qstage--2 .qstage__nav--prev');

  var stage2KBuffer;

  $(stage2KRadio).click(function () {
    stage2KBuffer = $(this).val();
    console.log(stage2KBuffer);
  });

  $(stage2KNextBtn).click(function () {
    if (stage2KBuffer) {
      $(stage2K).fadeOut(300);
      setTimeout(function () {
        $(stage3K).fadeIn(300);
      }, 300);
    }
  });

  $(stage2KPrevBtn).click(function () {
    $(stage2K).fadeOut(300);
    setTimeout(function () {
      $(stage1K).fadeIn(300);
    }, 300);
  });
  /* /stage2 */
  /* stage3 */
  var stage3K = $('#quiz-hockey-klushka .qstage--3');
  var stage3KRadio = $('#quiz-hockey-klushka .qstage--3 .qstage__radio');
  var stage3KNextBtn = $('#quiz-hockey-klushka .qstage--3 .qstage__nav--next');
  var stage3KPrevBtn = $('#quiz-hockey-klushka .qstage--3 .qstage__nav--prev');

  var stage3KBuffer;

  $(stage3KRadio).click(function () {
    stage3KBuffer = $(this).val();
    console.log(stage3KBuffer);
  });

  $(stage3KNextBtn).click(function () {
    if (stage3KBuffer) {
      $(stage3K).fadeOut(300);
      setTimeout(function () {
        $(qSubmitKlushka).fadeIn(300);
        $(qSubmitKlushkaAnswers).val('Страница: Хоккей - клюшки' + '\nКакие клюшки нужны: ' + stage1KBuffer + '\nКакая линейка необходима: ' + stage2KBuffer + '\nЖесткость клюшки: ' + stage3KBuffer);
      }, 300);
    }
  });

  $(stage3KPrevBtn).click(function () {
    $(stage3K).fadeOut(300);
    setTimeout(function () {
      $(stage2K).fadeIn(300);
    }, 300);
  });
  /* /stage3 */
  /* qsubmitKlushka */
  var qSubmitKlushka = $('#quiz-hockey-klushka .qsubmit');
  var qSubmitKlushkaAnswers = $('#quiz-hockey-klushka .qsubmit__input--answers');

  var qSubmitKlushkaForm = $('#qsubmit-klushka-form');

  qSubmitKlushkaForm.submit(function (ev) {
    $.ajax({
      type: 'POST',
      url: '/assets/templates/omega-template/mail/mail-quiz.php',
      data: qSubmitKlushkaForm.serialize(),
      success: function (data) {
        $(qSubmitKlushka).fadeOut(300);
        setTimeout(function () {
          $(qSuccess).fadeIn(300);
        }, 300);
      }
    });
    ev.preventDefault();
  });
  /* /qsubmitKlushka */
  /** /отрабатываем квиз по клюшкам **/
  /* qsuccess */
  var qSuccess = $('#quiz-hockey-klushka .qsuccess');
  /* /qsuccess */
});