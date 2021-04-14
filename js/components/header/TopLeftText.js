class TopLeftText {
  /**
   * Headerio top-text sekcijos generavimas
   * @param {Object} DOM Nuoroda (reference) i DOM elementa
   * @param {Object[]} data Objektas su info apie virsutini teksta
   * @param {boolean} data.isVisible Ar top-text sekcija yra matoma
   * @param {Array[]} data.content Top-text turinio dalys
   */
  constructor(DOM, data) {
    this.DOM = DOM;
    this.data = data;

    this.init();
  }

  init() {
    if (!this.isValidDOM) {
      return false;
    }
    if (!this.isValidData) {
      return false;
    }

    this.render();
  }

  isValidDOM() {
    return true;
  }

  isValidData() {
    return true;
  }

  render() {
    // if (!this.data.isVisible) {
    //   this.DOM.closest('.row').remove();
    //   return false;
    // }


    let HTML = '';

    for (const item of this.data) {
      if (item.text) {
        HTML += `<span class="header-contacts"><i class="${item.icon_class}"></i><a href="${item.link}">${item.text}</a></span>`;
      } else {
        HTML += `<a href="${item.link}"><i class="${item.icon_class}"></i></a>`;
      }
    }


    this.DOM.innerHTML = HTML;
  }
}

export { TopLeftText }