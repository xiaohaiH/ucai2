<?php
	session_start();//开始会话,设置页面类型,并设置编码; 连接数据库;
	header("Content-type:text/html;charset=utf-8");
	$utf8 = array(PDO::MYSQL_ATTR_INIT_COMMAND => "set names utf8");
	$dbh = new PDO("mysql:host=localhost;dbname=messageboard","root","",$utf8);