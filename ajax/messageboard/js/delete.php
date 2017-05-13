<?php
	require_once("sql.php");
	$get = $_GET;
	$id = $get['id'];
	$name = $get['name'];
	$mess = $get['message'];
	$update = "UPDATE `notes` SET status = 20 WHERE id = '$id' AND name = '$name' AND message = '$mess' ";
	$updatesql = $dbh -> exec($update);
	if($updatesql){
		echo 1;
	}else{
		echo 0;
	};