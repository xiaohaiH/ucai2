<?php
	require_once("sql.php");

	//这个是注册代码;

	$get = $_GET;
	$name = $get["name"];
	$pass = $get["password"];
	$pass = md5($pass);
	$selectsql = "SELECT id,name FROM `notes` WHERE name = '$name'";
	$runquery = $dbh -> query($selectsql);//查询数据库里是否存在该用户
	// $arr = [];
	foreach($runquery as $key){
		// array_push($arr,$key);
	};
	if(empty($key['name'])){//当数据库里不存在该用户时,则将发送过来的用户名和密码存储进数据库,并设定留言和状态的初始值. 并将该用户存储进会话中$_SESSION['name']      存在该用户时,直接返回用户已经被注册(0);
		$insertsql = "INSERT INTO `notes`(
						name,password,message,status
					)VALUES(
						'{$name}','{$pass}','请留言',20
					)";
		$runinert = $dbh -> exec($insertsql);

		$runquery = $dbh -> query($selectsql);
		$arr = [];
		foreach($runquery as $key){
			array_push($arr,$key);
		};
		$_SESSION['name'] = $name;
		echo json_encode($arr);
	}else{
		echo 0;
	};
