/* 生成随机字符串 */
module.exports = function(len) {  
    len = len || 32

    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' 
    var maxPos = chars.length
   
    var pwd = ''

    for (i = 0; i < len; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * (maxPos + 1)))
    }

    return pwd
}  