<?php
	$sqlupdate = "UPDATE user SET weather = $weather WHERE name = '$username';";//sql更新状态语句，更新username下weather的值
	$run = $dbh -> exec($sqlupdate);//在数据库中运行sql查询语句
	$arr = array(
		1 => "晴天",
		2 => "阴雨天",
		3 => "多云的天气",
		4 => "太阳公公",
		5 => "大晴天",
		6 => "晒死个人",
	);
	echo "aaa";
	// if(empty($option)){
	// 	$_SESSION['num'] = "";
	// 	// echo $_SESSION['num'];
	// }else{
		$_SESSION['num'] =	$arr[$weather];//将当前的值赋给session会话
	// };
	// header("location:index.php");//跳转页面