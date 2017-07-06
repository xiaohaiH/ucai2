const MongoClient = require("mongodb").MongoClient; ///引入mongodb.
///.
let url = "mongodb://127.0.0.1:27017/xiaohai"; //连接数据库,写本地连接或远程的.
let ObjectId = require("mongodb").ObjectID;

///连接数据库.
MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log("数据库连接失败");
        return;
    };
    console.log("数据库连接成功");
    var data = { "name": "hahaha", sex: "man" };
    db.collection("people").insertOne(data, function(err, result) {
        if (err) {
            console.log("数据插入失败");
            return;
        };
        console.log("数据插入成功");
        db.close();
        console.log("数据库关闭");
    })
});