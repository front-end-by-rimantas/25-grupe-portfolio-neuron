// STICKY HEADER

function headerScroll() {
  if (window.matchMedia("(min-width: 991px)").matches) {
    window.onscroll = function () { myFunction() };

    var header = document.querySelector("#header-bottom");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }

}

export { headerScroll }

