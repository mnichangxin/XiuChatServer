/* 关注路由 */
var User = require('../models/user')

module.exports = function(req, res) {
    var data = req.body

    User.findOne({_id: data.follower_id}, function(err, doc) {
        if (err) {
            res.send(err)
            console.log(err)
        } else {
            User.findOne({following: data.following_id}, function(err, docc) {
                if (err) {
                    res.send(err)
                    console.log(err)
                } else {
                    if (docc == null) {
                        var followings = doc.following
                        
                        followings.push(data.following_id)

                        User.update({following: followings}, function(err) {
                            if (err) {
                                res.send(err)
                                console.log(err)
                            } else {
                                res.send({
                                    status: 1,
                                    msg: '关注成功'
                                })
                            }
                        }) 
                    } else {
                        res.send({
                            status: 0,
                            msg: '该用户已关注'
                        })
                    }
                }
            })
        }   
    })
}