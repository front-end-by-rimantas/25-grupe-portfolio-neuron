class Logo {
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

    let HTML = '';

    const { imgPath, logo, alt } = this.data;
    HTML = `<img class="logo" src="${imgPath + logo}" alt="${alt}">`;

    this.DOM.innerHTML = HTML;
  }
}

export { Logo }