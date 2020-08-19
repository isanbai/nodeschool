'use strict'
const http = require('http')
const map = require('through2-map')

const server = http.createServer(
    function(req, res){
        if (req.method !== 'POST') {
            return res.end('post me\n')
        }
        let data = req.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase()
        }))
        data.pipe(res)        
    }
)

server.listen(Number(process.argv[2]))