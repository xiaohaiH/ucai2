<?php
require_once ("sql.php");//引入外部文件

//自定义变量
$post = $_POST;
$_SESSION['name'] = $post['user'];
$weather = $post['mood'];


$charsql = "SELECT * FROM `user` WHERE name =".$_SESSION['name'];
$charstart = $dbh -> query($charsql);
if(empty($charstart)){
	$_SESSION['error'] = "账号或密码错误";
	// header("location:sign.php");
	exit;
}else{
	$sqlupdate = "UPDATE user SET weather = '$weather' WHERE name = ".$name;
	$dbh -> exec($sqlupdate);
	$arr = array(
		1 => "晴天",
		2 => "阴雨天",
		3 => "多云的天气",
		4 => "太阳公公",
		5 => "大晴天",
		6 => "晒死个人",
	);
	// if(empty($option)){
	// 	$_SESSION['num'] = "";
	// 	// echo $_SESSION['num'];
	// }else{
		$_SESSION['num'] =	$arr[$option];
	// };
	// header("location:index.php");
};
