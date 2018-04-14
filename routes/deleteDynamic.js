/* 删除用户动态路由 */
var Dynamic = require('../models/dynamic')

module.exports = function(req, res) {
    var data = req.body

    Dynamic.remove({_id: data._id}, function(err) {
        if (err) {
            res.send(err)
            return
        } else {
            res.send({
                status: 1,
                msg: '删除成功'
            })
        }
    })
}