/* 获得关注列表 */
var Follows = require('../models/follows')

module.exports = function(req, res) {
    var data = req.query

    var page = parseInt(data.page),  // 页   码
        limit = parseInt(data.limit) // 页数据量

    Follows
        .find({following_id: data._id})
        .populate('follower_id')
        .skip((page - 1) * limit)
        .limit(limit)
        .exec(function(err, docs) {
            if (err) {
                res.send(err)
                return
            } else {    
                if (docs == []) {
                    res.send([])
                } else {
                    var followings = []

                    docs.forEach(function(doc) {
                        followings.push(doc.follower_id._id)
                    })

                    res.send(followings)
                }
            }
        })
}

