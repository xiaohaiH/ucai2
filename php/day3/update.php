<?php
	require_once ("sql.php");//引入外部文件
//$post = $_POST;
$post = $_POST;
$name = $post['user'];
$password = $post['password'];
$password = md5($password);
//md5  调用函数给password加密


$charsql = "SELECT * FROM `user` WHERE name =".$name;
$charstart = $dbh -> exec($charsql);
$_SESSION['name'] = $name;

$insertsql = "INSERT INTO user (
				name,password
			)VALUES(
				'{$name}','{$password}'
			)";
//insert into user()values()是  sql的插入语句，values中的值对应user中的值

$result = $dbh ->exec($insertsql);//php里的PDO  通过exec执行数据库的操作并返回受影响的行数
$_SESSION['num'] = "";
// echo $_SESSION['name'];
header("location:index.php");








// echo "注册成功";
// print($result);

// $sql = 'SELECT * FROM abcde';//sql 查询语句
// // $select = $dbh ->qurey($sql);//pdo查询语法

// foreach ($dbh -> query($sql) as $row) {
// 	// echo "以下用户注册成功";
// 	echo "<pre>";
// 	print($row['name']);
// };//循环遍历----相当于js中的for in


