/* 获取全部用户动态路由 */
var Dynamic = require('../models/dynamic')
var UserInfo = require('../models/userInfo')

module.exports = function(req, res) {
    var data = req.query

    var page = parseInt(data.page),  // 页   码
        limit = parseInt(data.limit) // 页数据量

    Dynamic
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
                        _id: doc.origin_id
                    }, function(err, docc) {
                        if (err) {
                            res.send(err)
                            return
                        } else {
                            var tDoc = {
                                _id: doc._id,
                                origin_id: doc.origin_id,
                                nickname: docc.nickname,
                                share: doc.share,
                                type: doc.type,
                                story: doc.story,
                                fav: doc.fav,
                                commit: doc.commit
                            }

                            newDocs.push(tDoc)
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