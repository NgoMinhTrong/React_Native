<?php
///ket noi server
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "api";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}


// Nhận dữ liệu gửi lên từ React Native
$json = file_get_contents('php://input');
$obj = json_decode($json, TRUE);

//khai bao bien
$name = $obj['name'];
$phone =$obj['phone'];
$address =$obj['address'];
$bill_detail = $obj['bill_detail'];


// Thực thi SQL lưu vào database
$sql = "INSERT INTO `bill` ( `name`, `phone`, `address`, `bill_detail`) VALUES ('$name', '$phone', '$address', '$bill_detail')";
$conn->query($sql);

// Kiểm tra tính hợp lệ của dữ liệu
if (!isset($obj['phone']) || $obj['phone'] == '') {
    $result = [
    'error' => 'vui long nhap so dien thoai',
    ];
    echo json_encode($result);
    return;
    }
    //lay ket qua
$result = [
    'name' => $name,
    'phone' => $phone,
    'address' => $address,
    'bill_detail' => $bill_detail,
];
echo json_encode($result);
$conn->close();
?>