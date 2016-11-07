import NodeList from '../NodeList';

export default class MutationRecord {
    constructor() {
        /**
         * Returns "attributes" if the mutation was an attribute mutation, "characterData" if it was a mutation to a
         * CharacterData node, and "childList" if it was a mutation to the tree of nodes.
         *
         * @type {string}
         */
        this.type = '';

        /**
         * Returns the node the mutation affected, depending on the MutationRecord.type. For attributes, it is the
         * element whose attribute changed. For characterData, it is the CharacterData node. For childList, it is the
         * node whose children changed.
         *
         * @type {Node}
         */
        this.target = null;

        /**
         * Return the nodes added. Will be an empty NodeList if no nodes were added.
         *
         * @type {NodeList}
         */
        this.addedNodes = null;

        /**
         * Return the nodes removed. Will be an empty NodeList if no nodes were removed.
         *
         * @type {NodeList}
         */
        this.removedNodes = null;

        /**
         * Return the previous sibling of the added or removed nodes, or null.
         *
         * @type {Node}
         */
        this.previousSibling = null;

        /**
         * Return the next sibling of the added or removed nodes, or null.
         *
         * @type {Node}
         */
        this.nextSibling = null;

        /**
         * Returns the local name of the changed attribute, or null.
         *
         * @type {String}
         */
        this.attributeName = null;

        /**
         * Returns the namespace of the changed attribute, or null.
         *
         * @type {String}
         */
        this.attributeNamespace = null;

        /**
         * The return value depends on the MutationRecord.type. For attributes, it is the value of the changed
         * attribute before the change. For characterData, it is the data of the changed node before
         * the change. For childList, it is null.
         *
         * @type {null}
         */
        this.oldValue = null;
    }
}
