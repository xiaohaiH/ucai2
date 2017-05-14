<?php
	require_once("sql.php");

	//这个是增加留言和退出当前会话的代码;

	$get = $_GET;
	if(empty($get)){//判断发送过来的数据是否存在值,不存在值的时,退出会话,并停止执行以下代码(将退出当前用户写在同一个页面了);
		session_unset();
		die();
	};
	$name = $get['name'];
	$mess = $get['message'];
	$time = time();
	$selectsql = "SELECT password FROM `notes` WHERE name = '$name'";
	$select = $dbh -> query($selectsql);//查询数据库中该用户的密码(这段可不写);
	foreach ($select as $key) {

	};
	$pass = $key['password'];
	$update = "INSERT INTO `notes`(
					message,status,name,password,updatatime
				)VALUES(
					'{$mess}',10,'{$name}','{$pass}','$time'
				)";
	$updatesql = $dbh -> exec($update);//将用户,留言,更新时间,状态和密码存储进数据库;成功返回1,失败返回0;
	if($updatesql){
		echo 1;
	}else{
		echo 0;
	};