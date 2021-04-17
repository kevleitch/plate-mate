<?php
session_start();

require_once("db.php");

$gid = $_SESSION['gid'];
$fid = $_GET['fid'];

$sql = "UPDATE friends_tbl SET friend_status = 0 WHERE user_id=$gid AND friend_id=$fid";
$sql2 = "UPDATE friends_tbl SET friend_status = 0 WHERE user_id=$fid AND friend_id=$gid";

if ($mysqli->query($sql) === TRUE) {
  echo "Friend removed successfully";
} else {
  echo "Error removing Friendship: " . $mysqli->error;
}
if ($mysqli->query($sql2) === TRUE) {
  // do nothing
} else {
 // still nothing
}
?>