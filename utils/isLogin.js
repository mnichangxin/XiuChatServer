/* 检查登录 */
var User = require('../models/user')

module.exports = function(_id, token, callback) {
    User.findOne({
        _id: _id
    }, function(err, doc) {
        if (err) {
            console.log(err)
            return
        } else {
            if (doc.token == token) {
                callback('success')
            } else {
                callback('fail')
            }
        }
    })
}