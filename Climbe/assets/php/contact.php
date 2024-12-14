<?php
require("PHPMailer/PHPMailerAutoload.php");

// Configuração do destinatário
$recipientEmail = 'gugamaz06@gmail.com';
$recipientName = 'Gustavo Machado';

// Coletando as informações do formulário
$senderName = $_POST['contact-name'];
$senderLast = $_POST['contact-last'];
$senderTele = $_POST['contact-phone'];
$senderEmail = $_POST['contact-email'];
$senderSubject = 'New Message From ' . $senderName . ' (' . $senderEmail . ')';
$senderMessage = $_POST['contact-message'];

// Criando uma nova instância do PHPMailer
$mail = new PHPMailer();

// Configurações do servidor SMTP
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com'; // Servidor SMTP do Gmail
$mail->SMTPAuth = true;
$mail->Username = 'gugmaz06@gmail.com'; // Seu e-mail Gmail
$mail->Password = 'Papa!1234'; // Sua senha ou App Password do Gmail
$mail->SMTPSecure = 'tls'; // Criptografia TLS
$mail->Port = 587; // Porta para envio TLS

// Configurando os detalhes do e-mail
$mail->setFrom($senderEmail, $senderName . ' ' . $senderLast);
$mail->addReplyTo($senderEmail, $senderName . ' ' . $senderLast);
$mail->addAddress($recipientEmail, $recipientName);
$mail->Subject = $senderSubject;

// Corpo do e-mail em HTML
$mail->isHTML(true);
$mail->Body = "
    <p><strong>Name:</strong> $senderName $senderLast</p>
    <p><strong>Phone:</strong> $senderTele</p>
    <p><strong>Email:</strong> $senderEmail</p>
    <p><strong>Subject:</strong> $senderSubject</p>
    <p><strong>Message:</strong> $senderMessage</p>
";

// Tentativa de envio do e-mail
if (!$mail->send()) {
    echo '<div class="alert alert-danger" role="alert">Error: ' . $mail->ErrorInfo . '</div>';
} else {
    echo '<div class="alert alert-success" role="alert">Thank you. We will contact you shortly.</div>';
}
?>
