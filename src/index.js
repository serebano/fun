/**
 * JS Middleware Fun

 * const foo = create(n => n + 1)
 * foo.use(next => n => next(n * 3))
 * foo.use(next => n => next(Number(n)))
 * foo("2") --> (Number("2")) --> (2 * 3) --> (6 + 1) --> 7
 */

export default function create(first, ...rest) {
    let execute = first
    let chain = rest

    const fun = (...args) => execute(...args)
    const main = (...args) => first(...args)

    main.displayName = first.displayName || first.name || 'main'

    Object.defineProperties(fun, {
        chain: {
            get: () => chain
        },
        use: {
            value: (...middlewares) => {
                chain = [ ...new Set([ ...chain, ...middlewares ]) ]
                execute = chain.reduce((next, mid, idx) => {
                    const fn = mid(next, main)
                    fn.displayName = fn.displayName || mid.displayName || fn.name || mid.name || `fun-${idx}`
                    return fn
                }, main)
                return fun
            }
        }
    })

    return fun.use(...rest)
}
