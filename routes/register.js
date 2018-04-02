/* 注册路由 */
var User = require('../models/user')

module.exports = function(req, res) {
    var data = req.body

    User.findOne({username: data.username}, function(err, doc) {
        if (err) {
            res.send(err)
            console.log(err)
        } else {
            if (doc == null) {
                User.create({
                    username: data.username,
                    password: data.password
                    // following: [],
                    // follower: []
                }, function(err) {
                    if (err) {
                        res.send(err)
                        console.log(err)
                    } else {
                       res.send({
                           status: 1,
                           msg: '注册成功'
                       })
                    }
                })
            } else {
                res.json({
                    status: 0,
                    msg: '用户已存在'
                })
            }
        }
    })
}