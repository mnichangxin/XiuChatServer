/* 关注路由 */
var Follows = require('../models/follows')

module.exports = function(req, res) {
    var data = req.body

    Follows.findOne({following_id: data.following_id}, function(err, doc) {
        if (err) {
            res.send(err)
            return
        } else {
            if (doc == null || doc.follower_id != data.follower_id) {
                Follows.create({
                    following_id: data.following_id,
                    follower_id: data.follower_id
                }, function(err) {
                    if (err) {
                        res.send(err)
                        return
                    } else {
                        res.send({
                            status: 1,
                            msg: '关注成功'
                        })
                    }
                })
            } else {
                res.send({
                    status: 0,
                    msg: '该用户已关注'
                })
            }
        }
    })
}