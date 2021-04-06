<?php
$gid = $_SESSION['gid'];
	
require_once("assets/inc/db.php");
				
$friendArr = [];
				
$result = $mysqli->query("SELECT friend_id FROM friends_tbl WHERE user_id = '$gid'");
				
if($result->num_rows == 0) {
	echo "You have no friends yet <img height='20' src='./assets/img/sad-smilie.png' alt='sad smilie' />";		
}else{
	while($row = $result->fetch_assoc()) {
		$fid = $row["friend_id"];
		array_push($friendArr,$fid);
	}
}
				
foreach ($friendArr as $fa) {
	
	$newresult = $mysqli->query("SELECT * FROM user_tbl WHERE googleid = '$fa'");
					
	if($newresult->num_rows == 0) {
		echo "nothing";
	}else{
		echo "<ul>";
		while($nrow = $newresult->fetch_assoc()) {
			echo "<li><img height='30' src='" . $nrow['pic']. "' alt='' /> " . $nrow['fullname'] . ", from <strong>" . $nrow['loc'] . "</strong></li>";
		}
		echo "</ul>";
	}		
}
				
$mysqli->close();
?>