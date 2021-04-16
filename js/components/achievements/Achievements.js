class Achievements {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            console.error('ERROR: nevalidus selektorius');
        }

        // if (!this.isValidData()) {
        //     console.error('ERROR: nevalidus duomenys');
        //     return false;
        // }

        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.error('ERROR: pagal pateikta selektoriu nepavyko rasti norimos vietos/elemento');
            return false;
        }
        this.DOM = DOM;

        this.render();
        
        

    }

    isValidSelector() {
        if (typeof this.selector !== 'string') {
            console.warn('ERROR: selektorius ne tekstas.')
            return false;
        }
        if (this.selector === '') {
            console.warn('ERROR: selektorius tuscias.')
            return false;
        }
        return true;
    }

    isValidData() {
        if (typeof this.data !== 'object' ||
            Array.isArray(this.data)) {
            console.warn('ERROR:duomenys turi buti objekto tipo');
            return false;
        }

        if (this.data.list === undefined ||
            !Array.isArray(this.data.list)) {
            console.warn('ERROR: duomenyse esantis list turi buti array tipo');
        }
        if (this.data.list.length === 0) {
            console.warn('ERROR: duomenyse esantis list turi buti ne tuscias');
        }
    }

    render() {
        let HTML = '';
        
        for (const item of this.data.list) {
            HTML += `<div class="achievement">
                        <div class="value">${item.value}</div> 
                        <div class="plus">${item.plus}</div> 
                        <div class="subtitle">${item.subtitle}</div> 
                        </div>`;
        }
        // for (let i = 0; i < this.data.list.length, i++) {    jeigu reikia ne viso listo o tik keliu
        //     const item = this.data.list[i];
        //     if (2) {
        //         break;
        //     }
        
        this.DOM.innerHTML = HTML;
        }
    }


export { Achievements }