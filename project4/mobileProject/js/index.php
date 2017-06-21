<?php
$get = $_GET;
$getUrl = $get['url'];
$data = file_get_contents($getUrl);
echo $data;