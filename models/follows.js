/* 用户关注集合 */
var mongoose = require('../utils/db')
var User = require('./user')

var Schema = new mongoose.Schema({
    following_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }, // 关注人 _id
    follower_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }  // 被关注人 _id
})

module.exports = mongoose.model('Follows', Schema)