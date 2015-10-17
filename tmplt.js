'use strict';

var INTERPOLATE_REGEX = /{{\s*([^}]+?)\s*}}/g;

module.exports = function(tmpl) {
  return new Function('d', "with(d||{}){return '" + tmpl.replace(INTERPOLATE_REGEX, "'+$1+'") + "';}");
};
