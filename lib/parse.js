'use strict';

function parse(str) {
  var doc = document.implementation.createHTMLDocument('');

  doc.body.innerHTML = str;
  return [].slice.call(doc.body.children);
}

module.exports = parse;
