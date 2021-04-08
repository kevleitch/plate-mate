<?php

	session_start();
	$gid = $_SESSION['gid'];
	$loc = $_GET["loc"];
	$lat = $_GET["lat"];
	$lon = $_GET["lon"];
	
	require_once("db.php");
	
	if (!$mysqli) {
		die("Connection failed: " . mysqli_connect_error());
	}
	
	$sql = "UPDATE user_tbl SET loc='$loc',lat='$lat',longt='$lon' WHERE googleid='$gid'";
	
	if (mysqli_query($mysqli, $sql)) {
		echo "Record updated successfully";
	} else {
		echo "Record not updated: " . $sql . "" . mysqli_error($mysqli);
	}
	
	$mysqli->close();
	
?>