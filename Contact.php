<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Enable CORS and JSON header
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Database config
$host = "localhost";
$dbname = "webcontacts";
$username = "root";
$password = "";

$conn = new mysqli($host, $username, $password, $dbname);

// ✅ Include PHPMailer with correct paths
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';
require __DIR__ . '/PHPMailer/src/Exception.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));

    $name = $conn->real_escape_string($data->name);
    $email = $conn->real_escape_string($data->email);
    $subject = $conn->real_escape_string($data->subject);
    $message = $conn->real_escape_string($data->message);

    // Save to database
    $sql = "INSERT INTO contact_messages (name, email, subject, message) VALUES ('$name', '$email', '$subject', '$message')";
    $success = $conn->query($sql);

    // Send email using PHPMailer
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'pranavartist1@gmail.com';
        $mail->Password   = 'fgdbfspupfwgpvms'; // ✅ App password
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        $mail->setFrom($email, $name);
        $mail->addAddress('pranavartist1@gmail.com');
        $mail->Subject = $subject;
        $mail->Body    = "Name: $name\nEmail: $email\n\nMessage:\n$message";

        $mail->send();
        echo json_encode(["success" => true]);
    } catch (Exception $e) {
        echo json_encode(["success" => false, "error" => $mail->ErrorInfo]);
    }
}
