/* 用户群组集合 */
var mongoose = require('../utils/db')

var Schema = new mongoose.Schema({
    group_name: String, // 群组名称
    group_manager_id: mongoose.Schema.Types.ObjectId, // 群主 _id
    group_member: [{
        group_member_id: mongoose.Schema.Types.ObjectId
    }] // 群组成员
})

module.exports = mongoose.model('Group', Schema)