<?php 
    $to = "mindcompasspl@gmail.com";
    $subject = "Quiz odpowiedzi od: " . $_POST["email"];
    $message = $_POST["gender"] . " " . $_POST["age"] . "\n\n1 " . $_POST["1"] . "\n\n2 " . $_POST['2'] . "\n\n3 " . $_POST['3'] . "\n\n4" . $_POST['4'] . "\n\n5 " . $_POST['5'] . "\n\n6 " . $_POST['6'];
    mail($to,$subject,$message);
    echo "Quiz wysłany! Dziękujemy :)";
?>