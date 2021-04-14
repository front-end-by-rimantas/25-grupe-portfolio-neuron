class Nav {
  constructor(parentDOM, data) {
    this.parentDOM = parentDOM;
    this.data = data;

    this.DOM = null;

    this.init();
  }

  init() {
    if (!this.isValidDOM) {
      return false;
    }
    if (!this.isValidData) {
      return false;
    }

    const DOM = this.parentDOM.querySelector('.menu');

    if (!DOM) {
      return false;
    }
    this.DOM = DOM;

    this.render();
  }

  isValidDOM() {
    return true;
  }

  isValidData() {
    return true;
  }

  // submenuDirection(direction) {
  //   const available = ['bottom', 'right', 'left'];
  //   return available.includes(direction) ? direction : available[0];
  // }

  generateHTML(item) {

    let HTML = '';

    if (item.submenu) {
      const dropdownHTML = `<a class="label" href="${item.href}" >${item.text}</a>`;

      let subMenuHTML = '';

      for (const subMenuItem of item.submenu) {
        subMenuHTML += this.generateHTML(subMenuItem);
      }

      HTML += `<div class='item dropdown'>
                        ${dropdownHTML}
                        <div class="submenu">${subMenuHTML}</div>
                    </div>`;
    } else {
      HTML += `<a href="${item.href}" class="item" >${item.text}</a>`;
    }

    return HTML;
  }

  render() {

    let HTML = '';

    for (const item of this.data) {
      HTML += this.generateHTML(item);
    }

    this.DOM.insertAdjacentHTML('beforeend', `${HTML}`);
  }
}

export { Nav }