/* global test */
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

var lib = '../../../lib/';

var MutationObserver = require(lib + 'MutationObserver/MutationObserver');

test('Mutation observer should throw if no configuration provided', /** @function */function () {
    var observer = new MutationObserver();
    _proclaim2['default'].throws( /** @function */function () {
        observer.observe(null);
    });
});
//# sourceMappingURL=MutationObserver.js.map