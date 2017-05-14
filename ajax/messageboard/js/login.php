<?php
	require_once("sql.php");
	$get = $_GET;
	$name = $get['name'];
	$pass = $get['password'];
	$pass = md5($pass);
	$select = "SELECT * FROM `notes` WHERE name = '$name'";
	$selectsql = $dbh -> query($select);
	foreach($selectsql as $key){
		$getid = json_encode($key["id"]);
	};

	//0代表用户名错误;
	//1代表完全正确;换成ID了
	//2代表密码错误;
	if(empty($key)){
		echo 0;
		die();
	};
	$select = "SELECT * FROM `notes` WHERE name = '$name' AND password = '$pass'";
	$selectsql = $dbh -> query($select);
	foreach($selectsql as $key){
		$_SESSION['name'] = $name;
		echo $getid;
		die();
	};
	echo 2;