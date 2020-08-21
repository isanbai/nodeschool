const { Readable } = require('stream')

const myStream = new Readable({})
myStream.content = process.argv[2]

myStream._read = function (size) {

    if (!this.content) return this.push(null)
    this.push(this.content.slice(0, size))
    this.content = this.content.slice(size)
}

myStream.pipe(process.stdout)

/*
const { Readable } = require('stream')

class ReadableStream extends Readable {
  constructor (content, options = {}) {
    super(options)
    this.content = content
  }

  _read (size) {
    if (!this.content) return this.push(null)

    this.push(this.content.slice(0, size))
    this.content = this.content.slice(size)
  }
}

const stream = new ReadableStream(process.argv[2])
stream.pipe(process.stdout)
*/