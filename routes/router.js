/* 控制路由 */
var express = require('express')
var mongoose = require('../utils/db')
var router = express.Router()

var login = require('./login')
var register = require('./register')
var follow = require('./follow')
var unfollow = require('./unfollow')
var getUser = require('./getUser')

router.post('/login', login)
router.post('/register', register)
router.post('/follow', follow)
router.post('/unfollow', unfollow)
router.get('/getUser', getUser)

module.exports = router