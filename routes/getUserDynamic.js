/* 获取用户个人动态路由 */
var Dynamic = require('../models/dynamic')

module.exports = function(req, res) {
    var data = req.query

    var page = parseInt(data.page),  // 页   码
        limit = parseInt(data.limit) // 页数据量

    Dynamic
        .find({origin_id: data._id})
        .sort({_id: -1})
        .skip((page - 1) * limit)
        .limit(limit)
        .exec(function(err, docs) {
            if (err) {
                res.send(err)
                return
            } else {
                res.send({
                    status: 1,
                    msg: '获取成功',
                    data: docs
                })
            }
        })
}