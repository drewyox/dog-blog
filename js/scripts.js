$(document).ready(function() {
  $("button#light") .click(function() {
    $("body,h1,a").removeClass();
    $("body,h1,a").addClass("light-background");
    $("body,h1,a").addClass("dark-text");
  });
  $("button#dark").click(function() {
    $("body,h1,a").removeClass();
    $("body,h1,a").addClass("dark-background");
    $("body,h1,a").addClass("light-text");
  });
  $("button#normal").click(function() {
    $("body,h1,a").removeClass();
  });
});
