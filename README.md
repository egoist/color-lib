# color-lib

A color library which contains all colors in [material design](https://www.google.com/design/spec/style/color.html).

## Install

```bash
$ npm install --save color-lib
```

## Usage

```js
const color = require('color-lib')

color.orange['500'] // #ff9800
color.deepOrange['a100'] // #ff9e80

color.extra
// { black: '#000000', white: '#ffffff' } }
```

For all colors, see [Google's color spec](https://www.google.com/design/spec/style/color.html#). All names are camelCased.

## License

MIT &copy; [EGOIST](https://github.com/egoist)
