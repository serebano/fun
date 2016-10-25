const fun = require('../')

const toUpper = next => name => next(name.toUpperCase())
const toLower = next => name => next(name.toLowerCase())

const sayHi = name => `Hello ${name}!`

const hello = fun(sayHi, toUpper)

console.log(hello('Serebanov'))
