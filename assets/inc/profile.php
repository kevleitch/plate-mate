<?php

	session_start();

	$id = $_GET["id"];
	$email = $_GET["e"];
	$name = $_GET["n"];
	$pic = $_GET["p"];
	
	require_once("db.php");
	
	$result = $mysqli->query("SELECT googleid FROM user_tbl WHERE googleid = '$id' LIMIT 1");
	
	if($result->num_rows == 0) {
		$sql = "INSERT INTO user_tbl (googleid, email, fullname, pic, loc) VALUES ('$id', '$email', '$name', '$pic', '')";
		
		if (mysqli_query($mysqli, $sql)) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "" . mysqli_error($mysqli);
        }
	} else {
		echo "already exists";
	}
	
	$mysqli->close();	
		
	$_SESSION['gid'] = $id;
	$_SESSION['email'] = $email;
	$_SESSION['name'] = $name;
	$_SESSION['pic'] = $pic;
	
?>