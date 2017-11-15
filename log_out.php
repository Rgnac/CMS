<?php
	session_start();
	session_destroy();
	header('Location: /CMS/index.php');
?>