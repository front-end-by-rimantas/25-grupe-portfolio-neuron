function sDropdownMenu() {

  const sMenuBtn = document.querySelector('#s_menu_btn');
  const sMenuDropdown = document.querySelector('.small-menu-dropdown');

  sMenuBtn.addEventListener('click', showSMenu);

  function showSMenu() {
    sMenuDropdown.style.display = "block";

    sMenuBtn.addEventListener('click', dontShowSMenu);

    function dontShowSMenu() {
      sMenuDropdown.style.display = "none";
      sDropdownMenu();
    }


  }

}






export { sDropdownMenu }