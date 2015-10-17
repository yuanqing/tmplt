'use strict';

var tmplt = require('..');

var test = require('tape');
var concatStream = require('concat-stream');
var ReadableStream = require('stream').Readable;

var helper = function(t, data, tmpl, expected) {
  var rs = new ReadableStream();
  rs.push(tmpl);
  rs.push(null);
  rs.pipe(tmplt.stream(data))
    .pipe(concatStream(function(buffer) {
      t.equal(buffer.toString(), expected);
    }));
};

test('works without `data`', function(t) {
  t.plan(1);
  helper(t, undefined, 'foo', 'foo');
});

test('interpolates values from `data`', function(t) {
  t.plan(4);
  var data = { foo: 'bar' };
  helper(t, data, '{{foo}}', 'bar');
  helper(t, data, '{{ foo}}', 'bar');
  helper(t, data, '{{foo }}', 'bar');
  helper(t, data, '{{ foo }}', 'bar');
});

test('interpolates nested values from `data`', function(t) {
  t.plan(1);
  var data = {
    foo: 'Hello',
    bar: {
      baz: 'World'
    }
  };
  helper(t, data, '{{ foo }}, {{ bar.baz }}!', 'Hello, World!');
});

test('throws if a variable referenced in the stream is not in `data`', function(t) {
  t.plan(1);
  var rs = new ReadableStream();
  rs.push('{{foo}}');
  rs.push(null);
  rs.pipe(tmplt.stream({}))
    .on('error', function() {
      t.pass();
    });
});
