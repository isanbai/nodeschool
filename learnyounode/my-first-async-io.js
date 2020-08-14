const fs = require('fs')
const sum = fs.readFile(process.argv[2], 'utf8', 
    function func (error, afile) {
    if (error) return console.log('err')
    console.log((afile.split('\n').length) - 1)
})