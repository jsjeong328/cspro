<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

$hostname = "localhost";
$username = "cs20101697";
$password = "dbpass";
$dbname = "db20101697";

$connect = new PDO("mysql:dbname=$dbname;host=$hostname", $username, $password) or die("DB Connection Failed");

if(isset($_GET["order_number"])){
  $order_number = '%'.$_GET["order_number"].'%';
  $stmt = $connect->prepare('select * from pizza_order WHERE `order_number` LIKE :order_number');
  $stmt->bindParam(':order_number', $order_number, PDO::PARAM_INT);
}
if(isset($_GET["id_number"])){
  $id_number = '%'.$_GET["id_number"].'%';
  $stmt = $connect->prepare('select * from pizza_order WHERE `id_number` LIKE :id_number');
  $stmt->bindParam(':id_number', $id_number, PDO::PARAM_INT);
}
if(isset($_GET["name"])){
  $name = '%'.$_GET["name"].'%';
  $stmt = $connect->prepare('select * from pizza_order WHERE `name` LIKE :name');
  $stmt->bindParam(':name', $name, PDO::PARAM_STR, 30);
}
if(isset($_GET["email"])){
  $email = '%'.$_GET["email"].'%';
  $stmt = $connect->prepare('select * from pizza_order WHERE `email` LIKE :email');
  $stmt->bindParam(':email', $email, PDO::PARAM_STR, 30);
}
if(isset($_GET["phone_number"])){
  $phone_number = '%'.$_GET["phone_number"].'%';
  $stmt = $connect->prepare('select * from pizza_order WHERE `phone_number` LIKE :phone_number');
  $stmt->bindParam(':phone_number', $phone_number, PDO::PARAM_STR, 30);
}
if(isset($_GET["topping"])){
  $topping = '%'.$_GET["topping"].'%';
  $stmt = $connect->prepare('select * from pizza_order WHERE `topping` LIKE :topping');
  $stmt->bindParam(':topping', $topping, PDO::PARAM_STR, 30);
}
if(isset($_GET["pay_method"])){
  $pay_method = '%'.$_GET["pay_method"].'%';
  $stmt = $connect->prepare('select * from pizza_order WHERE `pay_method` LIKE :pay_method');
  $stmt->bindParam(':pay_method', $pay_method, PDO::PARAM_STR, 30);
}
if(isset($_GET["call_first"])){
  $call_first = '%'.$_GET["call_first"].'%';
  $stmt = $connect->prepare('select * from pizza_order WHERE `call_first` LIKE :call_first');
  $stmt->bindParam(':call_first', $call_first, PDO::PARAM_STR, 30);
}
if(isset($_GET["order_date"])){
  $order_date = '%'.$_GET["order_date"].'%';
  $stmt = $connect->prepare('select * from pizza_order WHERE `order_date` LIKE :order_date');
  $stmt->bindParam(':order_date', $order_date, PDO::PARAM_STR, 30);
}

$stmt->execute();
$result = $stmt->fetchAll();
if(count($result)==0){
  echo "No Search Result";
}else{
  // foreach($result as $row){
  //   $output.= $row;
  // }
  echo json_encode($result);
}


$connect=null;
?>
