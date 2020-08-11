function loadUsers(userIds, load, done) {
    var completed = 0
    userIds.forEach(function(ids, index) {
        load(ids, function(user) {
          users[index] = user
          if (++completed === userIds.length) 
          return done(users)
        })
      })
}

module.exports = loadUsers