/* global test */
import assert from 'proclaim';

const lib = '../../../lib/';

const MutationObserver = require(lib + 'MutationObserver/MutationObserver');

test('Mutation observer should throw if no configuration provided', function () {
    const observer = new MutationObserver();
    assert.throws(function () {
        observer.observe(null);
    });
});

