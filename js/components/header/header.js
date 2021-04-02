// STICKY HEADER
window.onscroll(stickHeader());

var header = document.getElementById("header-bottom");
var sticky = header.offsetTop;

function stickHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}