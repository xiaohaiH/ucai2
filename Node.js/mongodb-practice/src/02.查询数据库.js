const MongoClient = require("mongodb").MongoClient;
// let ObjectId = require("mongodb").ObjectID; ///这个是获取ID的，暂时用不到.
let url = "mongodb://120.27.245.209:27017/CS"; ///连接的数据库地址.
/* 连接数据库,参数一：地址；参数二：回调(错误和)； */
MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log("连接失败");
        return;
    };
    console.log("连接成功");
    /* 插入Start */
    db.collection("person").insertOne({ name: "四红", age: 888, sex: "中性" }, function(err, data) {
        if (err) {
            console.log("数据写入错误");
            return;
        };
        console.log("数据写入成功");
    });
    /* 插入Start */
    /* 查询Start */
    var cursor = db.collection("person").find({});
    cursor.each(function(err, doc) {
        if (doc != null) {
            console.log("查询成功");
            console.log(doc);
        } else {
            console.log("查询失败");
        }
    });
    /* 查询End */
    /* 更新Start */
    console.log("我来了");
    db.collection("person").updateOne({ name: "四红" }, { $set: { age: "hahaha" } }, function(err, result) {
        if (err) {
            console.log("数据更新失败");
            return;
        };
        console.log("数据更新成功");

        db.close();
        // console.log("数据库关闭");
    });
    /* 更新End */
    // /* 删除Start */
    // db.collection("person").deleteMany({ age: 888 }, function(err, data) {
    //     console.log(data, err);
    //     if (err) {
    //         console.log("删除失败了呃");
    //         return;
    //     };
    //     console.log("删除成功");
    //     db.close();
    //     console.log("数据库成功关闭");
    // });
    // /* 删除End */

});