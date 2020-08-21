const split = require('split')
const through2 = require('through2')
let count = 0
const line = through2(function(buf, enc, next) {
    this.push(count % 2 === 0
        ? buf.toString().toLowerCase() + '\n'
        : buf.toString().toUpperCase() + '\n'
    )
    count++
    next()
})

process.stdin.pipe(split()).pipe(line).pipe(process.stdout)