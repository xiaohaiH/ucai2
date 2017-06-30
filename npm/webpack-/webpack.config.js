var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");///webpack2要求必须写.
	module.exports = {
		entry : ["./app.js"],///入口文件.
		output : {///输出路径.
			path : path.resolve(__dirname,"./dist/js/"),
			filename: "bundle.js"
		},
		module : {
			loaders :[
				{
					test : /\.css$/,
                	include: path.resolve(__dirname, 'src'),///设置检索的相对路径.
                	exclude: path.resolve(__dirname, 'node_modules'),
					use: [
	                    { loader: 'style-loader' },
	                    { loader: 'css-loader' },
	                    { loader: 'postcss-loader' }
	                ]
				},
				{
					test : /\.js$/,
					// use : {loader : "babel-loader"}
				},
				{
					test : /\.html$/,///这个是在js中直接引入HTML时,需要这样来转义成js里的字符串.
					use :
						{loader : 'html-loader'}
				}
			]
		},
		plugins : [new HtmlWebpackPlugin({///这个是以自定义的HTML文件为模板来生成HTML文件,需要下载包并在顶部引入.
			template : "./src/index.html",
			filename : "[hash]-test.html",
			title : "welcome to hai's home",///当用了模板时,title不会生效,而不用模板时title则在默认index.html里生效.
			inject : "false",
		})]
	};
