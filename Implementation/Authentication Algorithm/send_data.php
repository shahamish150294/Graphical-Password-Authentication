<? php
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
        echo "Connected";
}//15


?>