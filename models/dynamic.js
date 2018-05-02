/* 用户动态集合 */
var mongoose = require('../utils/db')

var Schame = new mongoose.Schema({
    origin_id: mongoose.Schema.Types.ObjectId, // 用户 _id
    type: Number, // 类型：Share(0) / Story(1)
    share: String, // 分享
    story: String, // 故事
    fav: Number, // 点赞数
    commit: [{
        commit_id: String,
        commit_content: String
    }] // 评论
})

module.exports = mongoose.model('Dynamic', Schame)