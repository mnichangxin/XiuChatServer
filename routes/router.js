/* 控制路由 */
var express = require('express')
var mongoose = require('../utils/db')
var router = express.Router()

var login = require('./login')
var register = require('./register')
var follow = require('./follow')
var unfollow = require('./unfollow')
var getFollowing = require('./getFollowing')
var getFollower = require('./getFollower')
var getUserInfo = require('./getUserInfo')
var updateUserInfo = require('./updateUserInfo')

router.post('/login', login)
router.post('/register', register)
router.post('/follow', follow)
router.post('/unfollow', unfollow)
router.get('/getFollowing', getFollowing)
router.get('/getFollower', getFollower)
router.get('/getUserInfo', getUserInfo)
router.post('/updateUserInfo', updateUserInfo)

module.exports = router