<?php 
    $to = "mindcompasspl@gmail.com";
    $subject = "Quiz odpowiedzi od: " . $_POST["email"];
    $message = $_POST["gender"] . " " . $_POST["age"] .  "\n\n14 " . $_POST['14'] . "\n\n15 " . $_POST['15'] . "\n\n16 " . $_POST['16'] . "\n\n17 " . $_POST['17'] .  "\n\n18 " . $_POST['18'];
    mail($to,$subject,$message);
    echo "Quiz wysłany! Dziękujemy :)";
?>