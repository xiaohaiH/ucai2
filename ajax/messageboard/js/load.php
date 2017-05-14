<?php
	require_once("sql.php");
	//设置时区 ,默认非中国时区;
	date_default_timezone_set('PRC'); //设定时区，在获取时间的时候保证与中国地区的时区相等;

	$select = "SELECT message,name,updatatime FROM `notes` WHERE status = 10 ORDER BY id DESC";//查询数据库里的留言
	$selectsql = $dbh -> query($select);//开始查询数据库里的内容
	$arr = [];
	if(!empty($_SESSION['name'])){
	//首先判断session会话里的name是否有值,在有值的情况下
		//1.查询数据库里是否存在该用户，不存在则退出该会话;
		//2.存在该用户,将此用户推送到要发送给前端的数组中.
	//session会话里name没有值,则推送数字0到数组中.
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
	//将数据库中的留言通过遍历推送到将要发送给前端的数组中,并将里面的时间替换成正常的时间.然后将数组发送给前台.
	foreach($selectsql as $key){
		$time = date("Y-m-d H:i:s",$key["updatatime"]);
		$key["updatatime"] = $time;
		array_push($arr,$key);
	};

	echo json_encode($arr);