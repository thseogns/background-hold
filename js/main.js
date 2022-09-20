$(".trigger").click(function () {
  $(this).toggleClass("on");
  $("nav").slideToggle();
});
$(window).resize(function () {
  let winW = $(window).width(); /*브라우저의 가로길이를 잰다*/
  if (winW >= 768 && $("nav").is(":hidden")) {
    console.log("nav가 안보여요");
    $("nav").removeAttr("style");
  }
});

console.log(winW);
