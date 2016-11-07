import Node from '../Node';
import MutationObserverInit from './MutationObserverInit';

/**
 * MutationObserver provides developers a way to react to changes in a DOM. It is designed as a replacement
 * for Mutation Events defined in the DOM3 Events specification.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 */
export default class MutationObserver {
    /**
     * Constructor for instantiating new DOM mutation observers.
     *
     * @param {Function} callback
     */
    constructor(callback) {
        this._handler = callback;
    }

    /**
     * Registers the MutationObserver instance to receive notifications of DOM mutations on the specified node.
     *
     * @param {Node} target
     * @param {MutationObserverInit} options
     */
    observe(target, options) {
        const currentOptions = new MutationObserverInit();
        currentOptions.fill(options);
        if (!(currentOptions.childList || currentOptions.attributes || currentOptions.characterData)) {
            throw new Error('An invalid or illegal string was specified');
        }
    }

    /**
     * Stops the MutationObserver instance from receiving notifications of DOM mutations. Until the observe() method is used again, observer's callback will not be invoked.
     */
    disconnect() {

    }

    /**
     * Empties the MutationObserver instance's record queue and returns what was in there.
     *
     * @returns {MutationRecord[]}
     */
    takeRecords() {

    }
}
