const http = require("http");
const fs = require("fs");
const urlLib = require("url");

const server = http.createServer(function(req, res) {
        var urlobj = urlLib.parse(req.url, true);
        switch (urlobj.pathname) {
            case "/":
                fs.readFile("login-server/index.html", function(err, data) {
                    if (err) {
                        res.end("404");
                        return;
                    };
                    res.setHeader("Content-Type", "text/html;charset=UTF-8");
                    res.end(data);
                })
                break;
            case "/tijiao":
                var str = "姓名：" + urlobj.query.xingming;
                str += "快慢：" + urlobj.query.status;
                str += "留言：" + urlobj.query.message;
                fs.appendFile("login-server/static/servey.md", str + "\n", function(err, data) {
                    if (err) {
                        res.setHeader("Content-Type", "text/html;charset=UTF-8");
                        res.end(str + "提交失败" + err);
                    };
                    res.setHeader("Content-Type", "text/html;charset=UTF-8");
                    res.end(str + "提交成功");
                });
                break;
            default:
                res.setHeader("Content-Type", "text/html;charset=UTF-8");
                res.end("没有这个页面");
                break;
        }
    })
    // const server = http.createServer(function(req, res) {
    //     res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
    //     if () {
    //         if (res.end(req.method) == "get") {
    //             console.log("object")
    //             fs.appendFile("./static/servey.md", "", function(err, data) {

//             });
//         } else {
//             console.log("123")
//         };
//     } else {
//         fs.readFile("login-server/index.html", function(err, data) {
//             if (err) {
//                 res.write("err");
//             } else {
//                 res.write(data);
//             };
//             res.end();
//         });
//     };
// });
server.listen(3991);