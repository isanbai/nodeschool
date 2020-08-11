function repeat(operation, num) {
    if (num > 0) return repeat(operation, --num)

}

module.exports = repeat