$(window).on("beforeunload", function () {
    $(window).scrollTop(0);
});
const header = $("#header");
let prevScroll;
let lastShowPos;
$(window).on("scroll", function () {
  const scrolled = $(window).scrollTop();
  if (scrolled > 100 && scrolled > prevScroll) {
      header.addClass("headerHides");
      lastShowPos = scrolled;
  }
  else if (scrolled <= Math.max(lastShowPos - 100, 0)) {
      header.removeClass("headerHides");
  }
  prevScroll = scrolled;
});


const block1 = 0;
const block2 = 1152;
const block3 = 2304;
const scrollpos =  $("#blocks").scrollLeft();
$("#prev").click(function() {
  const scrollpos =  $("#blocks").scrollLeft();
  if (scrollpos === block1) {
    $("#blocks").animate({
      scrollLeft: block3
    }, 200, "swing")
  }
  else if (scrollpos === block2) {
    $("#blocks").animate({
      scrollLeft: block1
    }, 200, "swing")
  }
  else if (scrollpos === block3) {
    $("#blocks").animate({
      scrollLeft: block2
    }, 200, "swing")
  }
  else {
    return false
  }
});
$("#next").click(function() {
  const scrollpos =  $("#blocks").scrollLeft();
  if (scrollpos === block1) {
    $("#blocks").animate({
      scrollLeft: block2
    }, 200, "swing")
  }
  else if (scrollpos === block2) {
    $("#blocks").animate({
      scrollLeft: block3
    }, 200, "swing")
  }
  else if (scrollpos === block3) {
    $("#blocks").animate({
      scrollLeft: block1
    }, 200, "swing")
  }
  else {
    return false
  }
});
function autoscroll () {
  const scrollpos =  $("#blocks").scrollLeft();
  if (scrollpos < 2304)
  $("#blocks").animate({
        scrollLeft: scrollpos + 1152
      }, 200, "swing")
  else {
    $("#blocks").animate({
        scrollLeft: scrollpos - 2304
      }, 200, "swing")
  }
};
let autoscrolling =  setInterval(autoscroll,5000);
$(window).on("beforeunload", function () {
    $("#blocks").scrollLeft(0);
});