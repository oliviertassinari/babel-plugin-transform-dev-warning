## babel-plugin-transform-dev-warning

[![Build Status](https://travis-ci.org/oliviertassinari/babel-plugin-transform-dev-warning.svg?branch=master)](https://travis-ci.org/oliviertassinari/babel-plugin-transform-dev-warning)
[![npm version](https://img.shields.io/npm/v/babel-plugin-transform-dev-warning.svg?style=flat-square)](https://www.npmjs.com/package/babel-plugin-transform-dev-warning)
[![npm downloads](https://img.shields.io/npm/dm/babel-plugin-transform-dev-warning.svg?style=flat-square)](https://www.npmjs.com/package/babel-plugin-transform-dev-warning)

This plugin eliminates development warning from production code.
It's recommended to be used with https://github.com/r3dm/warning.

### Example

**In**
```js
warning(condition, argument, argument);
```

**Out**
```js
if (process.env.NODE_ENV !== 'production') {
  warning(condition, argument, argument);
}
```

### Installation

```sh
$ npm install --save-dev babel-plugin-transform-dev-warning
```

### Usage

#### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "env": {
    "production": {
      "plugins": ["transform-dev-warning"]
    }
  }
}
```

#### Via CLI

```sh
$ babel --plugins transform-dev-warning script.js
```

#### Via Node API

```js
require("babel-core").transform("code", {
  plugins: ["transform-dev-warning"]
});
```

## License

MIT
