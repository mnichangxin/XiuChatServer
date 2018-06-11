/* 存储消息列表路由 */
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
            MsgList.updateOne({
                _id: data._id
            }, {
                $push: {
                    lists: {
                        name: data.name
                    }
                }
            }, {
                upsert: true
            }, function(err) {
                if (err) {
                    res.send(err)
                    return
                } else {
                    res.send({
                        status: 1,
                        msg: '存储成功'
                    })
                }
            })
        }
    })
}

