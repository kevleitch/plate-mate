<?php
	$id = $_GET["id"];
	$email = $_GET["e"];
	$name = $_GET["n"];
	
	require_once("db.php");
	
	$result = $mysqli->query("SELECT googleid FROM user_tbl WHERE googleid = '$id' LIMIT 1");
	
	if($result->num_rows == 0) {
		$sql = "INSERT INTO user_tbl (googleid, email, fullname)VALUES ('$id', '$email', '$name')";
		if (mysqli_query($mysqli, $sql)) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "" . mysqli_error($conn);
        }
	} else {
		echo "already exists";
	}
	$mysqli->close();
?>