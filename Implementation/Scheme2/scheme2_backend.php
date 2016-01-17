<?php
$characters = array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"1","2","3","4","5","6","7","8","9","0",".","/");
shuffle($characters);

$array_size=8;//Size of child array
$no_of_arrays=8;//Size of parent array
$parent_array= array();//A one dimensional array that will store arrays[[],[],[]....]
$counter1=0;
$counter2=0;
while($counter1<$no_of_arrays)
	{
		$child_array= array();
		while($counter2<($array_size*($counter1+1)))
		{
			array_push($child_array,$characters[$counter2]);
			$counter2++;
		}
		array_push($parent_array,$child_array);
		$counter1++;
	}

//var_dump($parent_array)	;
//retrieve the username and password and send to the authenticate php file.
	$username="amish";//Will get it from the user.

//To get the password connect to the db
$DB_HOST = "mysql1.000webhost.com";
$DB_DATABASE = "a3995330_login";
$DB_USER = "a3995330_amish";
$DB_PASSWORD = "pass@123";
 
$conn = new mysqli($DB_HOST, $DB_USER, $DB_PASSWORD, $DB_DATABASE);
	if(!$conn) {
		die('Failed to connect to server: ' . mysql_error());
	}
else{
//	$db = mysql_select_db($DB_DATABASE);
//        echo "Connected";
}

$sql = "SELECT username,password FROM Users where BINARY username='$username';";//BINARY for case sensitivity
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) 
    {
                   $password=$row['password'];             
    }
} else {
    echo "0 results";
}
$sub_array=array();
	
?>		