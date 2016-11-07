export default class MutationObserverInit {
    constructor() {
        /**
         * Set to true if additions and removals of the target node's child elements (including text nodes) are to be observed.
         * @var {boolean}
         */
        this.childList = false;

        /**
         * Set to true if mutations to target's attributes are to be observed.
         * @var {boolean}
         */
        this.attributes = false;

        /**
         * Set to true if mutations to target's data are to be observed.
         * @var {boolean}
         */
        this.characterData = false;

        /**
         * Set to true if mutations to target and target's descendants are to be observed.
         * @var {boolean}
         */
        this.subtree = false;

        /**
         * Set to true if attributes is set to true and target's attribute value before the mutation needs to be recorded.
         * @var {boolean}
         */
        this.attributeOldValue = false;

        /**
         * Set to true if characterData is set to true and target's data before the mutation needs to be recorded.
         * @var {boolean}
         */
        this.characterDataOldValue = false;

        /**
         * Set to an array of attribute local names (without namespace) if not all attribute mutations need to be observed.
         * @type {Array}
         */
        this.attributeFilter = [];
    }

    /**
     * Service method to update this object with values from options.
     *
     * @param {Object} options
     */
    fill(options) {
        this.childList = typeof options.childList !== 'undefined' ? options.childList : false;
        this.attributes = typeof options.attributes !== 'undefined' ? options.attributes : false;
        this.characterData = typeof options.characterData !== 'undefined' ? options.characterData : false;
        this.subtree = typeof options.subtree !== 'undefined' ? options.subtree : false;
        this.attributeOldValue = typeof options.attributeOldValue !== 'undefined' ? options.attributeOldValue : false;
        this.characterDataOldValue = typeof options.characterDataOldValue !== 'undefined' ? options.characterDataOldValue : false;
        this.attributeFilter = typeof options.attributeFilter !== 'undefined' ? options.attributeFilter : false;
    }
}
