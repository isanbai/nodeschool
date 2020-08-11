function checkUserValid(goodUsers) {
    return function (submittedUsers) {
        return submittedUsers.every(function(submittedUsers) {
            return goodUsers.some(function(goodUsers){
                return goodUsers.id == submittedUsers.id
            })
        })
    }
}

module.exports = checkUserValid