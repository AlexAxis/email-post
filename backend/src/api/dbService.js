const messagedb = require('./db')

messagedb.methods(['get', 'post', 'put', 'delete'])
messagedb.updateOptions({new: true, runValidators: true})

module.exports = messagedb