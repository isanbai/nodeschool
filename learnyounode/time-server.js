const net = require('net')
const port = process.argv[2]
const server = net.createServer(function(socket){
    let date = new Date()
    date = format(date.getFullYear()) + 
    '-' +format(date.getMonth() +1) +
    '-' +format(date.getDate()) +
    ' ' +format(date.getHours()) +
    ':' +format(date.getMinutes()) +
    '\n'
    socket.end(date)

})
function format(i) {
    if(i < 10) {
        return '0' + i
    } return '' + i
}
server.listen(port)
