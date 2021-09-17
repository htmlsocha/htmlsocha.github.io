<?php 
    $to = "mindcompasspl@gmail.com";
    $subject = "Quiz odpowiedzi od: " . $_POST["email"];
    $message = $_POST["gender"] . " " . $_POST["age"] . "\n\n1 "  . "\n\n7" . $_POST['7'] . "\n\n8 " . $_POST['8'] . "\n\n9 " . $_POST['9'] . "\n\n10 " . $_POST['10'] . "\n\n11 " . $_POST['11'] . "\n\n12 " . $_POST['12'] . "\n\n13 " . $_POST['13'];
    mail($to,$subject,$message);
    echo "Quiz wysłany! Dziękujemy :)";
?>

 