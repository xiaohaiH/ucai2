<?php
	session_start();

	if(empty($_SESSION['name'])){
			header("location:sign.php");
	};
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<style type="text/css">
	body,p{margin:0;padding:0;}
	body{position:relative;}
	header{height:80px;position:fixed;width:100%;background:violet;line-height: 80px;}
	header p{margin:0px 40px;float:left;width:200px;}
	form{padding: 80px;}
	form p{margin-bottom:15px;}
</style>
<body>
	<header>
		<p><span>用户名：<?php echo $_SESSION['name']; ?></span><a href="update.php">退出</a></p>
		<p>今天的天气：<?php echo $_SESSION['num']; ?></p>
	</header>
	<form action="login.php" method="post">
		<p><label><input type="radio" value="1" name="mood">晴天</label></p>
		<p><label><input type="radio" value="2" name="mood">阴雨天</label></p>
		<p><label><input type="radio" value="3" name="mood">多云的天气</label></p>
		<p><label><input type="radio" value="4" name="mood">太阳公公</label></p>
		<p><label><input type="radio" value="5" name="mood">大晴天</label></p>
		<p><label><input type="radio" value="6" name="mood">晒死个人</label></p>
		<input type="submit" name="">
	</form>
</body>
</html>