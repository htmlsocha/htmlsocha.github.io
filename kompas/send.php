<?php 
    $to = "mindcompasspl@gmail.com";
    $subject = "Quiz odpowiedzi od: " . $_POST["email"];;
    $message = $_POST["gender"] . " " . $_POST["age"] . "\n\n32 " . $_POST['32'] . "\n\n33 " . $_POST['33'] . "\n\n34 " . $_POST['34'] . "\n\n35 " . $_POST['35'] . "\n\n 36 " . $_POST['36'];
    mail($to,$subject,$message);
    echo "Quiz wysłany! Dziękujemy :)";
?>


