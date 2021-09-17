var scroll = window.requestAnimationFrame ||
function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function isElementInViewport(el) {
    // special bonus for those using jQuery
      if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.right > (window.innerWidth || document.documentElement.clientWidth) &&
      rect.left > (window.innerWidth || document.documentElement.clientWidth))
  );
}
    
function loop() {

    elementsToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });
  
    scroll(loop);
  }

loop();

function check() {
var div = document.getElementById("second");
var rect = div.getBoundingClientRect();
  x = rect.left;
  y = rect.top;
  w = rect.right;
  h = rect.bottom;
  k = window.innerWidth;
  j = rect.clientWidth
  alert ("Left: " + x + ", Top: " + y + ", right: " + w + ", bottom: " + h + " innerWidth " + k + " clientWidth " + j);
}
