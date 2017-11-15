<?php
	require 'connect.php';

	if (!isset($_GET['id']))
	{
  		echo 'Brak ID';
   		exit;
	}
	$id = $_GET['id'];
	$delete = "DELETE FROM art WHERE id=".$id;
	$del_query= $connect->query($delete);
	if($del_query->affected_rows >0){
		echo "Post został usuniety";
	}
	else
		echo "Bład, nie usunietą";
	header('Location: /CMS/index.php');
?>