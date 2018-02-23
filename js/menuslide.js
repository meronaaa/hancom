$(document).ready(function() {
  $(".imgbox-area").diyslider({
    width: "1180px", // width of the slider
    height: "379px", // height of the slider
    display: 3, // number of slides you want it to display at once
    loop: true // disable looping on slides
  });

  // use buttons to change slide
  $("#go-left").bind("click", function() {
    // Go to the previous slide
    $(".imgbox-area").diyslider("move", "back");
  });
  $("#go-right").bind("click", function() {
    // Go to the previous slide
    $(".imgbox-area").diyslider("move", "forth");
    });
});
