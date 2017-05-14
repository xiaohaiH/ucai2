<?php

	$post = $_POST;
	// if(!empty($post["src"])){
		$geturl = file_get_contents("https://pic4.zhimg.com/v2-f2c54d1d61b0b21030f354d3bcf6a3bf.jpg");
		echo $geturl;
		// exit;
	// };