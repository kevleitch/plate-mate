<?php
session_start();

if(isset($_SESSION['gid'])){ 
	$gid = $_SESSION['gid'];
	//echo $gid;
}
if(isset($_SESSION['email'])){ 
	$email = $_SESSION['email'];
	//echo $email;
}
if(isset($_SESSION['name'])){ 
	$name = $_SESSION['name'];
	//echo $name;
}
if(isset($_SESSION['pic'])){ 
	$pic = $_SESSION['pic'];
	//echo "pic: " . $pic;
}
if(isset($pic)) {
	$picpath = $pic;
}else{
	$picpath = 'assets/img/avatar.png';
}
?>