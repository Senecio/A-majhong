/*
    server websocket framework.
*/

var express = require('express');
var app = express();

// 设置客户端根目录
app.use(express.static(__dirname + "/public"));
// 监听端口
var listenPort = process.env.LEANCLOUD_APP_PORT || 80;
app.listen( listenPort, function() {
    console.log('[DEBUG] Listening on *:' + listenPort);
});