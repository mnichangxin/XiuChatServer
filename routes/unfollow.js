/* 取消关注路由 */
var Follows = require('../models/follows')

module.exports = function(req, res) {
    var data = req.body

    Follows.find({_id: data._id}, function(err, docs) {
        if (err) {
            res.send(err)
            return
        } else {
            if (docs.length == 0) {
                res.send({
                    status: -1,
                    msg: '系统错误'
                })
            } else {
                var isFollow = false

                for (var i = 0; i < docs.length; i++) {
                    if (docs[i].follower_id == data.follower_id) {
                        isFollow = true                        
                    }
                }

                if (!isFollow) {
                    res.send({
                        status: 0,
                        msg: '该用户未关注'
                    })
                } else {
                    Follows.remove({
                        _id: data._id, 
                        follower_id: data.follower_id
                    }, function(err) {
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
                }
            }
        }
    })
}