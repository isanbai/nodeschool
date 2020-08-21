const websocket = require('ws')
const ws = new websocket('ws://localhost:8099')
const stream = websocket.createWebSocketStream(ws)

stream.write('hello\n')
stream.pipe(process.stdout)