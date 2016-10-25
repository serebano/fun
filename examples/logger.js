function logger(next, main) {
    return (...input) => {
        const start = Date.now()
        const output = next(...input)
        const took = Date.now() - start

        console.log(main.displayName + ':' + next.displayName, { input, output, took, next, main })

        return output
    }
}

module.exports = logger
