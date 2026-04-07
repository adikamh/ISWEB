<?php
require 'db.php';
$msg = '';
$msgType = '';

if (!isset($_GET['id'])) {
    header("Location: read.php");
    exit;
}

$id = $_GET['id'];
$query = mysqli_query($conn, "SELECT * FROM users WHERE id='$id'");
$data = mysqli_fetch_assoc($query);

if (isset($_POST['update'])) {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);

    if (empty($name) || empty($email)) {
        $msg = "Data cannot be empty.";
        $msgType = "danger";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $msg = "Invalid email address.";
        $msgType = "danger";
    } else {
        $cek = mysqli_query($conn, "SELECT * FROM users WHERE (email='$email' OR name='$name') AND id != '$id'");
        if (mysqli_num_rows($cek) > 0) {
            $msg = "This email or name is already registered.";
            $msgType = "danger";
        } else {
            $update = mysqli_query($conn, "UPDATE users SET name='$name', email='$email' WHERE id='$id'");
            if ($update) {
                header("Location: read.php");
                exit;
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Update User</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <h2>Update User</h2>
        <form action="" method="POST">
            <div class="form-group">
                <label>Name:</label>
                <input type="text" name="name" class="form-control" value="<?php echo htmlspecialchars($data['name']); ?>">
            </div>
            <div class="form-group">
                <label>Email:</label>
                <input type="text" name="email" class="form-control" value="<?php echo htmlspecialchars($data['email']); ?>">
            </div>
            
            <?php if ($msg != ''): ?>
                <div class="alert alert-<?php echo $msgType; ?>">
                    <?php echo $msg; ?>
                </div>
            <?php endif; ?>

            <button type="submit" name="update" class="btn-submit">Update</button>
        </form>

        <div class="nav-buttons">
            <a href="index.php">CREATE</a>
            <a href="read.php">READ</a>
        </div>
    </div>
</body>
</html>