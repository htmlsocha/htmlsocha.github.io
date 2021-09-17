<?php 
   $to = "mindcompasspl@gmail.com";
    $subject = "Quiz odpowiedzi od: " . $_POST["email"];
    $message = $_POST["gender"] . " " . $_POST["age"] . "\n\n19 " . $_POST['19'] . "\n\n20 " . $_POST['20'] . "\n\n21 " . $_POST['21'] . "\n\n22 " . $_POST['22'] . "\n\n23 " . $_POST['23'] . "\n\n24 " . $_POST['24'];
    mail($to,$subject,$message);
    echo "Quiz wysłany! Dziękujemy";
?>