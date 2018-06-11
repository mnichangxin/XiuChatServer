/* 获得消息列表路由 */
var MsgList = require('../models/msgList')

module.exports = function(req, res) {
    var data = req.body

    MsgList.findOne({
        _id: data._id
    }, function(err, doc) {
        if (err) {
            res.send(err)
            return
        } else {
            var lists = doc.lists

            res.send({
                status: 1,
                msg: '获取成功',
                data: lists
            })
        }
    })
}