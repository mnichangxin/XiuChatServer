/* 定义 Model */
var mongoose = require('./db.js')

var Schema = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('Model', Schema)

