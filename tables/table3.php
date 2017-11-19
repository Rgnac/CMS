<?php 
session_start();
require '../connect.php';
if(isset($_POST['art_tytul'])){
    $art_tytul = mysqli_real_escape_string($connect,$_POST['art_tytul']);
    $art_tresc = mysqli_real_escape_string($connect,$_POST['art_tresc']);
    $user = $_SESSION["user"];
    $qe_insert = "INSERT INTO art3 VALUES ('','$user',now(),'$art_tresc','$art_tytul')";
    $result = $connect->query($qe_insert);
}
 $qe1 = "SELECT * from art3 ORDER BY data DESC";
    $res1 = $connect->query($qe1);

    if($res1 ->num_rows > 0){
        while($row=$res1 ->fetch_assoc()){
          if(isset($_SESSION["log"])&&($_SESSION["log"]==1)){
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
            '<input type="text" id="artid" name="artid" value="'.
            $row["id"].
            '" readonly>'.
            '</b><a href="delete.php?id='.
            $row["id"].
            '" id="art_delete" class="art_button">Usuń</a>'.
            '<input type="submit" class="art_button art_send" value="Wyslij"></form>'.
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