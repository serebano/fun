/**
 * Create new function providing simple middleware system

 * const num = create(n => n + 1)
 * num.use(next => n => next(n * 3))
 * num.use(next => n => next(Number(n)))
 * num('2') --> (Number('2')) --> (2 * 3) --> (6 + 1) --> 7
 */

export default function create(first, ...rest) {

    let execute = first
    let chain = rest

    const fun = (...args) => execute(...args)

    Object.defineProperties(fun, {
        chain: {
            get: () => chain
        },
        use: {
            value: (...middlewares) => {
                chain = [ ...new Set([ ...chain, ...middlewares ]) ]
                execute = chain.reduce((next, mid) => mid(next, first), first)
                return fun
            }
        }
    })

    return fun.use(...rest)
}
