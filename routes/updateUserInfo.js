/* 更新用户信息 */
var UserInfo = require('../models/userInfo')

module.exports = function(req, res) {
    var data = req.body    
    var updateData = {}

    updateData.nickname = data.nickname
    updateData.birthday = data.birthday
    updateData.sex      = data.sex
    updateData.area     = data.area
    updateData.signature = data.signature

    UserInfo.updateOne({
        _id: data._id
    }, updateData , function(err) {
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