const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/API', router)

    // POST and GET Routes
    const dbService = require('../api/dbService')
    dbService.register(router, '/contact')
}