<?php
	require_once("sql.php");
	$select = "SELECT message FROM `notes` WHERE status = 10 ORDER BY id DESC";
	$selectsql = $dbh -> query($select);
	$arr = [];
	foreach($selectsql as $key){
		array_push($arr,$key);
	};
	echo json_encode($arr);