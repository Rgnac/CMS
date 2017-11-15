<?php
	session_start();
	require 'connect.php';

	$art_tytul = mysqli_real_escape_string($connect,$_POST['art_display_tytul']);
    $art_tresc = mysqli_real_escape_string($connect,$_POST['art_display_tresc']);
	$id = $_POST['artid'];
	$user = $_SESSION["user"];
	$update = "UPDATE art SET autor=\"$user\", data = now(),tytul=\"$art_tytul\",tresc=\"$art_tresc\" WHERE id=".$id ;
	$up_query= $connect->query($update);
	if($up_query->affected_rows >0){
		echo "Zapdejtowano";
	}
	else
		echo "Bład";
	header('Location: /CMS/index.php');
?>