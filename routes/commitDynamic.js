/* 动态评论路由 */
var Dynamic = require('../models/dynamic')
var UserActivity = require('../models/userActivity')

module.exports = function(req, res) {
    var data = req.body

    Dynamic.update({
        _id: data.dynamic_id
    }, {
        $push: {
            "commit": {
                "commit_id": data._id,
                "commit_content": data.content
            }
        }
    }, function(err) {
        if (err) {
            res.send(err)
            return
        } else {
            UserActivity.create({
                user_id: data._id,
                type: 1,
                dynamic_id: data.dynamic_id
            }, function(err) {
                if (err) {
                    res.send(err)
                    return
                } else {
                    res.send({
                        "status": 1,
                        "msg": '评论成功'
                    })
                }
            })
        }
    })
}