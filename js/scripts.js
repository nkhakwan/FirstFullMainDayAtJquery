$(document).ready(function(){
  $(".clickabl").click(function(){
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");

  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webPage").prepend("<li>why Hello!</li>");
    $('li').css('background-color', 'green');
    $("ul#user").children("li").first().click(function() {
      alert('hi');
    });
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
  });
  
  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webPage").prepend("<li>llo!</li>");
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webPage").prepend("<li>lo!</li>");
  });
  });
});