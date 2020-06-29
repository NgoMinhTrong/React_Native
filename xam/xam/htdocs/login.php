<?php 
// Thông tin kết nối
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "api";

// Tạo kết nối đến cơ sở dữ liệu
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

	$json = file_get_contents('php://input'); 	
	$obj = json_decode($json,true);

	$email = $obj['email'];
	$password =$obj['password'];
	if($obj['email']!=""){	
	
	$sql = "SELECT * FROM account where email='$email' and password='$password' or user='$email' and password='$password'" ;
	$result = $conn->query($sql);
	
	
		if($result->num_rows==0){
			echo json_encode('Wrong Details');				
		}
		else{	

			echo json_encode('ok');
						
		}
	}	
	else{
	  echo json_encode('try again');
	}

$conn->close();
?>

