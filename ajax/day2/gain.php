<?php 
	$get = $_GET;
	// $getval = $get['val'];
	if(empty($get['val'])){
		$url = "http://news-at.zhihu.com/api/4/news/latest";
		$geturl = file_get_contents($url);
		$geturl = json_decode($geturl);
		echo(json_encode($geturl)) ;
	};