/* 获得用户信息 */
var UserInfo = require('../models/userInfo')

module.exports = function(req, res) {
    var data = req.query

    UserInfo.findOne({
        _id: data._id
    }, function(err, doc) {
        if (err) {
            res.send(err)
            return
        } else {
            if (doc == null) {
                res.send({
                    status: 0,
                    msg: '该用户不存在'
                })
            } else {
                res.send({
                    status: 1,
                    msg: '获取成功',
                    data: {
                        nickname: doc.username,
                        avatar: doc.avatar,
                        sex: doc.sex,
                        birthday: doc.birthday, 
                        area: doc.area,
                        signature: doc.signature
                    }
                })
            }
        }
    })
}