<?php
require 'PHPMailer-master/PHPMailerAutoload.php';
if(isset($_POST['email'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    // $email_to = "mannn.bs@gmail.com";
    // $email_subject = "Romano Subcribe";
    // $email_from = "lienhe@romanokhoithuat.vn";

 
    $full_name = $_POST['full_name']; // required
    $age = $_POST['age']; // required
    $mobile = $_POST['mobile']; // not required
    $email = $_POST['email']; // required
	$address = $_POST['address']; // required
	$company_name = $_POST['company_name']; // required
	$kinh_doanh = $_POST['kinh_doanh']; // required
	$vi_tri = $_POST['vi_tri']; // required
	$mentor = $_POST['mentor']; // required
	$question = $_POST['question']; // required
	
	$email_message = "<table style='width:100%;border: 1px solid black;border-collapse: collapse;'>";
    $email_message .= "<tr><th>Tên đầy đủ:</th><td>".$full_name."</td></tr>";
	$email_message .= "<tr><th>Tuổi:</th><td>".$age."</td></tr>";
	$email_message .= "<tr><th>Mobile:</th><td>".$mobile."</td></tr>";
	$email_message .= "<tr><th>Email:</th><td>".$email."</td></tr>";
	$email_message .= "<tr><th>Địa Chỉ:</th><td>".$address."</td></tr>";
	$email_message .= "<tr><th>Ngành Nghề Kinh Doanh:</th><td>".$kinh_doanh."</td></tr>";
	$email_message .= "<tr><th>Vị Trí:</th><td>".$vi_tri."</td></tr>";
	$email_message .= "<tr><th>Diễn giả:</th><td>".$mentor."</td></tr>";
	$email_message .= "<tr><th>Câu Hỏi:</th><td>".$question."</td></tr>";
	$email_message .= "<tr><th>Facebook/Linkedin cá nhân:</th><td>".$company_name."</td></tr>";
	$email_message .= "</table>";

	
	$message2 = "<table width='570' border='0' cellpadding='0' cellspacing='18' bgcolor='#ffffff' style='border-collapse:separate;padding-left:0px;padding-right:0px;width:100%;max-width:570px;background-color:rgb(255,255,255)'><tbody><tr><td width='100%' valign='top' align='left'>";
    $message2 .= "<img border='0' hspace='0' vspace='0' width='534' alt='' style='border:0px;display:block;vertical-align:top;max-width:534px;width:100%;height:auto' src='http://romanokhoithuat.vn/image/sendmail.jpg' tabindex='0'></td>";
    $message2 .= "</tr><tr><td><span ><font color='#888888'>";
    $message2 .= "</font></span><table align='left' border='0' cellpadding='0' cellspacing='0' width='100%'><tbody><tr><td align='left' style='text-align:left'><p style='color:rgb(63,63,63);font-family:Arial,Helvetica,sans-serif;font-size:13px;margin:0px 0px 1em'><span style='font-size:small'>";
	$message2 .= "Chào ".$full_name.",</span><br></p><p style='margin:1em 0px 0px'><font color='#3f3f3f' face='Arial, Helvetica, sans-serif'>Cảm ơn ".$full_name." đã đăng ký Tham gia sự kiện ROMANO - KHỞI THUẬT: LÀM CHỦ CUỘC CHƠI TRƯỚC TUỔI 30</font></p><p style='margin:1em 0px 0px'><font color='#3f3f3f' face='Arial, Helvetica, sans-serif'>100 người được chọn tham gia sự kiện sẽ nhận thông báo qua email vào Thứ Hai, ngày 07/08/2017.</font></p><p style='margin:1em 0px 0px'><font color='#3f3f3f' face='Arial, Helvetica, sans-serif'>Mọi thắc mắc vui lòng liên hệ đến số hotline ‎0899 335 726.</font></p><p style='margin:1em 0px 0px'><font color='#3f3f3f' face='Arial, Helvetica, sans-serif'>Tìm hiểu thêm thông tin sự kiện qua website <a href='http://romanokhoithuat.vn/' target='_blank'>http://romanokhoithuat.vn/</a> hay Romano Fanpage <a href='https://facebook.com/VN.Romano/'>https://facebook.com/VN.Romano<wbr>/</a></font></p><p style='margin:1em 0px 0px'><font color='#3f3f3f' face='Arial, Helvetica, sans-serif'>Trân trọng.</font></p><span ><font color='#888888'><div style='color:rgb(63,63,63);font-family:Arial,Helvetica,sans-serif;font-size:13px'><br></div></font></span></td></tr></tbody></table></td></tr></tbody></table>";

$mail = new PHPMailer;
//Tell PHPMailer to use SMTP
$mail->isSMTP();
$mail->SMTPDebug  = 2; 
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
//Set the hostname of the mail server
$mail->Host = 'host05.emailserver.vn';
// use
// $mail->Host = gethostbyname('smtp.gmail.com');
// if your network does not support SMTP over IPv6
//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 25;
//Set the encryption system to use - ssl (deprecated) or tls
$mail->SMTPSecure = 'tls';
//Whether to use SMTP authentication
$mail->SMTPAuth = true;$mail->CharSet = 'UTF-8';
//Username to use for SMTP authentication - use full email address for gmail
$mail->Username = "lienhe@romanokhoithuat.vn";
//Password to use for SMTP authentication
$mail->Password = "1@34koithuat";
//Set who the message is to be sent from
$mail->setFrom('lienhe@romanokhoithuat.vn', 'Romano Khởi Thuật');
//Set who the message is to be sent to
$mail->addAddress('trung.nguyen@boxmedia.com.vn', 'kim.pham@boxmedia.com.vn');
//Set the subject line
$mail->Subject = 'XÁC NHẬN ĐĂNG KÝ THAM GIA SỰ KIỆN ROMANO - KHỞI THUẬT';
//Replace the plain text body with one created manually
$mail->isHTML(true);
$mail->Body    = $email_message;
//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}

$mail2 = clone $mail;
$mail2->addAddress($email, $full_name);
$mail2->Body = $message2;

 if(!$mail2->Send()) {
    echo "Mailer Error: " . $mail2->ErrorInfo;
} else {
    echo "Message sent!<br>";
}
// // create email headers
// $headers = 'From: '.$email_from."\r\n".
// 'Reply-To: '.$email_from."\r\n" .
// 'X-Mailer: PHP/' . phpversion();
// @mail($email_to, $email_subject, $email_message, $headers);  
}
?>
