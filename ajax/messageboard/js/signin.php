<?php
	require_once("sql.php");
	$get = $_GET;
	$name = $get["name"];
	$pass = $get["password"];
	$pass = md5($pass);
	$selectsql = "SELECT id,name FROM `notes` WHERE name = '$name'";
	$runquery = $dbh -> query($selectsql);
	// $arr = [];
	foreach($runquery as $key){
		// array_push($arr,$key);
	};
	if(empty($key['name'])){
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
		echo "用户已经被注册了";
	};
