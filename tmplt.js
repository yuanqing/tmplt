/* jshint quotmark: false */
(function(factory) {
  // istanbul ignore if
  if (typeof exports === 'undefined') {
    this.tmplt = factory;
  } else {
    module.exports = exports = factory;
  }
})((function() {
  var pattern = /{\s*([^{]+?)\s*}/g;
  return function(tmpl) {
    return new Function('d', "with(d||{}){return '" + tmpl.replace(pattern, "'+$1+'") + "';}");
  };
})());
