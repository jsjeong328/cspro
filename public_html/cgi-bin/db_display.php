<html>
<body>

<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

echo ("MySQL - PHP Connect Test <br/>");
$hostname = "localhost";
$username = "cs20101697";
$password = "dbpass";
$dbname = "db20101697";

$connect = new PDO("mysql:dbname=$dbname;host=$hostname", $username, $password) or die("DB Connection Failed");
if($connect) {
 echo("MySQL Server Connect Success!");
}
else {
 echo("MySQL Server Connect Failed!");
}

$topping = $_GET["topping"];
$stmt = $connect->prepare('select * from pizza_order WHERE `topping` = :topping');
$stmt->bindParam(':topping', $topping, PDO::PARAM_STR, 30);
$stmt->execute();
$result = $stmt->fetchAll();
foreach($result as $row){
    echo "<li>{$row['order']}</li>";
}

$connect=null;
?>

</body>
</html>
