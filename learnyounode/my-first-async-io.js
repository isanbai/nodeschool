const fs = require('fs')
const sum = fs.readFile(process.argv[2], 'utf8', func)

function func (error, afile) {
    if (error) return console.error(error)
    
}

console.log(sum)
    //.split('\n') - 1)