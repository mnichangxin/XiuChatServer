/* 登录拦截器 */
var isLogin = require('../utils/isLogin')

module.exports = function(req, res, next) {
    var data = req.body

    isLogin(data._id, data.token, function(status) {
        if (status == 'fail') {
            res.send({
                status: -1,
                msg: '用户未登录'
            })
            return
        } else {  
            next()
        }
    })
}