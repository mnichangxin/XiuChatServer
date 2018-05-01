/* 登录路由 */
var User = require('../models/user')
var random = require('../utils/random')

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
                var token = random(32)
                User.updateOne({
                    username: doc.username
                }, {
                    token: token
                }, function(err) {
                    if (err) {
                        res.send(err)
                        return
                    } else {
                        res.send({
                            status: 1,
                            msg: '登录成功',
                            data: {
                                _id: doc._id,
                                token: token
                            }
                        })
                    }
                })
            } else {
                res.send({
                    status: 0,
                    msg: '用户名或密码有误'
                })
            }
        }
    })
}
