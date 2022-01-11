<?php
       use PHPMailer\PHPMailer\PHPMailer;
       use PHPMailer\PHPMailer\Exception;
       require 'src/Exception.php';
       require 'src/PHPMailer.php';
       require 'src/SMTP.php';
       $name = $_POST['name'];
       $phone_number =$_POST['phone_number'];
       $email = $_POST['email'];
       $message = $_POST['message'];

       $email_from = 'heetprod@gmail.com';

       $email_subject = "Новая заявка";
   
       $email_body = "Имя: $name<br/>
                      Номер телефона: $phone_number<br/>
                      Почта: $email<br/>
                      Сообщение: $message<br/>";


$mail = new PHPMailer;
$mail->isSMTP(); 
$mail->CharSet = 'UTF-8';
$mail->Encoding = 'base64';
$mail->SMTPDebug = 2; // 0 = off (for production use) - 1 = client messages - 2 = client and server messages
$mail->Host = "mail.hosthp.ru"; // use $mail->Host = gethostbyname('smtp.gmail.com'); // if your network does not support SMTP over IPv6
$mail->Port = 25; // TLS only
$mail->SMTPSecure = false; // ssl is depracated
$mail->SMTPAutoTLS = false;
$mail->SMTPAuth = true;
$mail->Username = 'admin@hosthp.ru';
$mail->Password = 'gq4D7QUygS';
$mail->setFrom($email_from, $name);
$mail->addAddress($email_from, $name);
$mail->Subject = $email_subject;
$mail->msgHTML($email_body); //$mail->msgHTML(file_get_contents('contents.html'), DIR); //Read an HTML message body from an external file, convert referenced images to embedded,
// $mail->addAttachment('images/phpmailer_mini.png'); //Attach an image file

if(!$mail->send()){
    echo "0";
}else{
    echo "1";
}
if (isset($_POST['submit']))
    {   
    ?>
<script type="text/javascript">
window.location = "http://hosthp.ru/";
</script>      
    <?php
    }
	?>