<?php
$gid = $_SESSION['gid'];	
$latitude = $_SESSION['latitude'];
$longitude = $_SESSION['longitude'];
	
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

function distance($lat1, $lon1, $lat2, $lon2, $unit) {
  if (($lat1 == $lat2) && ($lon1 == $lon2)) {
    return 0;
  }
  else {
    $theta = $lon1 - $lon2;
    $dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
    $dist = acos($dist);
    $dist = rad2deg($dist);
    $miles = $dist * 60 * 1.1515;
    $unit = strtoupper($unit);

    if ($unit == "K") {
      return ($miles * 1.609344);
    } else if ($unit == "N") {
      return ($miles * 0.8684);
    } else {
      return $miles;
    }
  }
}
	
foreach ($friendArr as $fa) {
	
	$newresult = $mysqli->query("SELECT * FROM user_tbl WHERE googleid = '$fa'");
					
	if($newresult->num_rows == 0) {
		echo "nothing";
	}else{
		echo "<ul>";
		while($nrow = $newresult->fetch_assoc()) {
			echo "<li><img height='30' src='" . $nrow['pic']. "' alt='' /> " . $nrow['fullname'] . ", from <strong>" . $nrow['loc'] . "</strong><br />Approx " . round(distance($latitude,$longitude,$nrow['lat'],$nrow['longt'], 'M'), 0) . " miles from you.</li>";
		}
		echo "</ul>";
	}		
}
				
//$mysqli->close();
?>