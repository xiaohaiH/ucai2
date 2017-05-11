<?php
require_once("sql.php");
$get = $_GET;


if(empty($get['val'])){
	$order = "SELECT `note` FROM note WHERE status = 10";
	$inquiresql = $link -> query($order);
	foreach($inquiresql as $key){
	// array_push($arr, $key['note']);
		echo $key['note'];
		echo "!@#$";
	};
}else{
	$val = $get['val'];
	$insetsql = "INSERT INTO `note`(note,status)VALUES('{$val}',10)";
	$link -> exec($insetsql);
};