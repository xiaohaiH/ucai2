<?php

    $get = $_GET;
    $arr = ["aaa","ccc","aaa","ccc","aaa","ccc","aaa","ccc"];
    // echo "<pre>";
    // print_r($arr);
   	// array_push(推进去的数组,推送的值);//数组中的值推送至数组
    echo json_encode($arr);//将数组转换成字符串