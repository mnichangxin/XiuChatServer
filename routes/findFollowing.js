/* 查看关注人路由 */
var User = require('../models/user')

module.exports = function(req, res) {
    var data = req.body

    User.find(function(err, docs) {
        if (err) {
            res.send(err)
            console.log(err)
        } else {
            docs.forEach(function(doc) {
                console.log(doc.following)
            })
            res.send('OK')
        }
    })
}

