/* Following */
var mongoose = require('../utils/db')
var User = require('./user')

var Schema = new mongoose.Schema({
    username: {
        type: String,
        ref: 'User'
    }
})

module.exports = mongoose.model('Following', Schema)