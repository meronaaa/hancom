$(document).ready(function() {
  fadeUp3();
  fadeUp2();
  fadeUp1();
  setInterval(fadeimg, 2000);
});

var showImg, nextImg;

function fadeimg() {
  showImg = $('.sliderwrap div:eq(0)');
  nextImg = $('.sliderwrap div:eq(1)');

  nextImg.addClass('photo_on');

  nextImg.css('opacity', '0').animate({
    opacity: '1'
  }, 500, function() {
    $('.sliderwrap').append(showImg);
    showImg.removeClass('photo_on');

  })
}

function fadeUp2() {
  $('.innerContents-img2').css({
    'padding-top': '110px'
  }).css({
    'opacity': '0'
  });
  $('.innerContents-text2').css({
    'opacity': '0'
  });
  $('.innerContents2-span').css({
    'opacity': '0'
  });
  $('.innerContents2-p').css({
    'opacity': '0'
  });
  $('.innerContents-img2').animate({
    'padding-top': '40px',
    opacity: '1'
  }, 'slow');
  $('.innerContents2-span').delay(400).animate({
    'opacity': '1'
  });
  $('.innerContents2-p').delay(800).animate({
    'opacity': '1'
  });
  $('.innerContents-text2').delay(1100).animate({
    'opacity': '1'
  });
}

function fadeUp3() {
  $('.innerContents-img').css({
    'padding-top': '110px'
  }).css({
    'opacity': '0'
  });
  $('.innerContents-text').css({
    'opacity': '0'
  });
  $('.innerContents-img').animate({
    'padding-top': '70px',
    opacity: '1'
  }, 'slow');
  $('.innerContents-text').delay(400).animate({
    'opacity': '1'
  });
}

function fadeUp1() {
  $('.innerContents-img3').css({
    'padding-top': '150px'
  }).css({
    'opacity': '0'
  });
  $('.innerContents-text3').css({
    'opacity': '0'
  });
  $('.innerContents3-p').css({
    'opacity': '0'
  });
  $('.innerContents-img3').animate({
    'padding-top': '100px',
    opacity: '1'
  }, 'slow');

  $('.innerContents3-p').delay(400).animate({
    'opacity': '1'
  });
  $('.innerContents-text3').delay(800).animate({
    'opacity': '1'
  });
}
