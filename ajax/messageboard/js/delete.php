<?php
	require_once("sql.php");

	//这个是删除留言的代码;

	$get = $_GET;
	$name = $get['name'];
	$mess = $get['message'];
	$update = "UPDATE `notes` SET status = 20 WHERE name = '$name' AND message = '$mess' ";
	$updatesql = $dbh -> exec($update);//将该用户和该留言相匹配,将其删除(更改状态);成功返回1,失败返回0;
	if($updatesql){
		echo 1;
	}else{
		echo 0;
	};