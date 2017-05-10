<?php
	$post = $_POST;
	$name = $post['name'];
	$pass = $post['password'];
	if($name == '小海'&&$pass == 'liuxingyu'){
		echo 1;
	}else{
		echo 0;
	};