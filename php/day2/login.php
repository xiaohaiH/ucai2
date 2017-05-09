<?php
require_once ("sql.php");//引入外部文件

//自定义变量
$post = $_POST;
$name = $post['name'];
$sex = $post['sex'];
$password = $post['pass'];
$password = md5($password);
//md5  调用函数给password加密

$insertsql = "INSERT INTO abcde (
				name,password,sex
			)VALUES(
				'{$name}','{$password}','{$sex}'
			)";
//insert into user()values()是  sql的插入语句，values中的值对应user中的值

$result = $dbh ->exec($insertsql);//php里的PDO  通过exec执行数据库的操作并返回受影响的行数

$_SESSION['name'] = $name;
// echo $_SESSION['name'];
header("location:enter.php");








// echo "注册成功";
// print($result);

// $sql = 'SELECT * FROM abcde';//sql 查询语句
// // $select = $dbh ->qurey($sql);//pdo查询语法

// foreach ($dbh -> query($sql) as $row) {
// 	// echo "以下用户注册成功";
// 	echo "<pre>";
// 	print($row['name']);
// };//循环遍历----相当于js中的for in

