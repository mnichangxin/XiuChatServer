/* 获得用户行为路由 */
var UserInfo = require('../models/userInfo')
var Dynamic = require('../models/dynamic')
var UserActivity = require('../models/userActivity')

module.exports = function(req, res) {
    var data = req.query

    var page = parseInt(data.page),  // 页   码
        limit = parseInt(data.limit) // 页数据量

    UserActivity
        .find()
        .sort({_id: -1})
        .skip((page - 1) * limit)
        .limit(limit)
        .exec(function(err, docs) {
            if (err) {
                res.send(err)
                return
            } else {
                var newDocs = []

                docs.forEach(function(doc) {
                    UserInfo.findOne({
                        _id: doc.user_id
                    }, function(err, docc) {
                        if (err) {
                            res.send(err)
                            return
                        } else {
                            Dynamic.findOne({
                                _id: doc.dynamic_id
                            }, function(err, doccc) {
                                if (err) {
                                    res.send(err)
                                    return
                                } else {
                                    UserInfo.findOne({
                                        _id: doccc.origin_id
                                    }, function(err, docccc) {
                                        var tDoc = {
                                            userInfo: docc,
                                            dynamicInfo: {
                                                origin_nickname: docccc.nickname,
                                                origin_content: doccc.share
                                            },
                                            type: doc.type
                                        } 

                                        newDocs.push(tDoc)
                                    })
                                }
                            })
                        }
                    })
                })

                setTimeout(() => {
                    res.send({
                        status: 1,
                        msg: '获取成功',
                        data: newDocs
                    })
                }, 50)
            }
        })
}