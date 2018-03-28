/* Following */
var mongoose = require('../utils/db')

var Schema = new mongoose.Schema({
    username: String
})

module.exports = mongoose.model('Following', Schema)