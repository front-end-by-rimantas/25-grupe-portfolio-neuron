function services(selector, data) {
    // input validation

    // logic
    const DOM = document.querySelector(selector);
    const { list, maxCount } = data;

    let HTML = '';

    for (let i = 0; i < list.length; i++) {
        const service = list[i];

        HTML += `<div class="card-bg-white card">
                    <i class="${service.faIcon}"></i>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                    
                </div>`;
    }


    // post logic validation

    // result return
    DOM.innerHTML = HTML;
}

export { services }