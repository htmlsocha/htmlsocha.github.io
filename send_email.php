<?php 
if(isset($_POST['submit'])){
    $to = "jomoh91375@cfcjy.com";
    $from = $_POST['mail']; 
	$subject = "Mail ze strony";
	$message = $_POST['message'];
    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    echo "Mail wysłany! Dziękujemy! " . $fname . " Skontaktujemy się z Tobą.";
    }
?>
