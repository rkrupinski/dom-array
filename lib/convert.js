'use strict';

var parse = require('./parse')
  , slice = [].slice;

function convert(arg, ctx) {
  var result = []
    , query
    , nodes;

  switch (true) {
    case (typeof arg === 'string'):
      query = [];
      nodes = [];

      try {
        query = (ctx || document).querySelectorAll(arg);
      } catch (e) {
        nodes = parse(arg);
      }

      query.length && (result = slice.call(query));
      nodes.length && (result = nodes);
      query = nodes = null;
      break;
    case (arg instanceof NodeList):
      result = slice.call(arg);
      break;
    case (arg instanceof Element || arg === document ||
        arg === window):
      result.push(arg);
      break;
    case (Array.isArray(arg)):
      result = arg;
      break;
    default:
      break;
  }

  return result;
}

module.exports = convert;
