/* 推荐群聊路由 */
var Group = require('../models/group')

var getRandomUsers = function(docs, num) {
    var shuffled = docs.slice(0), i = docs.length, min = i - num, temp, index
    
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random())
        temp = shuffled[index]
        shuffled[index] = shuffled[i]
        shuffled[i] = temp
    }

    return shuffled.slice(min)
}

module.exports = function(req, res) {
    var data = req.query

    Group.find(function(err, docs) {
        if (err) {
            res.send(err)
            return
        } else {
            var length = docs.length

            if (length / 2 == 0) {
                res.send({
                    status: 0,
                    msg: '没有可推荐的群聊'
                })
            } else {
                var newDocs = getRandomUsers(docs, length / 2)

                res.send({
                    status: "1",
                    msg: '推荐成功',
                    data: newDocs
                })
            }
        }
    })
}