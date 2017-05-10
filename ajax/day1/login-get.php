<?php
	$get = $_GET;
	$name = $get['name'];
	$pass = $get['password'];
	if($name == "小海"&&$pass == "lisuxing"){
		echo  "1";
	}else{
		echo  "0";
	}
