/* 注册路由 */
var User = require('../models/user')

module.exports = function(req, res) {
    var data = req.body
    
    User.create({
        name: data.name,
        password: data.password
    }, function(err) {
        res.send('Register success!')
    })
}