'use strict'
const execSync = require('child_process').execSync
const assert = require('assert')

execSync('node ./build.js')

const color = require('./color')

assert(color.orange[500] === '#ff9800')
assert(color.deepOrange.a100 === '#ff9e80')
assert(color.extra.black === '#000000')
