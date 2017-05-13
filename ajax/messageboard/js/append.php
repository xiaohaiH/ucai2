<?php
	require_once("sql.php");
	$get = $_GET;
	$name = $get['name'];
	$id = $get['id'];
	$mess = $get['message'];
	$update = "UPDATE `notes` SET message = '$mess',status = 10 WHERE name = '$name' AND id = $id";
	// echo $update;
	$updatesql = $dbh -> exec($update);