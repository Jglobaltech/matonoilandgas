<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON data from request body
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (!$data) {
        $data = $_POST;
    }

    $email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);

    // Validation
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Please provide a valid email address."]);
        exit;
    }

    // Recipient email (notification of new subscriber)
    $recipient = "info@matonoilandgas.com";
    $email_subject = "New Newsletter Subscriber: $email";

    // Email content
    $email_content = "A new user has subscribed to the newsletter.\n\n";
    $email_content .= "Subscriber Email: $email\n";

    // Email headers
    $email_headers = "From: Newsletter System <noreply@matonoilandgas.com>\r\n";
    $email_headers .= "X-Mailer: PHP/" . phpversion();

    // Send notification
    if (mail($recipient, $email_subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Successfully subscribed to the newsletter!"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Oops! Something went wrong. Please try again later."]);
    }
} else {
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "There was a problem with your submission, please try again."]);
}
?>
