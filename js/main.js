Splitting();

const gnbList = $("#gnb .list > li");
const header = $("#header");
gnbList.on("mouseenter", function () {
  header.addClass("open");
});
gnbList.on("mouseleave", function () {
  header.removeClass("open");
});

$("#main").fullpage({
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
});
const st = $(window).scrollTop();
console.log(st);
console.log(window.innerHeight);
gsap.from("#happen .char", { opacity: 0, x: 100, duration: 1, ease: "power3", stagger: 0.05 });
gsap.from("#business .char", { opacity: 0, x: 100, duration: 1, ease: "power3", stagger: 0.05 });
gsap.from("#portfolio .char", { opacity: 0, x: 100, duration: 1, ease: "power3", stagger: 0.05 });
gsap.from("#community .char", { opacity: 0, x: 100, duration: 1, ease: "power3", stagger: 0.05 });
//스크롤 안되나??
$(window).on("mousewheel DOMMouseScroll", function () {
  const st = $(window).scrollTop();
  console.log($(this).scrollTop());
  console.log("---");
  console.log($(window).scrollTop());
  if (st > window.innerHeight) {
    console.log(window.innerHeight);
  }
});
