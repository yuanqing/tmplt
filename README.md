# tmplt.js [![npm Version](http://img.shields.io/npm/v/tmplt.svg?style=flat)](https://www.npmjs.org/package/tmplt) [![Build Status](https://img.shields.io/travis/yuanqing/tmplt.svg?style=flat)](https://travis-ci.org/yuanqing/tmplt) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/tmplt.svg?style=flat)](https://coveralls.io/r/yuanqing/tmplt)

> Minimal templating for JavaScript.

## Usage

```js
var tmpl = '{ foo }, { bar.baz }!';
var data = {
  foo: 'Hello',
  bar: {
    baz: 'World'
  }
};

tmplt(tmpl)(data); //=> 'Hello, World!'
```

## API

### tmplt(tmpl)(data)

Returns a String, the result of interpolating `data` into `tmpl`.

- `tmpl` &mdash; The template String.
- `data` &mdash; An Object literal of values.

## Installation

Install via [npm](https://www.npmjs.org/):

```bash
$ npm i --save tmplt
```

Install via [bower](http://bower.io/):

```bash
$ bower i --save yuanqing/tmplt
```

To use tmplt in the browser, include [the minified script](https://github.com/yuanqing/tmplt/blob/master/tmplt.min.js) in your HTML:

```html
<body>
  <!-- ... -->
  <script src="path/to/tmplt.min.js"></script>
  <script>
    // tmplt available here
  </script>
</body>
```

## Changelog

- 0.1.0
  - Initial release

## License

[MIT license](https://github.com/yuanqing/tmplt/blob/master/LICENSE)
