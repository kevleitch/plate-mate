<?php
$gid = $_SESSION['gid'];	
$loc = $_SESSION['uloc'];
	
require_once("db.php");

	$latlong = $mysqli->query("SELECT lat, longt FROM user_tbl WHERE googleid = '$gid'");
					
	if($latlong->num_rows == 0) {
		echo "There's been an error";		
	}else{
		while($llrow = $latlong->fetch_assoc()) {
			$latitude = $llrow["lat"];	
			$longitude = $llrow["longt"];
			$_SESSION['latitude'] = $llrow["lat"];
			$_SESSION['longitude'] = $llrow["longt"];
		}
	}
				
$friendArr = [];
$result = $mysqli->query("SELECT friend_id FROM friends_tbl WHERE user_id = '$gid' AND friend_status='1'");
				
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
			echo "<li><img height='50' src='" . $nrow['pic']. "' alt='' /> <strong>" . $nrow['fullname'] . "</strong> " . $nrow['loc'] . ", " . round(distance($latitude,$longitude,$nrow['lat'],$nrow['longt'], 'M'), 0) . " miles away. <a class='directions-link' title='Opens in a new tab' target='_blank' href='https://www.google.com/maps/dir/" . $nrow['loc'] . "/" . $loc . "/'>Directions</a><br /><a class='btn btn-secondary btn-sm' onclick='friendid(" . $fa . ")' href='#' role='button'>Unfriend</a> <a onclick='blockid(" . $fa . ")'class='btn btn-secondary btn-sm' href='#' role='button'>Unfriend &amp; Block</a></li>";
		}
		echo "</ul>";
	}		
}
				
//$mysqli->close();
?>