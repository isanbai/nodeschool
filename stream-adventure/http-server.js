const http = require('http')
const through = require('through2')

const stream = process.stdin.pipe(through(
    function(buf, enc, next) {
        this.push(buf.toString().toUpperCase())
        next()
    }
))

const server = http.createServer(
    function(req, res){
        if(req.method === 'POST') {
           req.pipe(stream).pipe(res)
        } else {
            res.end('POST !\n')
        }
    }
)

server.listen(Number(process.argv[2]))