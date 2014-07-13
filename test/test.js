'use strict';

describe('dom-array', function () {
  var domArray = require('..');

  it('should convert undefined to an array', function () {
    var result = domArray();

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });

  it('should convert null to an array', function () {
    var result = domArray(null);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });

  it('shout convert a valid selector to an array',
      function () {
    var result = domArray('script');

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  it('should convert an invalid selector to an array',
      function () {
    var result = domArray('12');

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });

  it('should convert a HTML string to an array', function () {
    var result = domArray('12<div><b>');

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(1);
    expect(result[0].nodeName.toLowerCase()).toBe('div');
  });

  it('should convert a NodeList to an array', function () {
    var result = domArray($$('script'));

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  it('should convert an Element to an array', function () {
    var result = domArray($('script'));

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(1);
  });

  it('should return the input unchanged, if it\'s an array',
      function () {
    var input = [document.createElement('div')];

    expect(domArray(input)).toBe(input);
  });

  it('should query DOM only in the current context',
      function () {
    var result1 = domArray('title', document.body);
    var result2 = domArray('title', document.head);

    expect(result1.length).toBe(0);
    expect(result2.length).toBe(1);
  });

});
