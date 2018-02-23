$(document).ready(function() {
  var drop = $('.dropdown');
  var product = $('.navLeft>ul>li:first-child>a');
  var buying = $('.navLeft>ul>li:nth-child(2)>a');
  var support = $('.navLeft>ul>li:last-child>a');


  $('.hidden1, .hidden2, .hidden3').hide(0);
  product.mouseenter(function() {
    $('.hidden1, .hidden2, .hidden3').hide(0);
    $('.hidden1').fadeIn(100, function() {
      $(this).mouseleave(function() {
        $('.hidden1').hide(0);
      })
    });
  });

  buying.mouseenter(function() {
    $('.hidden1, .hidden2, .hidden3').hide(0);
    $('.hidden2').fadeIn(100, function() {
      $(this).mouseleave(function() {
        $('.hidden2').hide(0);
      })
    });
  });

  support.mouseenter(function() {
    $('.hidden1, .hidden2, .hidden3').hide(0);
    $('.hidden3').fadeIn(100, function() {
      $(this).mouseleave(function() {
        $('.hidden3').hide(0);
      })
    });
  });


});
// function clearClass() {
//   drop.mouseleave(function() {
//     drop.removeClass('hidden').addClass('nodisp');
//   });
// }
//
// product.mouseenter(function() {
//   drop.removeClass('nodisp').addClass('hidden1');
// });
// clearClass();
//
// buying.mouseenter(function() {
//   drop.removeClass('nodisp').addClass('hidden2');
// });
// clearClass();
//
// support.mouseenter(function() {
//   drop.removeClass('nodisp').addClass('hidden3');
// });
// clearClass();
