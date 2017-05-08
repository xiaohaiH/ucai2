<?php
require_once ("sql.php");//引入外部文件



//自定义变量
$post = $_POST;
$name = $post['name'];
$age = $post['age'];
$sex = $post['sex'];
$email = $post['email'];
$password = $post['pass'];
$password = md5($password);
//md5  调用函数给password加密
$insertsql = "insert into test (
				name,
				age,
				password,
				email,
				sex
			)values(
				'{$name}',
				'{$age}',
				'{$password}',
				'{$email}',
				'{$sex}'
			)";
//insert into user()values()是  sql的插入语句，values中的值对应user中的值

$result = $dbh ->exec($insertsql);//php里的PDO  通过exec执行数据库的操作并返回受影响的行数
print_r($result);
echo "注册成功";

$sql = 'SELECT * FROM test';//sql 查询语句
// $select = $dbh ->qurey($sql);//pdo查询语法

foreach ($dbh -> query($sql) as $row) {
	echo "pre";
	echo "以下用户注册成功";
	print_r($row['name']);
}//循环遍历----相当于js中的for in

