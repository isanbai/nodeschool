function repeat(operation, num) {
    if (num % 10 === 0) {
        setTimeout(function() {
          repeat(operation, --num)
        })
      } else {
        repeat(operation, --num)
      }

    if (num <= 0) return
    operation()

}

module.exports = repeat