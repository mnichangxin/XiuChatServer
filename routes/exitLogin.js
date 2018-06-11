/* 退出登录 */
var User = require('../models/user')

module.exports = function(req, res) {
    var data = req.body

    User.findOne({
        _id: data._id
    }, function(err, doc) {
        if (err) {
            res.send(err)
            return
        } else {
            User.updateOne({
                _id: data._id
            }, {
                token: ''
            }, function(err) {
                if (err) {
                    res.send(err)
                    return
                } else {
                    res.send({
                        status: 1,
                        msg: '退出登录成功'
                    })
                }
            })
        }
    })
}