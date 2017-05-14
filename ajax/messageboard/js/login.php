<?php
	require_once("sql.php");

	//这个是登陆代码;

	$get = $_GET;//获取前端发送过来的数据,并将密码加密
	$name = $get['name'];
	$pass = $get['password'];
	$pass = md5($pass);
	$select = "SELECT * FROM `notes` WHERE name = '$name'";
	$selectsql = $dbh -> query($select);//查询数据库是否存在该用户名
	foreach($selectsql as $key){//这段代码可以不用写,前面想的有点少！！！！！！
		$getid = json_encode($key["id"]);
	};

	//0代表用户名错误;
	//1代表完全正确;换成ID了
	//2代表密码错误;
	if(empty($key)){//用户名不存在(0)数据库中则退出下列脚本的执行，存在则继续.
		echo 0;
		die();
	};
	$select = "SELECT * FROM `notes` WHERE name = '$name' AND password = '$pass'";
	$selectsql = $dbh -> query($select);//用户名存在时检查是否与密码相匹配,存在则返回,并将用户添加进会话中$_SESSION[name],不存在则返回密码错误(2);
	foreach($selectsql as $key){
		$_SESSION['name'] = $name;
		echo $getid;
		die();
	};
	echo 2;