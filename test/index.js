/* globals describe, it, expect */
'use strict';

var tmplt = require('..');

describe('tmplt(tmpl)(data)', function() {

  it('works without `data`', function() {
    expect(tmplt('foo')()).toBe('foo');
  });

  it('interpolates values in `data`', function() {
    var data = { foo: 'bar' };
    expect(tmplt('{{foo}}')(data)).toBe('bar');
    expect(tmplt('{{ foo}}')(data)).toBe('bar');
    expect(tmplt('{{foo }}')(data)).toBe('bar');
    expect(tmplt('{{ foo }}')(data)).toBe('bar');
  });

  it('interpolates nested values in `data`', function() {
    expect(tmplt('{{ foo }}, {{ bar.baz }}!')({
      foo: 'Hello',
      bar: {
        baz: 'World'
      }
    })).toBe('Hello, World!');
  });

  it('throws if a variable referenced in `tmpl` is not in `data`', function(done) {
    try {
      tmplt('{{ foo }}')({});
    } catch(err) {
      expect(err.message.indexOf('foo is not defined') !== -1).toBe(true);
      done();
    }
  });

});
