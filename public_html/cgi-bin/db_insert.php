<html>
<body>

<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

echo ("Order Complete!<br/>");
$hostname = "localhost";
$username = "cs20101697";
$password = "dbpass";
$dbname = "db20101697";

$connect = new PDO("mysql:dbname=$dbname;host=$hostname", $username, $password) or die("DB Connection Failed");

//define variables and set to empty values
$idnumber = $name = $email = $phone = $topping = $paymethod = $callfirst = "";
function validation_check($data){
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  if($data==null){//만약 잘못된 데이터 들어왔다면 에러페이지로
    return false;
  }
  return $data;
}

if($_SERVER["REQUEST_METHOD"] == "POST"){
  $idnumber = validation_check($_POST["idnumber"]);
  $name = validation_check($_POST["name"]);
  $email = validation_check($_POST["email"]);
  $phone = validation_check($_POST["phone"]);
  $topping = validation_check($_POST["topping"]);
  $paymethod = validation_check($_POST["paymethod"]);
  $callfirst = validation_check($_POST["callfirst"]);
}

$stmt = $connect->prepare('INSERT INTO `pizza_order` (id_number, name, email, phone_number, topping, pay_method, call_first, order_date)
VALUES(:idnumber, :name, :email, :phone, :topping, :paymethod, :callfirst, NOW())');

$stmt->bindParam(':idnumber', $idnumber, PDO::PARAM_INT);
$stmt->bindParam(':name', $name, PDO::PARAM_STR, 30);
$stmt->bindParam(':email', $email, PDO::PARAM_STR, 30);
$stmt->bindParam(':phone', $phone, PDO::PARAM_STR, 30);
$stmt->bindParam(':topping', $topping, PDO::PARAM_STR, 30);
$stmt->bindParam(':paymethod', $paymethod, PDO::PARAM_STR, 30);
$stmt->bindParam(':callfirst', $callfirst, PDO::PARAM_STR, 30);

$stmt->execute();
$connect=null;
?>

</body>
</html>
