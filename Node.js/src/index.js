const http = require('http');

const hostname = '127.0.0.1';
// const hostname = '192.168.104.21';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    console.log("有人在请求");
    if (req.url == "/heiheihei") {
        res.setHeader("Content-Type", "text/plain;charset=UTF-8");
        res.end("如果你追到我,我就让你嘿嘿嘿!")
    } else if (req.url == "/xiaohai") {
        res.setHeader("Content-Type", "text/plain;charset=UTF-8");
        res.end("欢迎访问小海官方网站");
    } else if (req.url == "/home") {
        res.setHeader("Content-Type", "text/plain;charset=UTF-8");
        res.end("欢迎回到你家!");
    } else {
        res.setHeader("Content-Type", "text/plain;charset=UTF-8");
        res.end("欢迎访问终极网站");
    };
    // res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
    // res.end('Hello Xiaohai\n');
});

server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`);
});