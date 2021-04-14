import { TopLeftText } from './TopLeftText.js';
import { TopRightIcons } from './TopRightIcons.js';
import { Logo } from './Logo.js';
import { Nav } from './Nav.js';
import { ShopSearch } from './ShopSearch.js';


class Header {
  constructor(selector, data) {

    this.selector = selector;
    this.data = data;

    // console.log(this.data.topText.content[0]);

    this.DOM = null;

    this.init();
  }

  init() {
    if (!this.isValidSelector()) {
      return false;
    }
    if (!this.isValidData()) {
      return false;
    }

    const DOM = document.querySelector(this.selector);
    if (!DOM) {
      console.error('ERROR: pagal pateikta selector nepavyko rasti jokio elemento');
      return false;
    }
    this.DOM = DOM;

    this.DOM.classList.add('header');

    this.render();
    // uzregistruoti event - scroll - position: static/fixed
  }

  isValidSelector() {
    return true;
  }

  isValidData() {
    return true;
  }

  render() {
    const HTML = `<div class="top-text row hidden visible-md header-top">
                    <div class="row">
                      <div class="col-md-7 col-lg-6 hd">
                      </div><div class="col-md-5 col-lg-6 hd header-social-icons"></div>
                      <div class="col-12"><hr></div></div></div>
                  <div class="row header-bottom col-12" id='header-bottom'>
                    <div class="col-6 col-lg-3 hd"></div>
                    <div class="row col-6 col-lg-9 header-bottom-right hd">
                      <nav class="menu hidden visible-lg"></nav>
                      <nav class="small-menu visible hidden-lg">
                    <a id="s_menu_btn" href="#"><i class="fa fa-bars"></i>MENU</a></nav>
                      <nav class="header-bottom-icons hd"></nav>
                      </div>
                      <div id="search_block" class="search-block search-on">
                        <form><input type="text" placeholder="Searching..."></form>
                      <div class="close-btn"><i class="flaticon-cross-out"></i></div></div></div>`;
    this.DOM.innerHTML = HTML;

    const allColsDOM = this.DOM.querySelectorAll('.hd');

    new TopLeftText(allColsDOM[0], this.data.topText.content[0]);
    new TopRightIcons(allColsDOM[1], this.data.topText.content[1]);
    new Logo(allColsDOM[2], this.data.logo);
    new Nav(allColsDOM[3], this.data.nav);
    new ShopSearch(allColsDOM[4], this.data.bottom_icons);
  }
}

export { Header }