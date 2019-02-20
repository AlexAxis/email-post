const restful = require('node-restful')

const mongoose = restful.mongoose

const dbSchema = new mongoose.Schema({
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})


module.exports = restful.model('messagedb', dbSchema)