<?php

	$get = $_GET;
	// $get['page'] = "aa";

	$page = $get['page'];
	// echo $page;

	$data = "http://yx.xianjian.com/p/api.php?method=wf&api_key=nimakdkeiLdkfen2lidkdlDLLEKd&page=".$page."&per_page=10&tag=&type=5&order=2&_ksTS=1494932475911_32&jsoncallback=jsonp33";
	$data = file_get_contents($data);
	echo $data;