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
        this.addEvents();



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
                        <div class="value">${item.value}+</div> 
                        <div class="subtitle">${item.subtitle}</div> 
                        </div>`;
            // <div class="ach-img"> <img src="./img/count-shape.png" alt=""></div>
        }
        // for (let i = 0; i < this.data.list.length, i++) {    jeigu reikia ne viso listo o tik keliu
        //     const item = this.data.list[i];
        //     if (2) {
        //         break;
        //     }

        this.DOM.innerHTML = HTML;
    }

    addEvents() {
        addEventListener('scroll', () => {
            const AllNumbersDOM = this.DOM.querySelectorAll('.value');

            for (let i = 0; i < AllNumbersDOM.length; i++) {
                const numberDOM = AllNumbersDOM[i];
                const elementTop = numberDOM.offsetTop;
                const elementHeight = numberDOM.clientHeight;

                const isVisible = scrollY + innerHeight >= elementTop + elementHeight ? true : false;
                if (isVisible) {
                    this.animateNumber(numberDOM, i);
                }
            }
        })
    }
    animateNumber(elementDOM, elementIndex) {
        if (this.data.list[elementIndex].animated !== true) {
            const targetNumber = this.data.list[elementIndex].value;
            this.data.list[elementIndex].animated = true;

            const timeToAnimate = 3000;
            const fps = 30;
            const framesCount = timeToAnimate * fps / 1000;
            const numberIncrement = targetNumber / framesCount;
            let printedValue = 0;
            let currentFrameIndex = 0;

            const timer = setInterval(() => {
                printedValue += numberIncrement;
                currentFrameIndex++;
                elementDOM.innerText = Math.round(printedValue);

                if (currentFrameIndex === framesCount) {
                    clearInterval(timer);
                }
            }, 1000 / fps)
        }
    }

}
}


export { Achievements }