<?php
require_once("sql.php");
//获取到的要删除的值，然后在数据库里更新他的状态
$get = $_GET;
$note = $get['val'];

$updatesql = "UPDATE `note` SET status = 20 WHERE note = '$note'";
// echo $updatesql;
$link -> exec($updatesql);