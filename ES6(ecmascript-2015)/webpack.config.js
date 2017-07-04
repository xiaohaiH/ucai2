const webpack = require("webpack");
var path = require("path");
module.exports = {
    entry: './src/index.js', ///设置入口路径.
    output: { ///这个是设置输出路径和文件名.
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    watch: true, ///这个是修改内容自动编译
    module: { ///这个是设置插件的地方.
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};