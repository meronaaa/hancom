$(document).ready(function() {

  $('.sns-article-box2, .sns-article-box3').hide();

  $('.on1').mouseenter(function() {
    $('.sns-article-box1').show(0, function() {
      $('.sns-article-box2, .sns-article-box3').hide();
    });
  })
  $('.on2').mouseenter(function() {
    $('.sns-article-box2').show(0, function() {
      $('.sns-article-box1, .sns-article-box3').hide();
    });
  })

  $('.on3').mouseenter(function() {
    $('.sns-article-box3').show(0, function() {
      $('.sns-article-box1, .sns-article-box2').hide();
    });
  })
});
