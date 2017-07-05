var express = require("express");
var app = express();

/// res.send(数据)是发送给前台的数据.
/// res.json(对象)是以json格式发送数据给前台.
app.get('/photos?', function(req, res) {
    res.send("This is photos");
});

///地址是正则写法的,通过req.params[0] 数组方式获取,正则内需打括号.
app.get(/^\/banji([\d]{1})\/xuehao([\d]{2})$/, function(req, res) {
    var banji = req.params[0];
    var xuehao = req.params[1];
    res.json({ "banji": banji, "xuehao": xuehao });
});


app.listen(30);