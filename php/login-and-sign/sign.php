<?php
	session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<style type="text/css">
	form{float: left;}
	form:nth-child(2){display: none;margin-left:40px;}
	button{margin-left:50px;}
	a{text-decoration:none; color: #666;width:50px;height: 25px;background:#E5E5E5;border:1px sollid red;margin-left:50px;}
</style>
<body>
	<form action="login.php" method="post">
		<p><label>用户名：<input type="text" name="user" placeholder="请输入用户名"></label><span>
		<?php
			if(empty($_SESSION['error'])){
				echo "";
			}else{
				echo $_SESSION['error'];
			};
		 // echo $_SESSION['error'];
		 ?>
		 </span></p>
		<p><label>密　码：<input type="password" name="password" placeholder="请输入密码"></label></p>
		<p><input type="submit" value="登录" name="" ><a href="javascript:;">注册</a></p>
	</form>
	<form action="update.php" method="post">
		<p><label>用户名：<input type="text" placeholder="请输入用户名" name="user"></label></p>
		<p><label>密　码：<input type="password" placeholder="请输入密码" name="password"></label></p>
		<p><button type="submit">注册</button></p>
	</form>
</body>
<script type="text/javascript">
	var obtn = document.getElementsByTagName("a")[0];
	var oinput = document.getElementsByTagName("form")[1];
	obtn.onclick = function(){
		oinput.style.display = "block";
	};
</script>
</html>