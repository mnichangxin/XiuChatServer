/* 获得用户信息路由 */
var User = require('../models/user')
var Follows = require('../models/follows')

module.exports = function(req, res) {
    var data = req.query

    Follows.findOne({following_id: data.following_id})
        .populate('following_id')
        .exec(function(err, doc) {
            res.send(doc)
        })
}

