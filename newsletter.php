<?php 
$user = "sql7354280";  
$password = "ZaggjXaVFj";  
$host = "sql7.freesqldatabase.com";  
$dbase = "sql7354280";  
$table = "newsletter";  
 
 $first_name=$_POST['name'];
 $mail=$_POST['mail'];
 
$dbc= mysqli_connect($host,$user,$password, $dbase)  or die("Unable to select database"); 
$query= "INSERT INTO $table  ". "VALUES ('$first_name', '$mail')"; 
mysqli_query ($dbc, $query) or die ("Error querying database"); 
echo 'You have been successfully added.' . '<br>'; 
mysqli_close($dbc);   

?> 
 