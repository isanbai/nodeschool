const http = require('http')
const bl = require('bl')
let out = []

for(let i = 2; i < process.argv.length; i++) {
http.get(process.argv[i], function (response) {
    response.pipe(bl(function(err, data) {
        if(err) { console.error(err) }
          out[i] = data.toString()

        if(i = process.argv.length) {
            console.log(out[0])
        }
    }))
}) 
}
