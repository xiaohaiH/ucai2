<?php
	session_start();
	header("Content-type:text/html;charset=utf-8");
	$utf8 = array(PDO::MYSQL_ATTR_INIT_COMMAND => "set names utf8");
	$dbh = new PDO("mysql:host=localhost;dbname=messageboard","root","",$utf8);