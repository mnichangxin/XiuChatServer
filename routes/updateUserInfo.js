/* 更新用户信息 */
var UserInfo = require('../models/userInfo')
var isLogin = require('../utils/isLogin')

module.exports = function(req, res) {
    var data = req.body
    
    isLogin(data._id, data.token, function(status) {
        if (status == 'success') {
            UserInfo.updateOne({
                _id: data._id
            }, data.data , function(err) {
                if (err) {
                    res.send(err)
                    return
                } else {
                    res.send({
                        status: 1,
                        msg: '更新成功'
                    })
                }
            })
        } else {
            res.send({
                status: 0,
                msg: '用户未登录'
            })
        }
    })
}