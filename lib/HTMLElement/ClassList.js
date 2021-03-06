// TODO : DOMTokenList, unit tests

/**
 * @see https://developer.mozilla.org/fr/docs/Web/API/Element/classList
 */
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
/** @class ClassList 
* @param element */
var ClassList = (function () {
    /**
     * @param {HTMLElement} element
     */

    function ClassList(element) {
        _classCallCheck(this, ClassList);

        this._element = element;
        this.tokens = [];
    }

    /**
     * @type {number}
     * @readonly
     
    * @memberof ClassList 
    * @instance 
    * @member length */

    _createClass(ClassList, [{
        key: '_parse',

        /**
         *
         
        * @memberof ClassList 
        * @instance 
        * @method _parse 
        * @param tokens */
        value: function _parse(tokens) {
            this.tokens = tokens.split(' ');
        }

        /**
         *
         
        * @memberof ClassList 
        * @instance 
        * @method _stringify */
    }, {
        key: '_stringify',
        value: function _stringify() {
            this._element._setAttribute('class', this.tokens.join(' '));
        }

        /**
         * Adds a class to an element's list of classes
         *
         * @param {...string} tokens
         *
         
        * @memberof ClassList 
        * @instance 
        * @method add 
        * @param {...*} tokens */
    }, {
        key: 'add',
        value: function add() {
            var _this = this;

            var updated = false;

            for (var _len = arguments.length, tokens = Array(_len), _key = 0; _key < _len; _key++) {
                tokens[_key] = arguments[_key];
            }

            tokens.forEach(function (token) {
                token = String(token);
                if (_this.tokens.indexOf(token) === -1) {
                    _this.tokens.push(token);
                    updated = true;
                }
            });

            if (updated) {
                this._stringify();
            }
        }

        /**
         * Removes a class from an element's list of classes
         *
         * @param {...string} tokens
         
        * @memberof ClassList 
        * @instance 
        * @method remove 
        * @param {...*} tokens */
    }, {
        key: 'remove',
        value: function remove() {
            var _this2 = this;

            var updated = false;

            for (var _len2 = arguments.length, tokens = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                tokens[_key2] = arguments[_key2];
            }

            tokens.forEach(function (token) {
                var index = _this2.tokens.indexOf(token);
                if (index !== -1) {
                    _this2.tokens.splice(index, 1);
                    updated = true;
                }
            });

            if (updated) {
                this._stringify();
            }
        }

        /**
         * Toggles the existence of a class in an element's list of classes
         *
         * @param {string} token
         * @param {boolean} force
         * @return {boolean} if the token was added
         *
         
        * @memberof ClassList 
        * @instance 
        * @method toggle 
        * @param token 
        * @param force */
    }, {
        key: 'toggle',
        value: function toggle(token, force) {
            var result = this.contains(token);
            var method = result ? force !== true && 'remove' : force !== false && 'add';

            if (method) {
                this[method](token);
            }

            return !result;
        }

        /**
         * Checks if an element's list of classes contains a specific class
         *
         * @param {string} token
         * @return {boolean} if the token is present
         
        * @memberof ClassList 
        * @instance 
        * @method contains 
        * @param token */
    }, {
        key: 'contains',
        value: function contains(token) {
            return this.tokens.indexOf(token) !== -1;
        }
    }, {
        key: 'length',
        get: function get() {
            return this.tokens.length;
        }
    }]);

    return ClassList;
})();

exports['default'] = ClassList;
module.exports = exports['default'];
//# sourceMappingURL=ClassList.js.map