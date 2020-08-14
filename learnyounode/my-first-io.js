const fs = require('fs')
let afile = process.argv[2]
const str = fs.readFileSync(afile).toString()
console.log((str.split("\n").length)-1)


