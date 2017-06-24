/*
    server websocket framework.
*/

var express = require('express');
var app = express();

// 设置客户端根目录
app.use(express.static(__dirname + "/public"));

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

// 监听端口
var listenPort = process.env.LEANCLOUD_APP_PORT || 80;
app.listen( listenPort, function() {
    console.log('[DEBUG] Listening on *:' + listenPort);
});