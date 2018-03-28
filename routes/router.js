/* 控制路由 */
var express = require('express')
var mongoose = require('../utils/db')
var router = express.Router()

var login = require('./login')
var register = require('./register')
var follow = require('./follow')

router.post('/login', login)
router.post('/register', register)
router.post('/follow', follow)

module.exports = router