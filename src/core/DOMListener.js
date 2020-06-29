import { capitalize } from './utils';

export class DOMListener {
    constructor($root, listeners = [], name = '') {
        if (!$root) {
            throw new Error(`No $root provoded for DOMListener`);
        }
        this.$root = $root;
        this.listeners = listeners;
        this.name = name;
    }

    initDOMListeners() {
        this.listeners.forEach((listener) => {
            const method = getMethodName(listener);
            if (!this[method]) {
                const name = this.name || '';
                throw new Error(
                    `${method} is not implimented in ${name} Component`
                );
            }
            this[method] = this[method].bind(this);
            // analog addEventListener
            this.$root.on(listener, this[method]);
        });
    }

    removeDOMListeners() {
        this.listeners.forEach((listener) => {
            const method = getMethodName(listener);
            this.$root.off(listener, this[method]);
        });
    }
}

// Input => onInput
function getMethodName(eventName) {
    return 'on' + capitalize(eventName);
}