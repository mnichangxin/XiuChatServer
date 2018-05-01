# XiuChatServer

“咻聊” 服务端

## Introduction

采用 `RESTful API` 架构模式，为客户端 APP 持续提供稳定的数据读取：

* Express 框架 (Node.js)
* Mongoose 中间件 (MongoDB)

## API

实际请求地址 `/api` 前加 `HOST`

**1. 登录接口**

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
        "msg": "登录成功",
        "data": {
            "_id": "用户 _id（ObjectID）"
            "token": "用户 token"
        }
    }
```

**2. 注册接口**

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

**3. 关注接口**

请求地址: `/api/follow`

请求方式：`POST`

请求参数：

``` json
    {
        "_id": "关注人 _id（ObjectID）",
        "follower_id": "被关注人 _id（ObjectID）",
        "token": "用户 token"
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

**4. 取消关注接口**

请求地址: `/api/follow`

请求方式：`POST`

请求参数：

``` json
    {
        "_id": "关注人 _id（ObjectID）",
        "follower_id": "被关注人 _id（ObjectID）",
        "token": "用户 token"      
    }
```

返回值：

-> 系统错误

``` json 

    {
        "status": -1,
        "msg": "系统错误"
    }
```

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

**5. 获得关注列表接口**

请求地址: `/api/getFollowing`

请求方式：`GET`

请求参数：

``` json
    {
        "_id": "用户 _id（ObjectID）",
        "page": "页码",
        "limit": "页数据量"
    }
```

返回值：

-> 关注列表

``` json
    [
        "用户 _id（ObjectID）",
        "用户 _id（ObjectID）",
        "......"
    ]
```

**6. 获得粉丝列表接口**

请求地址: `/api/getFollower`

请求方式：`GET`

请求参数：

``` json
    {
        "_id": "用户 _id（ObjectID）",
        "page": "页码",
        "limit": "页数据量"
    }
```

返回值：

-> 粉丝列表

``` json
    [
        "用户 _id（ObjectID）",
        "用户 _id（ObjectID）",
        "......"
    ]
```

**7. 更新用户信息接口**

请求地址: `/api/updateUserInfo`

请求方式：`POST`

请求参数：

``` json
    {
        "_id": "用户 _id（ObjectID）",
        "data": {
            "nickname": "...",
            "avatar": "...",
            "......"
        },
        "token": "用户 token"
    }
```

返回值：

-> 更新成功

``` json
    {
        "status": 1,
        "msg": "更新成功"
    }
```

**8. 获得用户信息接口**

请求地址: `/api/getUserInfo`

请求方式：`GET`

请求参数：

``` json
    {
        "_id": "用户 _id（ObjectID）"
    }
```

返回值：

-> 获取成功

``` json
    {
        "status": 1,
        "msg": "获取成功",
        "data": {
            "nickname": "...",
            "avatar": "...",
            "......",
            "following_num": "...",
            "followed_num": "..."
        }
    }
```

**9. 创建动态接口**

请求地址: `/api/createDynamic`

请求方式：`POST`

请求参数：

``` json
    {
        "origin_id": "用户 _id（ObjectID）",
        "type": "类型：Share/Story",
        "content": "内容",
        "story": "故事",
        "token": "用户 token"
    }
```

返回值：

-> 创建成功

``` json
    {
        "status": 1,
        "msg": "创建成功"
    }
```

**10. 删除动态接口**

请求地址: `/api/deleteDynamic`

请求方式：`POST`

请求参数：

``` json
    {
        "_id": "动态 _id（ObjectID）",
        "token": "用户 token"
    }
```

返回值：

-> 删除成功

``` json
    {
        "status": 1,
        "msg": "删除成功"
    }
```

**11. 获取用户动态列表接口**

请求地址: `/api/getUserDynamic`

请求方式：`GET`

请求参数：

``` json
    {
        "origin_id": "用户 _id（ObjectID）",
        "page": "页码",
        "limit": "页数据量",
        "token": "用户 token"
    }
```

返回值：

-> 获取成功

``` json
    {
        "status": 1,
        "msg": "获取成功"
    }
```