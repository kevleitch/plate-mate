<?php

session_start();

require_once("db.php");

$gid = $_SESSION['gid'];
$rid = $_GET['rid'];

$sql = "DELETE FROM savedrecipies_tbl WHERE googleid='$gid' AND recipeid='$rid'";

if ($mysqli->query($sql) === TRUE) {
  echo "Bookmark deleted successfully";
} else {
  echo "Error deleting bookmark: " . $mysqli->error;
}

?>