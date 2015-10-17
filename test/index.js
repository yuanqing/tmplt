'use strict';

var tmplt = require('..');

var test = require('tape');

test('works without `data`', function(t) {
  t.plan(1);
  t.equal(tmplt('foo')(), 'foo');
});

test('interpolates values in `data`', function(t) {
  t.plan(4);
  var data = { foo: 'bar' };
  t.equal(tmplt('{{foo}}')(data), 'bar');
  t.equal(tmplt('{{ foo}}')(data), 'bar');
  t.equal(tmplt('{{foo }}')(data), 'bar');
  t.equal(tmplt('{{ foo }}')(data), 'bar');
});

test('interpolates nested values in `data`', function(t) {
  t.plan(1);
  var data = {
    foo: 'Hello',
    bar: {
      baz: 'World'
    }
  };
  t.equal(tmplt('{{ foo }}, {{ bar.baz }}!')(data), 'Hello, World!');
});

test('throws if a variable referenced in `tmpl` is not in `data`', function(t) {
  t.plan(1);
  t.throws(function() {
    tmplt('{{ foo }}')({});
  });
});
