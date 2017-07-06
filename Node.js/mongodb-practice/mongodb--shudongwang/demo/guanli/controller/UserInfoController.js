const db = require("../models/db");

exports.insert = function(req, res) {
    // console.log(res, res);
    console.log(req.query);

    // 获取了学生的信息
    var studentInfo = req.query;

    db.insertOne("student", studentInfo, function(err, data) {
        if (err) {
            console.log(err);
            res.json({ "status": 20, "data": "插入数据库错误" })
            return;
        }
        res.json({ "status": 10, "data": 1 })
    })
}

exports.all = function(req, res) {
    db.findAll("student",{},{math:-1},function(err,data){
        console.log(data);
        if(err){
            console.log("查询失败");
            res.send("查询失败");
        };

        const sendaaa = {"data":data,status:20};
        res.json(sendaaa);
        console.log("查询成功");
    });
}
