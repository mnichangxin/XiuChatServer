/* 获得关注列表 */
var Follows = require('../models/follows')

module.exports = function(req, res) {
    var data = req.query

    Follows
        .find({following_id: data._id})
        .populate('follower_id')
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

