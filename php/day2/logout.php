<?php
	session_start();
	// print_r($_SESSION) ;
	session_unset();
	header("location:enter.php");
