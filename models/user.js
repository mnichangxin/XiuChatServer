/* 用户基本集合 */
var mongoose = require('../utils/db')
var UserInfo = require('./userInfo')

var Schema = new mongoose.Schema({
    username: String, // 用户名
    password: String, // 密码
    token: '', // 随机字符串 token
    userInfo: {       
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'UserInfo'
    }
})

module.exports = mongoose.model('User', Schema)




