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
            "_id": "用户 _id（ObjectID）",
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
        "token": "用户 token",
        "nickname": "...",
        "avatar": "...",
        "......"
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
            "...": "...",
            "following_num": "...",
            "followed_num": "..."
        }
    }
```

**9. 创建个人动态接口**

请求地址: `/api/createDynamic`

请求方式：`POST`

请求参数：

``` json
    {
        "_id": "用户 _id（ObjectID）",
        "type": "类型：Share(0) / Story(1)",
        "share": "分享",
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

**10. 删除个人动态接口**

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

**11. 获取用户个人动态列表接口**

请求地址: `/api/getUserDynamic`

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

-> 获取成功

``` json
    {
        "status": 1,
        "msg": "获取成功",
        "data": {
            "": ""
        }
    }
```

**12. 获取全部用户动态列表接口**

请求地址： `/api/getAllUserDynamic`

请求方式：`GET`

请求参数：

``` json
    {
        "page": "页码",
        "limit": "页数据量"
    }
```

-> 获取成功

``` json
    {
        "status": 1,
        "msg": "获取成功",
        "data": {
            "": ""
        }
    }
```

**13. 动态点赞接口**

请求地址： `/api/favDynamic`

请求方式：`POST`

请求参数：

``` json
    {
        "_id": "用户 _id（ObjectID）",
        "dynamic_id": "动态 _id（ObjectID）",
        "token": "用户 token"
    }
```

-> 点赞成功

``` json
    {
        "status": 1,
        "msg": "点赞成功"
    }
```

-> 取消点赞成功

``` json
    {
        "status": 2,
        "msg": "取消点赞成功"
    }
```

**14. 动态评论接口**

请求地址： `/api/commitDynamic`

请求方式：`POST`

请求参数：

``` json
    {
        "_id": "用户 _id（ObjectID）",
        "dynamic_id": "动态 _id（ObjectID）",
        "content": "评论内容",
        "token": "用户 token"
    }
```

-> 评论成功

``` json
    {
        "status": 1,
        "msg": "评论成功"
    }
```

**15. 获取动态详情接口**

请求地址： `/api/getDynamicDetail`

请求方式：`GET`

请求参数：

``` json
    {
        "_id": "动态 _id（ObjectID）"
    }
```

-> 动态不存在

``` json
    {
        "status": 0,
        "msg": "动态不存在"
    }
```

-> 获取成功

``` json
    {   
        "status": 1,
        "msg": "获取成功",
        "data": {
            "userInfo": {
                "_id": "用户 _id（ObjectID）",
                "nickname": "昵称",
                "avatar": "头像",
                "...": "..."
            },
            "commiterInfo": [
                {
                    "_id": "用户 _id（ObjectID）",
                    "nickname": "昵称",
                    "avatar": "头像",
                    "...": "..."
                },
                {
                    "...": "..."
                }
            ],
            "share": "分享内容",
            "story": "故事内容",
            "type": "类型",
            "fav": "点赞数"
        }
    }
```

**16. 动态转发接口**

请求地址： `/api/forwardDynamic`

请求方式：`POST`

请求参数：

``` json
    {
        "_id": "用户 _id（ObjectID）",
        "dynamic_id": "动态 _id（ObjectID）",
        "token": "用户 token"
    }
```

-> 评论成功

``` json
    {
        "status": 1,
        "msg": "转发成功"
    }
```

**17. 获取全部用户行为列表接口**

请求地址： `/api/getAllUserActivity`

请求方式：`GET`

请求参数：

``` json
    {
        "_id": "行为 _id（ObjectID）",
        "page": "页码",
        "limit": "页数据量"
    }
```

-> 获取成功

``` json
    {
        "status": 1,
        "msg": "转发成功",
        "data": [
            {
                "type": "行为类型：点赞（0）/ 评论（1）/ 转发 (2)",
                "userInfo": {
                    "...": "..."
                },
                "dynamicInfo": {
                    "...": "..."
                }
            },
            {
                "...": "..."
            }
        ]
    }
```

**18. 推荐用户接口**

请求地址： `/api/recommendedUsers.js`

请求方式：`GET`

请求参数：

``` json
    {}
```

-> 获取成功

``` json
    {
        "status": 1,
        "msg": "推荐成功",
        "data": [
            {
                "nickname": "",
                "...": "..."
            },
            {
                "...": "..."
            }
        ]
    }
```

**19. 加入群聊接口**

请求地址： `/api/addGroup.js`

请求方式：`POST`

请求参数：

``` json
    {
        "_id": "用户 _id（ObjectID）",
        "group_id": "群聊 _id（ObjectID）",
        "token": "用户 token"
    }
```

-> 加入成功

``` json
    {
        "status": 1,
        "msg": "加入成功",
        "data": {
            "groupInfo": {
                "group_name": "群名",
                "group_count": "群人数"
            },
            "group": [
                {
                    "nickname": "",
                    "...": "..."
                },
                {
                    "...": "..."
                }
            ]
        }
    }
```

**20. 获取群聊接口**

请求地址： `/api/getGroup.js`

请求方式：`POST`

请求参数：

``` json
    {
        "_id": "用户 _id（ObjectID）",
        "group_id": "群聊 _id（ObjectID）",
        "token": "用户 token"
    }
```

-> 获取成功

``` json
    {
        "status": 1,
        "msg": "获取成功",
        "data": {
            "groupInfo": {
                "group_name": "群名",
                "group_count": "群人数"
            },
            "group": [
                {
                    "nickname": "",
                    "...": "..."
                },
                {
                    "...": "..."
                }
            ]
        }
    }
```