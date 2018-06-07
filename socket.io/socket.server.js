/* Socket 服务端 */

// 服务启动
var start = function(io) {

    io.on('connection', function(socket) {
        var room = null

        console.log('用户连接成功...')

        // 用户进入房间
        socket.on('join', function(data) {
            var data = JSON.parse(data)

            console.log(data.name + '加入了该群聊')

            room = data.room

            socket.join(room)
            socket.broadcast.to(room).emit('join', {
                msg: data.name + '加入了该群聊'
            })
        })
        
        // 用户发送消息
        socket.on('message', function(data) {
            var data = JSON.parse(data)

            console.log(data.name + '：' + data.msg)

            socket.broadcast.to(room).emit('message', {
                name: data.name,
                msg: data.msg
            })
        })

        // 用户断开连接
        socket.on('disconnect', function() {
            console.log('用户断开连接...')

            socket.broadcast.to(room).emit('message', {
                name: data.name,
                msg: data.msg
            })
        })
    })
}

module.exports = {
    start: start
}

