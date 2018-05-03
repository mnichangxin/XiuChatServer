/* 用户行为集合 */
var mongoose = require('../utils/db')

var Schame = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId, // 用户 _id
    type: Number, // 点赞（0）/ 评论（1）
    dynamic_id: mongoose.Schema.Types.ObjectId // 动态 _id
})

module.exports = mongoose.model('UserActivity', Schame)