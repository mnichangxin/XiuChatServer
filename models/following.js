/* Following */
var mongoose = require('../utils/db')

var Schema = new mongoose.Schema({
    username: Array
})

module.exports = mongoose.model('Following', Schema)