'use strict'
const http = require('http')
const url = require('url')

const server = http.createServer(
    function (req, res) {
        let myurl = new URL(req.url, 'http://abc.com')
        let time = new Date(myurl.searchParams.get('iso'))
    if(time) {
        res.writeHead(200, {'Content-Type' : 'application/json'})
        if(myurl.pathname === '/api/parsetime')
        {res.end(JSON.stringify({
            'hour' : time.getHours(),
            'minute': time.getMinutes(),
            'second': time.getSeconds()
        }))}
        res.end(JSON.stringify({
            'unixtime': time.getTime()
        }))
    } else {
    res.writeHead(404)
    res.end()
    }
})

server.listen(Number(process.argv[2]))
