/* 注册路由 */
var User = require('../models/user')

module.exports = function(req, res) {
    var data = req.body
    
    User.find({name: data.name}, function(err) {
        if (err) {
            res.json({
                status: 0,
                msg: 'fail'
            })
        } else {
            res.json({
                status: 1,
                msg: 'success'
            })
        }
    })
    
    // User.create({
    //     name: data.name,
    //     password: data.password
    // }, function(err) {
    //     res.send('Register success!')
    // })
}