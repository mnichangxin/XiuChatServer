/* 用户信息集合 */
var mongoose = require('../utils/db')
var UserInfo = require('./userInfo')

var Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // 用户 _id
    nickname: String, // 昵称
    avatar: String, // 头像
    sex: String, // 性别
    birthday: String, // 生日 
    area: String, // 地区
    signature: String // 签名
})

module.exports = mongoose.model('UserInfo', Schema)