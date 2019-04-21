<?php
if($_GET["submit"]) {
    $recipient="subinsamrat96@gmail.com";
    $subject="Form to email message";
    $sender=$_POST["sender_name"];
    $senderEmail=$_POST["sender_mail"];
    $message=$_POST["sender_message"];

    $mailBody = "Name: $sender\nEmail: $senderEmail\n\n $message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou = "<p>Thank you! Your message has been sent. </p>";
}

?>