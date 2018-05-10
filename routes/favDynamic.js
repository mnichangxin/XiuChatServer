/* 动态点赞路由 */
var Dynamic = require('../models/dynamic')
var UserActivity = require('../models/userActivity')

module.exports = function(req, res) {
    var data = req.body

    UserActivity.findOne({
        user_id: data._id,
        dynamic_id: data.dynamic_id,
        type: 0 
    }, function(err, doc) {
        if (err) {
            res.send(err)
            return
        } else {
            if (doc == null) {
                // 增加点赞
                Dynamic.updateOne({
                    _id: data.dynamic_id
                }, {
                    "$inc": {"fav": 1}
                }, function(err) {
                    if (err) {
                        res.send(err)
                        return
                    } else {
                        UserActivity.create({
                            user_id: data._id,
                            type: 0,
                            dynamic_id: data.dynamic_id
                        }, function(err) {
                            if (err) {
                                res.send(err)
                                return
                            } else {
                                res.send({
                                    "status": 1,
                                    "msg": '点赞成功'
                                })
                            }
                        }) 
                    }
                })  
            } else {
                // 取消点赞
                Dynamic.updateOne({
                    _id: data.dynamic_id
                }, {
                    "$inc": {"fav": -1}
                }, function(err) {
                    if (err) {
                        res.send(err)
                        return
                    } else {
                        UserActivity.remove({
                            user_id: data._id,
                            type: 0,
                            dynamic_id: data.dynamic_id
                        }, function(err) {
                            if (err) {
                                res.send(err)
                                return
                            } else {
                                res.send({
                                    "status": 2,
                                    "msg": '取消点赞成功'
                                })
                            }
                        }) 
                    }
                }) 
            }
        }
    })
}