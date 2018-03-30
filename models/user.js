/* User */
var mongoose = require('../utils/db')
var Following = require('./following')

var Schema = new mongoose.Schema({
    username: String,
    password: String,
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Following'
    }]
})

module.exports = mongoose.model('User', Schema)

