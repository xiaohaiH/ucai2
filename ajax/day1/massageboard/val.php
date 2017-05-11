<?php
require_once("sql.php");
$get = $_GET;

//这个是将值添加到数据库和获取数据库里面的留言集合的！

//判断如果获取到的值为空时，则查询数据库里面的内容，然后将获取的内容发送给客户端(ajax的发送者);
//如果获取到的值 有内容时，则将获取到的值添加到数据库;

if(empty($get['val'])){
	$order = "SELECT `note` FROM note WHERE status = 10";
	$inquiresql = $link -> query($order);
	foreach($inquiresql as $key){
	// array_push($arr, $key['note']);
		echo $key['note'];
		echo "!@#$";
	};
}else{
	$val = $get['val'];
	$insetsql = "INSERT INTO `note`(note,status)VALUES('{$val}',10)";
	$link -> exec($insetsql);
};