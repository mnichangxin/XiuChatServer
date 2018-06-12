/* Express 服务器 */
var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer')
var session = require('express-session')
var router = require('./routes/router')

var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)

var socket = require('./socket.io/socket.server')

// 端口号
var port = process.env.PORT || 8080

// 解析 application/json
app.use(bodyParser.json())
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))
// 解析 multipart/form-data
app.use(multer())

// 使用 express-session 中间件
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false
}))

// 使用路由中间件
app.use('/api', router)

// 启动 Server
server.listen(port)

console.log('Server start at 8080...')

// 启动 Socket 服务
socket.start(io)
