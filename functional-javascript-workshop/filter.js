function getShortMessages(messages) {
    return messages.filter(function (word) {
        return word.message.length < 50
    }).map(function (value) { return value.message})
}

module.exports = getShortMessages