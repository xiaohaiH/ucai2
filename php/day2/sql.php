<?php
header("Content-type: text/html; charset=utf-8");
$user = "root";
$pass = "";
$host = "localhost";
$dbname = 'one';
$utf8 = array(PDO::MYSQL_ATTR_INIT_COMMAND => "set names utf8");
$dbh = new PDO("mysql:host=".$host.";dbname=".$dbname,$user,$pass,$utf8);//这个是连接服务器的方法  第一个代表数据库地址，第二个代表数据库名，第三个代表服务器登录名，第四个代表服务器登录密码，第五个代表编码格式


$sql = "SELECT * FROM test";
$select = $dbh ->  query($sql);
foreach ($select as $row) {
    print $row['name']."\t";
    print $row['age']."\t";
    print $row['sex']."\n";
}