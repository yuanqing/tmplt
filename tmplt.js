'use strict';

var split = require('split');
var through = require('through2');
var combine = require('stream-combiner');

var SPLIT_REGEX = /(\n)/;
var INTERPOLATE_REGEX = /{{\s*([^}]+?)\s*}}/g;

var tmplt = module.exports = function(tmpl) {
  return new Function('d', 'with(d||{}){return \'' + tmpl.replace(INTERPOLATE_REGEX, '\'+$1+\'') + '\';}');
};

tmplt.stream = function(data) {
  var transform = function(chunk, encoding, cb) {
    var tmpl = chunk.toString();
    try {
      cb(null, tmplt(tmpl)(data));
    } catch (err) {
      return cb(err);
    }
  };
  return combine(split(SPLIT_REGEX), through(transform));
};
