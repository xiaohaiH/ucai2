/*
模板引擎
1.ejs：用的比较多 
    EJS: - 是一个JavaScript模板库,用来生成json数据中生成HTML字符串.

    基本使用： 
    1.引入EJS
    2.创建一个模板
    3.使用视图工具组件

    用<%...%>包含js代码
    用<%=...%>输出变量 变量若包含 '<' '>' '&'等字符 会被转义
    用<%-...%>输出变量 不转义
    用<%- include('user/show') %>引入其他模板 包含 ./user/show.ejs
    用<%# some comments %>来注释，不执行不输出
    <%% 转义为 '<%'
    <% ... -%> 删除新的空白行模式?
    <%_ ... _%> 删除空白符模式

2.jade
*/

var ejs = require("ejs"); ///node模板引擎.
var templateString = "good，心情<%= xingqing %>啊，我快要<%= need %>了！";
var compileFunction = ejs.compile(templateString);
console.log(compileFunction);
var obj = {
    "xingqing": "好鸡冻",
    "need": "find work"
};
var htmlString = compileFunction(obj);

console.log(htmlString);


// var express = require("express");
// var app = express();