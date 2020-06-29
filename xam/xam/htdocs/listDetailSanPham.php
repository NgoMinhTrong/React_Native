<?php
// Thông tin kết nối 
$ID = $_GET['id'];
$servername = "localhost"; $username = "root"; $password = "";
$dbname = "api";
// Tạo kết nối đến cơ sở dữ liệu
$conn = new mysqli($servername, $username, $password, $dbname);
// Kiểm tra kết nối

if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error); }
$sql = "SELECT * FROM book WHERE id = '$ID'"; 
$result = $conn->query($sql);
// Chuẩn bị mảng rỗng 
$SanPhams = [];
if ($result->num_rows > 0) {
// Lần lượt đổ dữ liệu lấy được từ cơ sở dữ liệu vào mảng 
	while ($row = $result->fetch_assoc()) {
$SanPhams[] = $row; }
} else {
echo "0 results";
} $conn->close();
// Xuất kết quả Json
echo json_encode($SanPhams);
?>