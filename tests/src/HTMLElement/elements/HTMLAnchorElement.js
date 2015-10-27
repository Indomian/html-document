/* global test */
import assert from 'proclaim';
const expect = assert.strictEqual;

const lib = '../../../../lib/';

const HTMLAnchorElement = require(lib + 'HTMLElement/elements/HTMLAnchorElement');
const Document = require(lib + 'Document');

test('HTMLAnchorElement should have the nodeName == table ', () => {
    let elt = new HTMLAnchorElement();
    elt._ownerDocument = new Document();
    expect(elt.nodeName, 'a');
});

test('HTMLAnchorElement should provide hash', () => {
    let elt = new HTMLAnchorElement();
    elt.href = '/someurl#hash-data';
    expect(elt.hash, '#hash-data');
});

test('HTMLAnchorElement should provide host', () => {
    let elt = new HTMLAnchorElement();
    elt.href = '/someurl#hash-data';
    expect(elt.host, '');
    elt.href = 'http://www.google.com:80/some-url';
    expect(elt.host, 'www.google.com:80');
});

test('HTMLAnchorElement should provide hostname', () => {
    let elt = new HTMLAnchorElement();
    elt.href = '/someurl#hash-data';
    expect(elt.hostname, '');
    elt.href = 'http://www.google.com:80/some-url';
    expect(elt.hostname, 'www.google.com');
});

test('HTMLAnchorElement clone should clone href', () => {
    let document = new Document();
    let elt = document.createElement('a');
    elt.href = '/someurl#hash-data';
    let clone = elt.cloneNode();
    expect(clone.hash, '#hash-data');
});

test('HTMLAnchorElement set hostname for relative pathes', () => {
    let document = new Document();
    document.location = 'http://some.test:80/page';
    let elt = document.createElement('a');
    elt.href = 'mypage.html';
    expect(elt.pathname, 'mypage.html');
    expect(elt.href, 'http://some.test:80/mypage.html');
});

test('HTMLAnchorElement protocol returned with ":"', () => {
    let document = new Document();
    document.location = 'http://some.test:80/page';
    let elt = document.createElement('a');
    elt.href = 'mypage.html';
    expect(elt.protocol, 'http:');
    elt.protocol = 'ftp';
    expect(elt.protocol, 'ftp:');
    expect(elt.href, 'ftp://some.test:80/mypage.html');
});

test('HTMLAnchorElement rel process properly', () => {
    let document = new Document();
    document.body.innerHTML = '<a href="" rel="nofollow">Text</a>';
    let elt = document.body.querySelector('a[rel="nofollow"]');
    expect(elt.getAttribute('rel'), 'nofollow');
    expect(elt.rel, 'nofollow');
    elt.rel = 'thisisrel';
    expect(elt.getAttribute('rel'), 'thisisrel');
});

test('HTMLAnchorElement hash process properly', () => {
    let document = new Document();
    document.body.innerHTML = '<a href="#some">Text</a>';
    let elt = document.body.querySelector('a');
    expect(elt.hash, '#some');
    elt.hash = 'other';
    expect(elt.href, 'about:blank#other');
});

test('HTMLAnchorElement host processed properly', () => {
    let document = new Document();
    document.body.innerHTML = '<a href="http://other.link:85">Text</a>';
    let elt = document.body.querySelector('a');
    expect(elt.host, 'other.link:85');
    elt.host = 'some.link';
    expect(elt.href, 'http://some.link/');
});

test('HTMLAnchorElement hostname processed properly', () => {
    let document = new Document();
    document.body.innerHTML = '<a href="http://other.link:85">Text</a>';
    let elt = document.body.querySelector('a');
    expect(elt.hostname, 'other.link');
    elt.hostname = 'some.link';
    expect(elt.href, 'http://some.link:85/');
});

test('HTMLAnchorElement pathname processed properly', () => {
    let document = new Document();
    document.body.innerHTML = '<a href="http://other.link/path/with/me">Text</a>';
    let elt = document.body.querySelector('a');
    expect(elt.pathname, '/path/with/me');
    elt.pathname = 'some/path';
    expect(elt.href, 'http://other.link/some/path');
});
