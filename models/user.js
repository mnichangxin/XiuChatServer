/* Model --- User */
var mongoose = require('../utils/db')

var Schema = new mongoose.Schema({
    username: String,
    password: String
})

module.exports = mongoose.model('users', Schema)

