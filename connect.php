<?php
        $connect = mysqli_connect("localhost","root","","cms");
        if(!$connect){
        				 $connect_status = 0;
                        $error = mysqli_connect_error();
                        die();
        }
        else
                        $connect_status = 1;
        
?>
