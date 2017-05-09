<?php
require_once ("sql.php");//引入外部文件

//自定义变量
$post = $_POST;//接收服务器参数
$name = $post['user'];//将获取的用户名赋值
$password = $post['password'];//将获取的密码赋值
$password = md5($password);//将获取的密码加密
$weather = $post['mood'];//将单选框的value赋值
$username = $_SESSION['name'];//将当前会话的用户名赋值
// $charsqluser = "SELECT * FROM `user` WHERE name = '$name'";//sql查询语句，检查当前用户是否存在于数据库中
$charsqlpassword = "SELECT * FROM `user` WHERE password = '$password' AND name = '$name'";//sql查询语句，检查当前用户密码是否正确
echo $charsqlpassword;
$charstart = $dbh -> query($charsqlpassword);//在数据库中运行sql查询语句
if(empty($charstart)){//判断如果用户名和当前会话的值都为空时，执行当前命令
	$_SESSION['error'] = "账号或密码错误";//
	// header("location:sign.php");//跳转页面
	// exit;//停止执行下面的脚本；
	echo "aa";
}else{
	$_SESSION['name'] = $name;
	// header("location:index.php");
	echo "bb";
};
