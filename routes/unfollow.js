/* 取消关注路由 */
var Follows = require('../models/follows')

module.exports = function(req, res) {
    var data = req.body

    Follows.findOne({following_id: data.following_id}, function(err, doc) {
        if (err) {
            res.send(err)
            return
        } else {
            if (doc == null) {
                res.send({
                    status: -1,
                    msg: '系统错误'
                })
            } else {
                if (doc.follower_id == data.follower_id) {
                    Follows.remove({following_id: doc.following_id}, function(err) {
                        if (err) {
                            res.send(err)
                            return
                        } else {
                            res.send({
                                status: 1,
                                msg: '取消关注成功'
                            })
                        }
                    })
                } else {
                    res.send({
                        status: 0,
                        msg: '该用户未关注'
                    })
                }
            }
        }
    })
}