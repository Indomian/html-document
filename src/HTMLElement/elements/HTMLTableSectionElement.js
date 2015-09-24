import HTMLElement from '../../HTMLElement';
import DOMException from '../../DOMException';

/**
 * The HTMLSectionElement interface represents table section (thead, tbody etc.)
 * and inherits all classes and methods of the HTMLElement interface.
 *
 * @see https://developer.mozilla.org/en/docs/Web/API/HTMLTableSectionElement
 * @class HTMLTableSectionElement
 */
export default class HTMLTableSectionElement extends HTMLElement {
    constructor() {
        super();
    }

    /**
     * Set align of element
     * @param {string} value
     * @ignore
     */
    set align(value) {
        if (['left', 'right', 'center'].indexOf(value)) {
            this.setAttribute('align', value);
        }
    }

    /**
     * Align of element content
     * @member {string} HTMLTableSectionElement#align
     * @returns {string}
     */
    get align() {
        return this.getAttribute('align');
    }

    /**
     * Returns a live HTMLCollection containing the rows in the section. The HTMLCollection is live and is automatically
     * updated when rows are added or removed.
     * @todo Update array to HTMLCollection when it's implemented
     * @member {Array.<Element>} HTMLTableSectionElement#rows
     */
    get rows() {
        return this._childNodeFind(child => child.tagName === 'tr');
    }

    /**
     * Is a DOMString containing one single chararcter. This character is the one to align all the cell of a column on.
     * It reflects the char and default to the decimal points associated with the language, e.g. '.' for English, or ','
     * for French. This property was optional and was not very well supported.
     * @member {string} HTMLTableSectionElement#ch
     */
    get ch() {
        return '.';
    }

    /**
     * Is a DOMString containing a integer indicating how many characters must be left at the right (for left-to-right
     * scripts; or at the left for right-to-left scripts) of the character defined by HTMLTableRowElement.ch. This
     * property was optional and was not very well supported.
     * @member {number} HTMLTableSectionElement#chOff
     */
    get chOff() {
        return 0;
    }

    /**
     * Set align of element
     * @param {string} value
     * @ignore
     */
    set vAlign(value) {
        if (['top', 'middle', 'bottom', 'baseline'].indexOf(value)) {
            this.setAttribute('valign', value);
        }
    }

    /**
     * Is a DOMString representing an enumerated value indicating how the content of the cell must be vertically aligned.
     * It reflects the valign attribute and can have one of the following values: "top", "middle", "bottom", or "baseline".
     * @member {string} HTMLTableSectionElement#align
     * @returns {string}
     */
    get vAlign() {
        return this.getAttribute('valign');
    }

    /**
     * Method creates new &lt;tr&gt; element and adds it to section.
     * @param {number} index
     * @return {HTMLElement}
     */
    insertRow(index = -1) {
        let row = this.ownerDocument.createElement('tr');
        if (index === -1 || index === this.children.length) {
            this.appendChild(row);
        } else if (index < this.children.length - 1) {
            this.insertBefore(row, this.children[index]);
        } else {
            throw new DOMException('IndexSizeError');
        }

        return row;
    }

    /**
     * Removes the row at the given position in the section. If the given position is greater (or equal as it starts
     * at zero) than the amount of rows in the section, or is smaller than 0, it raises a DOMException with the
     * IndexSizeError value.
     * @param {number} index
     */
    deleteRow(index) {
        if (index >= this.children.length || index < 0) {
            throw new DOMException('IndexSizeError');
        }

        this.removeChild(this.children[index]);
    }
}
