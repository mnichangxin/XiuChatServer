# XiuChatServer

“咻聊” 服务端

## Introduction

采用 `RESTful API` 设计模式，为客户端 APP 持续提供稳定的数据读取：

* Express 框架 (Node.js)
* Mongoose 数据库中间件 (MongoDB)

## API

1. 登录接口

url: `/api/login`

返回值：

* 成功

``` json
{
    "status": 1,
    "msg": "登录成功"
}
```

* 失败

``` json
{
    "status": 0,
    "msg": "用户名和密码错误"
}
```

2. 注册接口

url: `/api/register`

返回值：

* 成功

``` json
{
    "status": 1,
    "msg": "注册成功"
}
```

* 失败

``` json
{
    "status": 1,
    "msg": "用户已存在"
}
```