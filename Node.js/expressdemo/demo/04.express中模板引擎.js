var express = require("express");
var app = express();

///设置模板引擎,设置为ejs.
app.set("view engine", "ejs");


/// res.render:渲染.
app.get("/", function(req, res) {
    res.render("index.ejs", {
        "xuesheng": ["小海", "晓晓", "筱筱"]
    });
});
app.listen(30);