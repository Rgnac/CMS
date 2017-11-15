<?php
	session_start();
	 require 'connect.php';

	$login = $connect -> real_escape_string($_POST['login']);
	$haslo = $connect -> real_escape_string($_POST['password']);
	$query = "SELECT * FROM users";
	$result = $connect->query($query);
	while($row = $result->fetch_assoc()){
		if(($login == $row['login'])&&($haslo == $row['haslo'])){
			$_SESSION["log"]=1;
			$_SESSION["user"]=$row['login'];
			break;
		}
		else
			$_SESSION["log"]=0;
	}
	header('Location: /CMS/index.php');
?>