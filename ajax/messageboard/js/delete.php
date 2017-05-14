<?php
	require_once("sql.php");
	$get = $_GET;
	$name = $get['name'];
	$mess = $get['message'];
	$update = "UPDATE `notes` SET status = 20 WHERE name = '$name' AND message = '$mess' ";
	$updatesql = $dbh -> exec($update);
	if($updatesql){
		echo 1;
	}else{
		echo 0;
	};