<?php 
    $to = "mindcompasspl@gmail.com";
    $subject = "Quiz odpowiedzi od: " . $_POST["mail"];
    $message = $_POST["gender"] . " " . $_POST["age"] . "\n\n24 " . $_POST['24'] . "\n\n25 " . $_POST['25'] . "\n\n26 " . $_POST['26'] . "\n\n27 " . $_POST['27'] . "\n\n28 " . $_POST['28'] . "\n\n29 " . $_POST['29'] . "\n\n30 " . $_POST['30'];
    mail($to,$subject,$message);
    echo "Quiz wysłany! Dziękujemy :)";
?>