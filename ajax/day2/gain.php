<?php
	$get = $_GET;
	// if(empty($get['val'])){
		$url = "https://pic1.zhimg.com/v2-f4ded37f472d2f708e9b1450a4139064.jpg";
		$geturl = file_get_contents($url);
		// $geturl = json_decode($geturl);
		echo($geturl);
	// };