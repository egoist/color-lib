# color-lib [![NPM version](https://img.shields.io/npm/v/color-lib.svg)](https://npmjs.com/package/color-lib) [![NPM downloads](https://img.shields.io/npm/dm/color-lib.svg)](https://npmjs.com/package/color-lib)

A color library which contains all colors in [material design](https://www.google.com/design/spec/style/color.html).

## Install

```bash
$ npm install --save color-lib
```

## Usage

```js
const color = require('color-lib')

color.blue.hex // #2196f3

color.orange['500'] // #ff9800
color.deepOrange['a100'] // #ff9e80

// note that `black` and `white` only has a hex value
color.black.hex
// no color.black['500'] !!!
```

For all colors, see [Google's color spec](https://www.google.com/design/spec/style/color.html#). All names are camelCased.

## License

MIT &copy; [EGOIST](https://github.com/egoist)
