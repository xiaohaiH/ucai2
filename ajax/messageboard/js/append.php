<?php
	require_once("sql.php");
	$get = $_GET;
	if(empty($get)){
		session_unset();
		die();
	};
	$name = $get['name'];
	$time = time();
	$mess = $get['message'];
	$selectsql = "SELECT password FROM `notes` WHERE name = '$name'";
	$select = $dbh -> query($selectsql);
	foreach ($select as $key) {
		
	};
	$pass = $key['password'];
	$update = "INSERT INTO `notes`(
					message,status,name,password,updatatime
				)VALUES(
					'{$mess}',10,'{$name}','{$pass}','$time'
				)";
				echo $update;
	$updatesql = $dbh -> exec($update);