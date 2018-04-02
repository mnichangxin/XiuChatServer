/* 登录路由 */
var User = require('../models/user')

module.exports = function(req, res) {
    var data = req.body

    User.findOne({
        username: data.username,
        password: data.password
    }, function(err, doc) {
        if (err) {
            res.send(err)
            return
        } else {
            if (doc != null) {
                res.send({
                    status: 1,
                    msg: '登录成功'
                })
                req.session.username = data.username
            } else {
                res.send({
                    status: 0,
                    msg: '用户名或密码有误'
                })
            }
        }
    })
}
