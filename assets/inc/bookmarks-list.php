<?php
$gid = $_SESSION['gid'];

require_once("assets/inc/db.php");

$bmresult = $mysqli->query("SELECT * FROM savedrecipies_tbl WHERE googleid = '$gid'");

if($bmresult->num_rows == 0) {
	echo "You have no Bookmarks yet";		
}else{
	echo "<ul>";
	while($bmrow = $bmresult->fetch_assoc()) {
		echo "<li><a href='recipe.php?recipeid=" . $bmrow['recipeid'] . "&cid=" . $bmrow['categoryid'] . "'>" . $bmrow['recipename'] . "</a> <a onclick='removebookmark(" . $bmrow['recipeid'] . ")' title='Remove Bookmark' href='#'><img src='assets/img/remove-icon.png' alt='Remove this bookmark' /></a></li>";
	}
	echo "</ul>";
}
		
//$mysqli->close();

?>