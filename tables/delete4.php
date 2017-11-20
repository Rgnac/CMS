<?php
session_start();

	require '../connect.php';

	if (!isset($_POST['id']))
	{
  		echo 'Brak ID';
   		exit;
	}
	$id = $_POST['id'];
	$delete = "DELETE FROM art4 WHERE id=".$id;
	$connect->query($delete);


	$qe1 = "SELECT * from art4 ORDER BY data DESC";
    $res1 = $connect->query($qe1);

    if($res1 ->num_rows > 0){
        while($row=$res1 ->fetch_assoc()){
          if(isset($_SESSION["log"])&&($_SESSION["log"]==1)){
            echo 
            '<div class="art">'.
            '<input type="text" class="art_display art_display_tytul" name="art_display_tytul" value="'.
            $row["tytul"].
            '" readonly><br>'.
            '<input type="text" class="art_display art_display_tresc" name="art_display_tresc" value="'.
            $row["tresc"]. 
            '" readonly>'.
            "<br> Data dodania: ".
            $row["data"].'
            <br> Autor: <b>'.
            $row["autor"].
            '<input type="text" id="artid" name="artid" value="'.
            $row["id"].
            '" readonly>'.
            '</b><button class="art_button art_delete">Usuń</button>'.
            '<input type="submit" class="art_button art_send" value="Wyslij">'.
            '<button class="art_update art_button">Edytuj</button></div>';
        }

        else{
            echo 
            '<div class="art">'.
            '<form id="form_update" action="update.php" method="post"><input type="text" class="art_display art_display_tytul" name="art_display_tytul" value="'.
            $row["tytul"].
            '" readonly><br>'.
            '<input type="text" class="art_display art_display_tresc" name="art_display_tresc" value="'.
            $row["tresc"]. 
            '" readonly>'.
            "<br> Data dodania: ".
            $row["data"].'
            <br> Autor: <b>'.
            $row["autor"].
            '</b></div>';
        }
    }
}
    
else
        echo '<script> alert("Pusta baza");</script>';
	
?>