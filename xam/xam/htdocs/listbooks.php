<?php
// Thông tin kết nối
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "api";
// Tạo kết nối đến cơ sở dữ liệu
$conn = new mysqli($servername, $username, $password, $dbname);
// Kiểm tra kết nối
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT * FROM book";
$result = $conn->query($sql);
// Chuẩn bị mảng rỗng
$books = [];
if ($result->num_rows > 0) {
// Lần lượt đổ dữ liệu lấy được từ cơ sở dữ liệu vào mảng
while ($row = $result->fetch_assoc()) {
$books[] = $row;
}
} else {
echo "0 results";
}
$conn->close();
// Xuất kết quả Json
echo json_encode($books);