/* 获取动态详情路由 */
var Dynamic = require('../models/dynamic')
var UserInfo = require('../models/userInfo')

module.exports = function(req, res) {
    var data = req.query

    Dynamic.findOne({
        _id: data._id
    }, function(err, doc) {
        if (err) {
            res.send(err)
            return
        } else {
            if (doc == null) {
                res.send({
                    status: 0,
                    msg: '动态不存在'
                })
            } else {
                UserInfo.findOne({
                    _id: doc.origin_id
                }, function(err, docc) {
                    if (err) {
                        res.send(err)
                        return
                    } else {
                        let userInfo = docc
                        let commiterInfo = []

                        doc.commit.forEach(function(item) {
                            UserInfo.findOne({
                                _id: item.commit_id
                            }, function(err, doccc) {
                                let ci = {
                                    _id: doccc._id,
                                    nickname: doccc.nickname,
                                    avatar: doccc.avatar,
                                    sex: doccc.sex,
                                    birthday: doccc.birthday,
                                    area: doccc.area,
                                    signature: doccc.signature,
                                    commit_content: item.commit_content
                                }

                                if (err) {
                                    res.send(err)
                                    return
                                } else {
                                    commiterInfo.push(ci)
                                }
                            })
                        })    
                        
                        setTimeout(() => {
                            res.send({
                                status: 1,
                                msg: '获取成功',
                                data: {
                                    userInfo: userInfo,
                                    commiterInfo: commiterInfo,
                                    share: doc.share,
                                    type: doc.type,
                                    story: doc.story,
                                    fav: doc.fav,
                                    forward: doc.forward
                                }
                            })
                        }, 50)
                    }
                })
            }
        }
    })
}