/* 创建动态路由 */
var Dynamic = require('../models/dynamic')

module.exports = function(req, res) {
    var data = req.body 

    Dynamic.create({
        origin_id: data._id,
        content: data.content,
        type: data.type,
        story: data.story,
        fav: 0,
        commit: []
    }, function(err, doc) {
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