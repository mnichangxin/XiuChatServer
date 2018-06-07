/* 创建群聊路由 */
var Group = require('../models/group')

module.exports = function(req, res) {
    var data = req.body

    Group.create({
        group_name: data.name,
        group_manager_id: data._id,
        group_member: []
    }, function(err) {
        if (err) {
            res.send(err)
            return
        } else {
            res.send({
                status: 1,
                msg: '创建成功',
                data: {
                    group_name: data.name,
                    group_manager_id: data._id
                }
            })
        }
    })
}