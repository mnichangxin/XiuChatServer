/* 取消关注路由 */
var User = require('../models/user')

module.exports = function(req, res) {
    var data = req.body

    User.findOne({_id: data.follower_id}, function(err, doc) {
        if (err) {
            res.send(err)
            console.log(err)
        } else {
            User.findOne({following: data.following_id}, function(err, docc) {
                if (err) {
                    res.send(err)
                    console.log(err)
                } else {
                    if (docc == null) { 
                        res.send({
                            status: 0,
                            msg: '该用户未关注'
                        })
                    } else {
                        // 更新关注人
                        User.update({_id: data.follower_id}, {'$pull': {following: data.following_id}}, function(err) {
                            if (err) {
                                res.send(err)
                                console.log(err)
                            } else {
                                // 更新被关注人
                                User.update({_id: data.following_id}, {'$pull': {follower: data.follower_id}}, function(err) {
                                    if (err) {
                                        res.send(err)
                                        console.log(err)
                                    } else {
                                        res.send({
                                            status: 1,
                                            msg: '取消关注成功'
                                        })
                                    }
                                })
                            }
                        })
                    }
                }
            })
        }   
    })
}