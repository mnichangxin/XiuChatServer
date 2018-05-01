/* 注册路由 */
var User = require('../models/user')
var UserInfo = require('../models/userInfo')

module.exports = function(req, res) {
    var data = req.body

    User.findOne({username: data.username}, function(err, doc) {
        if (err) {
            res.send(err)
            return
        } else {
            if (doc == null) {
                User.create({
                    username: data.username,
                    password: data.password,
                    token: null
                }, function(err, user) {
                    if (err) {
                        res.send(err) 
                        return
                    } else {
                        UserInfo.create({
                            _id: user._id,
                            nickname: data.username,
                            avatar: '',
                            sex: '',
                            birthday: '', 
                            area: '',
                            signature: ''
                        }, function(err) {
                            if (err) {
                                res.send(err)
                                return
                            } else {
                                res.send({
                                    status: 1,
                                    msg: '注册成功'
                                })
                            }
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