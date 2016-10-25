const create = require('../')
const logger = require('./logger')

// the function
const inc = n => n + 1

// middlewares
const multi = next => n => next(n * 3)
const toNumber = next => n => next(Number(n))

const foo = create(inc, multi, toNumber, logger)

const bar = create(inc)
bar.use(logger)

console.log(foo('10'), bar(foo('2')))
