/* 获得用户信息 */
var UserInfo = require('../models/userInfo')
var Follows  = require('../models/follows')

module.exports = function(req, res) {
    var data = req.query

    UserInfo.findOne({
        _id: data._id
    }, function(err, doc) {
        if (err) {
            res.send(err)
            return
        } else {
            if (doc == null) {
                res.send({
                    status: 0,
                    msg: '该用户不存在'
                })
            } else {
                Follows.find({
                    _id: data._id
                }, function(err, doccs) {
                    if (err) {
                        res.send(err)
                        return
                    } else {            
                        Follows.find({
                            follower_id: data._id
                        }, function(err, docccs) {
                            if (err) {
                                res.send(err)
                                return
                            } else {
                                res.send({
                                    status: 1,
                                    msg: '获取成功',
                                    data: {
                                        nickname: doc.nickname,
                                        avatar: doc.avatar,
                                        sex: doc.sex,
                                        birthday: doc.birthday, 
                                        area: doc.area,
                                        signature: doc.signature,
                                        following_num: doccs.length,
                                        followed_num: docccs.length
                                    }
                                })
                            }
                        })
                    }
                })
            }
        }
    })
}