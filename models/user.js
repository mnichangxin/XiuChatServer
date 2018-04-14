/* 用户基本集合 */
var mongoose = require('../utils/db')
var UserInfo = require('./userInfo')
var Dynamic = require('./dynamic')

var Schema = new mongoose.Schema({
    username: String, // 用户名
    password: String, // 密码
    token: '' // 用户 token
})

module.exports = mongoose.model('User', Schema)




