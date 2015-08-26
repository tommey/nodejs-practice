function loadUsers(userIds, load, done) {
  done(userIds.map(load));
}

module.exports = loadUsers

