<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"> </script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet">
    <script src="js/index.js"> </script>
    <link href="css/style.css" rel="stylesheet" />
    <meta charset="UTF-8" />
    <title>CMS</title>
</head>
<body>
 <div id="page"> 
    <header>CMS</header>
    <nav>
        <div class="add open_anim" id="open_nav"><i class="material-icons">keyboard_arrow_right</i></div>
     <?php
     if(isset($_SESSION["log"])&&($_SESSION["log"]==1))
         echo '<div id="log_msg"> Witaj, '.$_SESSION["user"].'</div>'.
                '<a href="log_out.php" class="buttons" id="buttons_log_out">wyloguj</a>'.
                '<script>var c=0</script>';
    else if(isset($_SESSION["log"])&&($_SESSION["log"]==0))
        echo
            '<form id="login_form" action="log_on.php" method="post">
            <label class="art_label art_label_log" for="login">Login</label>
            <input type="text" name="login" class="art_text" required>
            <label class="art_label art_label_log" for="password">Hasło</label>
            <input type="password" name="password" class="art_text" required>
            <div class="bad_login">Zły login lub hasło</div>
            <input type="submit" name="log_on" class="buttons buttons_log" value="Zaloguj">'.
            '<script>var c=1</script>';
    else 
        echo
            '<form id="login_form" action="log_on.php" method="post">
            <label class="art_label art_label_log" for="login">Login</label>
            <input type="text" name="login" class="art_text" required>
            <label class="art_label art_label_log" for="password">Hasło</label>
            <input type="password" name="password" class="art_text" required>
            <input type="submit" name="log_on" class="buttons buttons_log" value="Zaloguj">'.
            '<script>var c=1</script>';
         ?>   
        </form>
    </nav>
    <div id="new">
      <div id="form">
        <form id="form1" method="post">
            <label for="art_tytul" class="art_label art_label_add">Tytuł</label> 
            <input id="art_tytul" name="art_tytul" class="art_text" type="text" required /> 
            <label for="art_tresc" class="art_label art_label_add">Treść</label> 
            <input id="art_tresc" name="art_tresc" class="art_text" type="text" required /> 
            <input class="buttons buttons_add" name="send_button" id="send_button" type="submit" value="Wyślij" /> 
            <input class="buttons buttons_add" id="clear_button" type="button" value="Wyczyść" /></form>
        </div>
    </div>
	<?php
	 if(isset($_SESSION["log"])&&($_SESSION["log"]==1))
		echo '<button class="add" id="add_newpost">+</button>';
     else
        echo '<br><div class="unknown_user">Zaloguj się aby edytować posty</div>';
	?>
    <div id="container">
      <?php
      require 'connect.php';

      
      if(isset($_POST['send_button'])){
        $art_tytul = mysqli_real_escape_string($connect,$_POST['art_tytul']);
        $art_tresc = mysqli_real_escape_string($connect,$_POST['art_tresc']);
		$user = $_SESSION["user"];
	  $qe_insert = "INSERT INTO art VALUES ('','$user',now(),'$art_tresc','$art_tytul')";
        $result = $connect->query($qe_insert);
    }
    $qe1 = "SELECT * from art ORDER BY data DESC";
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
            '<form id="form_update" action="update.php" method="post"><input type="text" class="art_display" name="art_display_tytul" value="'.
            $row["tytul"].
            '" readonly><br>'.
            '<input type="text" class="art_display" name="art_display_tresc" value="'.
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

        if($connect_status == 1)
            echo '<div id="connect">Połączono</div>';
        else
            echo '<div id="connect">Błąd połączenia</div>'.$error;
    
    
    
    ?>
</div>
</body>
</html>
