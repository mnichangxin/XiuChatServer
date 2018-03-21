/* 注册路由 */
var User = require('../models/user')

module.exports = function(req, res) {
    User.create({
        name: '18954109152',
        password: '123456'
    }, function(err) {
        res.send('Register success!')
    })
}