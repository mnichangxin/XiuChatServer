# XiuChatServer

“咻聊” 服务端

## Introduction

采用 `RESTful API` 设计模式，为客户端 APP 持续提供稳定的数据读取：

* Express 框架 (Node.js)
* Mongoose 中间件 (MongoDB)

## API

实际请求地址 `/api` 前加 `HOST`

1. 登录接口

请求地址: `/api/login`
请求方式：`POST`
请求参数：`username: (String), password: (String)` 
返回值：`status: 0|1 (Number) 用户名或密码错误|成功`
`msg: (String) 结果描述`
举例：          
``` json
{
    "status": 1,
    "msg": "登录成功"
}
```

2. 注册接口

请求地址: `/api/register`
请求方式：`POST`
请求参数：`username: (String), password: (String)` 
返回值：`status: 0|1 (Number) 用户已存在|注册成功`
`msg: (String) 结果描述`
举例：          
``` json
{
    "status": 1,
    "msg": "注册成功"
}
```