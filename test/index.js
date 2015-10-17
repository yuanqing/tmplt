'use strict';

var tmplt = require('..');
var test = require('tape');

test('tmplt(tmpl)(data)', function(t) {

  t.test('works without `data`', function(t) {
    t.plan(1);
    t.equal(tmplt('foo')(), 'foo');
  });

  t.test('interpolates values in `data`', function(t) {
    t.plan(4);
    var data = { foo: 'bar' };
    t.equal(tmplt('{{foo}}')(data), 'bar');
    t.equal(tmplt('{{ foo}}')(data), 'bar');
    t.equal(tmplt('{{foo }}')(data), 'bar');
    t.equal(tmplt('{{ foo }}')(data), 'bar');
  });

  t.test('interpolates nested values in `data`', function(t) {
    t.plan(1);
    t.equal(tmplt('{{ foo }}, {{ bar.baz }}!')({
      foo: 'Hello',
      bar: {
        baz: 'World'
      }
    }), 'Hello, World!');
  });

  t.test('throws if a variable referenced in `tmpl` is not in `data`', function(t) {
    t.plan(1);
    t.throws(function() {
      tmplt('{{ foo }}')({});
    });
  });

});
