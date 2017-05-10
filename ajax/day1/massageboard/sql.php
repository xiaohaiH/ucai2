<?php
	header("Content-type:text/html;charset=utf-8");
	$host = "localhost";
	$dbname = 'notes';
	$user = "root";
	$pass = "";
	$utf8 = array(PDO::MYSQL_ATTR_INIT_COMMAND => "set names utf8");
	$link = new PDO("mysql:host=".$host.";dbname=".$dbname,$user,$pass,$utf8);
