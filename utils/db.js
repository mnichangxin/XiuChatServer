/* 连接 MongoDB */
var mongoose = require('mongoose')

// 本地配置
var HOST = '127.0.0.1'
var PORT = 27017
var DATABASE = 'xiuchat'

mongoose.connect('mongodb://' + HOST + ':' + PORT + '/' + DATABASE)

mongoose.connection.on('open', function() {
    console.log('数据库连接成功')
})
mongoose.connection.on('error', function() {
    console.log('数据库连接失败')
})
mongoose.connection.on('disconnected', function() {
    console.log('数据库断开')
})

module.exports = mongoose