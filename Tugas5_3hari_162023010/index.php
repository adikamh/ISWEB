<?php
require 'db.php';
$msg = '';
$msgType = '';

if (isset($_POST['submit'])) {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    
    if (empty($name) || empty($email)) {
        $msg = "Data cannot be empty.";
        $msgType = "danger";
    } 
    elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $msg = "Invalid email address.";
        $msgType = "danger";
    } else {
        $cek = mysqli_query($conn, "SELECT * FROM users WHERE email='$email' OR name='$name'");
        if (mysqli_num_rows($cek) > 0) {
            $msg = "This email is already registered. Please try another.";
            $msgType = "danger";
        } else {
            $insert = mysqli_query($conn, "INSERT INTO users (name, email) VALUES ('$name', '$email')");
            if ($insert) {
                $msg = "User has been successfully inserted.";
                $msgType = "success";
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Create Data</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <h2>Create Data</h2>
        <form action="" method="POST">
            <div class="form-group">
                <label>Name:</label>
                <input type="text" name="name" class="form-control" placeholder="Your Name" autocomplete="off">
            </div>
            <div class="form-group">
                <label>Email:</label>
                <input type="text" name="email" class="form-control" placeholder="Your email" autocomplete="off">
            </div>
            
            <?php if ($msg != ''): ?>
                <div class="alert alert-<?php echo $msgType; ?>">
                    <?php echo $msg; ?>
                </div>
            <?php endif; ?>

            <button type="submit" name="submit" class="btn-submit">Insert</button>
        </form>

        <div class="nav-buttons">
            <a href="index.php">CREATE</a>
            <a href="read.php">READ</a>
        </div>
    </div>
</body>
</html>