/* 用户消息列表集合 */
var mongoose = require('../utils/db')

var Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // 用户 _id
    lists: [{
        name: String
    }] // 对象 / 群组名称
})

module.exports = mongoose.model('MsgList', Schema)