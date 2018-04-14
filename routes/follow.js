/* 关注路由 */
var Follows = require('../models/follows')

module.exports = function(req, res) {
    var data = req.body

    Follows.find({_id: data._id}, function(err, docs) {
        if (err) {
            res.send(err)
            return
        } else {
            var isFollow = false

            if (docs.length > 0) {
                for (var i = 0; i < docs.length; i++) {
                    if (docs[i].follower_id == data.follower_id) {
                        isFollow = true
                    }
                }              
            }

            if (isFollow) {
                res.send({
                    status: 0,
                    msg: '该用户已关注'
                })
            } else {
                Follows.create({
                    _id: data._id,
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
            }
        }
    })   
}