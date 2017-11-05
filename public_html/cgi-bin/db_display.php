<html>
<body>

<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

echo ("<h1>Search Result</h1><br/>");
$hostname = "localhost";
$username = "cs20101697";
$password = "dbpass";
$dbname = "db20101697";

$connect = new PDO("mysql:dbname=$dbname;host=$hostname", $username, $password) or die("DB Connection Failed");
if($connect) {
 echo("<hr>MySQL Server Connect Success!<hr>");
}
else {
 echo("<hr>MySQL Server Connect Failed!<hr>");
}

$topping = $_GET["topping"];
$stmt = $connect->prepare('select * from pizza_order WHERE `topping` = :topping');
$stmt->bindParam(':topping', $topping, PDO::PARAM_STR, 30);
$stmt->execute();
$result = $stmt->fetchAll();
foreach($result as $row){
    echo "
      <li>
        Order Number : {$row['order_number']}
        ID Number : {$row['id_number']}
        Name : {$row['name']}
        E-mail : {$row['email']}
        Phone : {$row['phone_number']}
        Topping : {$row['topping']}
        Pay Method : {$row['pay_method']}
        Call First : {$row['call_first']}
        Order Date : {$row['order_date']}
      </li>";
}

$connect=null;
?>

</body>
</html>
