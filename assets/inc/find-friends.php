<?php

session_start();
$gid = $_SESSION['gid'];

require_once("db.php");

$received_data = json_decode(file_get_contents("php://input"));

$data = array();

$result = $mysqli->query("SELECT * FROM user_tbl WHERE fullname LIKE '%".$received_data->query."%' AND googleid != '$gid' ORDER BY id DESC LIMIT 5");

if($result->num_rows != 0) {
	while($row = $result->fetch_assoc()) {
		$data[] = $row;
	}		
}

echo json_encode($data);

?>
