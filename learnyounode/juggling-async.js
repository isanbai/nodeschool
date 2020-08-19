const http = require('http')
const bl = require('bl')
let out = []
let max = process.argv.length - 1

for(let i = 2; i < process.argv.length; i++) {
http.get(process.argv[i], function (response) {
    response.pipe(bl(function(err, data) {
        if(err) { console.error(err) }
        out[i] = data.toString()

        if(out[max] !== undefined) {
            if(out[max-1] !== undefined) {
                if(out[max-2] !== undefined) {
                    printout()
                }
            }
        }
    }))
}) 
}

function printout () {
    for (y = 2; y < process.argv.length; y++)
    console.log(out[y])
}