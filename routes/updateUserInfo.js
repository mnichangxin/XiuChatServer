/* 更新用户信息 */
var UserInfo = require('../models/userInfo')

module.exports = function(req, res) {
    var data = req.body
    
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
}