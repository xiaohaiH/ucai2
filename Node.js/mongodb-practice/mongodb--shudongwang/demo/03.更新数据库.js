const MongoClient = require('mongodb').MongoClient;

let url = "mongodb://120.27.245.209:27017/stark";
let ObjectId = require('mongodb').ObjectID;

// 连接数据库
MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log("数据库连接失败");
        return;
    }
    console.log("数据连接成功");
    var data = { "name": "stark" };
    db.collection("people").updateOne(data, { $set: { "age": 24 } }, function(err, result) {
        if (err) {
            console.log("数据更新失败");
            return;
        }
        console.log("数据更新成功");
        db.close();
        console.log("数据库连接关闭");
    })
})