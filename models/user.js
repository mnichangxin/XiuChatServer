/* Model --- 登录 */
var mongoose = require('../utils/db')

var Schema = new mongoose.Schema({
    name: String,
    password: String
})

module.exports = mongoose.model('User', Schema)

