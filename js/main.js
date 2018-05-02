/*AOS init*/
AOS.init();

/*smooth scroll initialization*/
var scroll = new SmoothScroll('a[href*="#"]');


/* BACKGROUND VIDEO JS SOURCE */
var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#bgvid");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed
vid.pause();
// to capture IE10
vidFade();
});


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
  } else {
    vid.pause();
  }
})
