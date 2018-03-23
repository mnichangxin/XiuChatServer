/* 控制路由 */
var express = require('express')
var mongoose = require('../utils/db')
var router = express.Router()

var login = require('./login')
var register = require('./register')

router.post('/login', login)
router.post('/register', register)

module.exports = router