var express = require("express");
var app = express();
///node.js的框架.

///get方式访问.
/// res.send(数据)是发送给前台的数据.
/// res.json(对象)是以json格式发送数据给前台.
app.get("/", function(req, res) {
    res.send("hello world");
});

///"/user/:id"这个写法通过req.params.id获取，通过 . 点来获取  如果是正则括号内的则用数组方式获取.
app.get("/user/:id", function(req, res) {
    res.send("user id is  =   " + req.params.id);
});


app.get("/student/:banji/:xuexiao", function(req, res) {
    res.send("查看学生资料，班级 = " + req.params.banji + "  学号  =  " + req.params.xuexiao);
});

///post方式访问,写法一样.
app.post("/post", function(req, res) {
    res.send("嘿嘿嘿");
});


///use两种都可以使用.



app.listen(30);