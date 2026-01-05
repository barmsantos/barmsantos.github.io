<?php
// email
$to = 'reachout@whatisbarbaradoing.com';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get and trim form data
    $name    = trim($_POST['name'] ?? '');
    $email   = trim($_POST['email'] ?? '');
    $message = trim($_POST['message'] ?? '');

    // Basic validation
    if ($name === '' || $email === '' || $message === '') {
        die('Please fill in all fields.');
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die('Invalid email address.');
    }

    // Build email
    $subject = "New contact form message from $name";
    $body    = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $name <$email>\r\nReply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo 'Thank you for your message! I will get back to you soon!';
    } else {
        echo 'Sorry, there was a problem sending your message.';
    }
} else {
    echo 'Invalid request.';
}
