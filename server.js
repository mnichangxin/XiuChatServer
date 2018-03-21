/* Express 服务器 */
var express = require('express')
var bodyParser = require('body-parser')
var router = require('./routes/router')
var app = express()

// 端口号
var port = process.env.PORT || 8080

// 使用 router 中间件
app.use('/api', router)
// 使用 bodyParser 中间件
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
// 使用路由中间件
app.use('/api', router)

// 启动 Server
app.listen(port)

console.log('Server start at 8080...')

