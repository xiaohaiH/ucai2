<?php
	session_start();
	$post = $_POST;
	$option = $post['mood'];
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
	header("location:index.php");
	// echo $_SESSION['num'];
