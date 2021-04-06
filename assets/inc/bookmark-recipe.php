<?php

	session_start();
	
	$gid = $_SESSION['gid'];

	$rn = $_GET["rn"];
	$rid = $_GET["rid"];
	$rc = $_GET["rc"];
	
	require_once("db.php");
	
	$result = $mysqli->query("SELECT recipeid FROM savedrecipies_tbl WHERE recipeid = '$rid' AND googleid = '$gid'");
	
	if($result->num_rows == 0) {	
		$sql = "INSERT INTO savedrecipies_tbl (googleid, recipename, recipeid, categoryid) VALUES ('$gid', '$rn', '$rid', '$rc')";
		if (mysqli_query($mysqli, $sql)) {
			echo "New bookmark saved";
		} else {
			echo "Error saving bookmark: " . $sql . "" . mysqli_error($mysqli);
		}
	}else {
		echo "You have already saved this recipie as a Bookmark";
	}
	
	$mysqli->close();	
	
?>