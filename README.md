# XiuChatServer

“咻聊” 服务端

## Introduction

采用 `RESTful API` 架构模式，为客户端 APP 持续提供稳定的数据读取：

* Express 框架 (Node.js)
* Mongoose 中间件 (MongoDB)

## API

实际请求地址 `/api` 前加 `HOST`

1. 登录接口

请求地址: `/api/login`

请求方式：`POST`

请求参数：

``` json
    {
        "username": "用户名",
        "password": "密码"
    }
```

返回值：

-> 用户名和密码有误 

``` json
    {
        "status": 0,
        "msg": "用户名和密码有误"
    }
```

-> 登录成功 

``` json
    {
        "status": 1,
        "msg": "登录成功"
    }
```

2. 注册接口

请求地址: `/api/register`

请求方式：`POST`

请求参数：

``` json
    {
        "username": "用户名",
        "password": "密码"
    }
```

返回值：

-> 用户名已存在

``` json
    {
        "status": 0,
        "msg": "用户名已存在"
    }
```

-> 注册成功 

``` json
    {
        "status": 1,
        "msg": "注册成功"
    }
```

3. 关注接口

请求地址: `/api/follow`

请求方式：`POST`

请求参数：

``` json
    {
        "follower_id": "关注人 _id（ObjectID）",
        "following_id": "被关注人 _id（ObjectID）"
    }
```

返回值：

-> 该用户已关注

``` json
    {
        "status": 0,
        "msg": "该用户已关注"
    }
```

-> 关注成功

``` json
    {
        "status": 1,
        "msg": "关注成功"
    }
```

4. 取消关注接口

请求地址: `/api/follow`

请求方式：`POST`

请求参数：

``` json
    {
        "follower_id": "关注人 _id（ObjectID）",
        "following_id": "被关注人 _id（ObjectID）"
    }
```

返回值：

-> 该用户未关注

``` json
    {
        "status": 0,
        "msg": "该用户未关注"
    }
```

-> 取消关注成功

``` json
    {
        "status": 1,
        "msg": "取消关注成功"
    }
```