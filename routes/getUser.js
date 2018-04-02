/* 获得用户信息路由 */
var User = require('../models/user')

module.exports = function(req, res) {
    var data = req.query

    User.findOne({username: data.username}, function(err, doc) {
        // if (err) {
        //     res.send(err)
        //     console.log(err)
        // } else {
        //     if (doc == null) {
        //         res.send({
        //             status: 0,
        //             msg: '该用户不存在'
        //         })
        //     } else {
        //         res.send(doc)
        //     }
        // }
    })
    // .populate('following')
    .exec(function(err, docc) {
        console.log(docc)
        res.send(docc.following)
    })
}

