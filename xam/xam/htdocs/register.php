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
 
	 // decoding the received JSON and store into $obj variable.
	 $obj = json_decode($json,true);
	 
	 // them store into $name.
	$name = $obj['name'];
	 
	// them with $email.
	$email =$obj['email'];
	 
	// them $password.
	$password =$obj['password'];
	//them $displayname
	$displayName= $obj['displayName'];
	if($obj['email']!="")
	{
		$sql = "SELECT * FROM account where email='$email'";
		$result = $conn->query($sql);
	
		if($result->num_rows>0){
			echo json_encode('email already exist');  // alert msg in react native		 		
		}
		else
		{		
			$na="INSERT INTO `account`( user, password, type,email,displayName) VALUES ('$name','$password',0,'$email','$displayName')";
			$add = $conn->query($na);
			if($add){
				echo  json_encode('Đăng Ký Thành Công'); // alert msg in react native
			}
			else{
			   echo json_encode('Đăng Ký Thất Bại'); // our query fail 		
			}
				
		}
	}
	
	else{
	  echo json_encode('try again');
	}
$conn->close();
	
?>

