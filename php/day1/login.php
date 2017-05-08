
<?php
$post = $_POST;//获取表单的提交方式
//echo "恭喜成功".$_POST["hahaha"].$_POST["hehehe"];//输出账号和密码
//sleep(5);
echo $post["hahaha"];
header("location:./formPutIn.php");//返回原页面