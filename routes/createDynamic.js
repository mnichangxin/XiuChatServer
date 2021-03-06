/* 创建个人动态路由 */
var Dynamic = require('../models/dynamic')

module.exports = function(req, res) {
    var data = req.body 

    Dynamic.create({
        origin_id: data._id,
        share: data.share,
        type: parseInt(data.type),
        story: data.story,
        forward: 0,
        fav: 0,
        commit: []
    }, function(err) {
        if (err) {
            res.send(err)
            return
        } else {
            res.send({
                status: 1,
                msg: '创建成功'
            })
        }
    })
}