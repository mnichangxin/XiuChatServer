/* Express 服务器 */
var express = require('express')
var bodyParser = require('body-parser')
var Model = require('./model.js')

var app = express()

// 配置 bodyParser 中间件
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

// 端口号
var port = process.env.PORT || 8080

// API 路由配置
var router = express.Router()

router.get('/', function(req, res) {
    res.json({
        message: 'Hello! Welcome!'
    })
})
router.route('/bears').post(function(req, res) {
    var model = new Model()

    model.name = req.body.name

    model.save(function(err) {
        if (err) {
            res.send(err)
        } else {
            res.json({
                message: 'Create succcess!'
            })
        }
    })
}).get(function(req, res) {
    Model.find(function(err, models) {
        if (err) {
            res.send(err)
        } else {
            res.json(models)
        }
    }) 
})
router.route('/bears/:bear_id').get(function(req, res) {
    Model.findById(req.params.bear_id, function(err, model) {
        if (err) {
            res.send(err)
        } else {
            res.json(model)
        }
    })
})

app.use('/api', router)

// 启动 Server
app.listen(port)

console.log('Server start at 8080...')

