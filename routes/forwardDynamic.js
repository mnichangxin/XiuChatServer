/* 动态转发路由 */
var Dynamic = require('../models/dynamic')
var UserActivity = require('../models/userActivity')

module.exports = function(req, res) {
    var data = req.body

    Dynamic.updateOne({
        _id: data.dynamic_id
    }, {
        "$inc": {"forward": 1}
    }, function(err) {
        if (err) {
            res.send(err)
            return
        } else {
            UserActivity.create({
                user_id: data._id,
                type: 2,
                dynamic_id: data.dynamic_id
            }, function(err) {
                if (err) {
                    res.send(err)
                    return
                } else {
                    res.send({
                        "status": 1,
                        "msg": '转发成功'
                    })
                }
            })
        }
    })
}