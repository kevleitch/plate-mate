<?php
session_start();

if(isset($_SESSION['gid'])){ 
	$gid = $_SESSION['gid'];
}
if(isset($_SESSION['email'])){ 
	$email = $_SESSION['email'];
}
if(isset($_SESSION['name'])){ 
	$name = $_SESSION['name'];
}
if(isset($_SESSION['pic'])){ 
	$pic = $_SESSION['pic'];
}
if(isset($_SESSION['uloc'])){ 
	$loc = $_SESSION['uloc'];
}
If(isset($_SESSION['latitude'])){
	$latitude = $_SESSION['latitude'];
}
If(isset($_SESSION['longitude'])){
	$longitude = $_SESSION['longitude'];
}	
if(isset($pic)) {
	$picpath = $pic;
}else{
	$picpath = 'assets/img/avatar.png';
}
?>