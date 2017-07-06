var MongoClient = require("mongodb").MongoClient;
let url = "mongodb://120.27.245.209:27017/四红cp";
let Object = require("mongodb").ObjectID;

MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log("数据库连接失败");
        return;
    };
    console.log("数据库连接成功");
    let obj = { name: "卿松四红", sex: "两者", age: "嘿嘿嘿", "口头禅": "嘿嘿嘿" };
    db.collection("hero").insertOne(obj, function(err, data) {
        if (err) {
            console.log("数据写入失败");
            return;
        };
        console.log("数据写入成功");
        db.close();
        console.log("数据库连接关闭");
    });
});