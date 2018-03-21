/* Model --- 登录/注册 */
var mongoose = require('../utils/db.js')

var Schema = new mongoose.Schema({
    name: String,
    password: String
})

module.exports = mongoose.model('User', Schema)

