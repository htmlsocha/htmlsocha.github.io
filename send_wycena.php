<?php 
if(isset($_POST['submit'])){
    $to = "info@tiptopsite.net";
    $from = $_POST['email']; 
	$subject = "Prośba o wycene od - " . $from;
	$mes = $_POST['shortabout'];
	$budget = $_POST['budget'];
	$name = $_POST['name'];
	$message = "Wiadomość od klienta " . $name . " : " . $mes . " Budżet " . $budget;
	$headers = 'Content-type: text/html; charset=utf-8';
    mail($to,$subject, $message, $headers);
    echo "Mail został wysłany. Dziękujemy za zainteresowanie " . $name . ", skontaktujemy się z Tobą jak najszybciej się da!";
    }
?>
