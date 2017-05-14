<?php
	require_once("sql.php");
	//设置时区 ,默认非中国时区;
	date_default_timezone_set('PRC');

	$select = "SELECT message,name,updatatime FROM `notes` WHERE status = 10 ORDER BY id DESC";
	$selectsql = $dbh -> query($select);
	$arr = [];
	if(!empty($_SESSION['name'])){
		$aaa = $_SESSION['name'];
		$selectid = "SELECT name FROM `notes` WHERE name = '$aaa'";
		$getid = $dbh -> query($selectid);
		foreach($getid as $value){
		};
		if(empty($value)){
			session_unset();
		}else{
			$arr[0] = $_SESSION['name'];
		};
	}else{
		$arr[0] = 0;
	};
	foreach($selectsql as $key){
		$time = date("Y-m-d H:i:s",$key["updatatime"]);
		$key["updatatime"] = $time;
		array_push($arr,$key);
	};

	echo json_encode($arr);