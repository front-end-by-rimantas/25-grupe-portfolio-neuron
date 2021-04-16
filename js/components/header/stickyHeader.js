// STICKY HEADER





function stickyHeader() {

  const header = document.querySelector("#header-bottom");
  const sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



export { stickyHeader }



