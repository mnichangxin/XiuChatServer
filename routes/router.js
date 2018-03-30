/* 控制路由 */
var express = require('express')
var mongoose = require('../utils/db')
var router = express.Router()

var login = require('./login')
var register = require('./register')
var follow = require('./follow')
var unfollow = require('./unfollow')
var findFollowing = require('./findFollowing')

router.post('/login', login)
router.post('/register', register)
router.post('/follow', follow)
router.post('/unfollow', unfollow)
router.get('/findFollowing', findFollowing)

module.exports = router