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
	div:nth-child(1){height:500px;background: violet;}
	div:nth-child(2){height:500px;background: orange;}
</style>
<body>
	<div>
		<p>用户名：<?php  echo $_SESSION['name'];  ?></p>
		<a href="logout.php" >退出登录</a>
		</form>
	</div>
	<div>
		<?php  echo $_SESSION['name'];  ?>
	</div>
</body>
</html>