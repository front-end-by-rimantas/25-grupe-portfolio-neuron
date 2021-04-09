class Blog {
  constructor(selector, data) {
    console.log(selector);
    console.log(data);
    this.selector = selector;
    this.data = data;

    this.DOM = null;

    this.init();
  }


  init() {
    if (!this.isValidSelector()) {
      console.error('ERROR: nevalidus selectorius');
      return false;
    }

    if (!this.isValidData()) {
      console.error('ERROR: nevalidus duomenys');
      return false;
    }

    const DOM = document.querySelector(this.selector);
    if (!DOM) {
      console.error('ERROR: pagal pateikta selector nepavyko rasti norimos vietos/elemento');
      return false;
    }
    this.DOM = DOM;

    this.render();
  }

  isValidSelector() {
    if (typeof this.selector !== 'string') {
      console.warn('ERROR: selector turi buti tekstas');
      return false;
    }

    if (this.selector === '') {
      console.warn('ERROR: selector turi buti ne tuscias tekstas');
      return false;
    }

    return true;
  }

  isValidData() {
    if (typeof this.data !== 'object' ||
      Array.isArray(this.data)) {
      console.warn('ERROR: duomenys turi buti objekto tipo');
      return false;
    }

    if (this.data.list === undefined ||
      !Array.isArray(this.data.list)) {
      console.warn('ERROR: duomenyse esantis list turi buti array tipo');
      return false;
    }

    if (this.data.list.length === 0) {
      console.warn('ERROR: duomenyse esantis list turi buti ne tuscias array');
      return false;
    }

    return true;
  }

  render() {
    let HTML = '';

    // for (let i = 0; i < this.data.list.length; i++) {
    //   let blogCount = 0;

    //   if (blogCount < 4) {
    //     HTML += `<div class="col-12 col-lg-4 col-md-6 blog-block">
    //             <img class='blog-image' src="./img/blog/${item.img}.jpeg" alt="blog image">
    //               <div>
    //                 <div class="row">
    //                   <div class="col-12">
    //                     <div class="tiny-intro">
    //                       <p><i class="fa fa-calendar-check-o"></i> ${item.date}</p>
    //                       <p><i class="fa fa-user-o"></i> Admin</p>
    //                       <p> <span>${item.comment_no}</span> Comments</p>
    //                     </div>
    //                     <h3><a href="./img/blog/blog-2.jpeg">${item.title}</a></h3>
    //                     <p class="main-blog-text">${item.text}</p>
    //                     <button class="btn">READ MORE</button>
    //                   </div>
    //                 </div>
    //               </div>
    //         </div>`;
    //   } else {
    //     break;
    //   }
    // }

    for (const item of this.data.list) {
      HTML += `<div class="col-12 col-lg-4 col-md-6 blog-block">
                <img class='blog-image' src="./img/blog/${item.img}.jpeg" alt="blog image">
                  <div>
                    <div class="row">
                      <div class="col-12">
                        <div class="tiny-intro">
                          <p><i class="fa fa-calendar-check-o"></i> ${item.date}</p>
                          <p><i class="fa fa-user-o"></i> Admin</p>
                          <p> <span>${item.comment_no}</span> Comments</p>
                        </div>
                        <h3><a href="./img/blog/blog-2.jpeg">${item.title}</a></h3>
                        <p class="main-blog-text">${item.text}</p>
                        <button class="btn">READ MORE</button>
                      </div>
                    </div>
                  </div>
            </div>`;
    }

    this.DOM.innerHTML = HTML;
  }

}

export { Blog }