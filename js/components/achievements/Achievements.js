class Achievements {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            console.error('ERROR: nevalidus selektorius')
        }

    }

    isValidSelector() {
        if (typeof this.selector !== 'string') {
            console.warn('ERROR: selektorius ne tekstas.')
            return false;
        }
        return true;
    }




}

export { Achievements }