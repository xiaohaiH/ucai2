const http = require("http");
const geturl = require("url");
const fs = require("fs"); ///引入fs模块.
const server = http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
    const a = { a: 'a', b: 'b', c: 'c' }
    res.write(JSON.stringify(a));
    res.end("你已经成功访问了");
});
server.listen(30);