/* User */
var mongoose = require('../utils/db')
var Following = require('./following')

var Schema = new mongoose.Schema({
    username: String, // 用户名
    password: String, // 密码
    following: [{
        type: mongoose.Schema.Types.ObjectId, // 关注的人
        ref: 'Following'
    }],
    follower: [{
        type: mongoose.Schema.Types.ObjectId // 被关注的人（粉丝）
    }]
})

module.exports = mongoose.model('User', Schema)

