<?php
require_once("sql.php");
$get = $_GET;
$note = $get['val'];

$updatesql = "UPDATE `note` SET status = 20 WHERE note = '$note'";
// echo $updatesql;
$link -> exec($updatesql);