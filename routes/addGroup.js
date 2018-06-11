/* 加入群聊路由 */
var Group = require('../models/group')

module.exports = function(req, res) {
    var data = req.body

    Group.updateOne({
        _id: data.group_id
    }, {
        $push: {
            group_member: {
                group_member_id: data._id
            }
        }
    }, function(err) {
        if (err) {
            res.send(err)
            return
        } else {
            res.send({
                status: 1,
                msg: '加入群组成功' 
            })
        }
    })
}