<?php require_once('scheme2_backend.php');?>
<?php
session_start();
//retreive the password
$pass = json_encode($password);

//Split it into array
$pass_array=str_split($pass);
print_r($pass_array);
############10
//Submitted array
if( isset( $_SESSION['counter'] ) )
   {
      $_SESSION['counter'] += 1;
   }
   else
   {
      $_SESSION['counter'] = 1;
   }
//Remember to unset the session
if(isset($_POST['submission'])){
        if($_SESSION['counter']==1){
         $sub_array=array($_POST['submission']);
         $_SESSION['submitted']=$sub_array;
         }
         else{
        array_push($_SESSION['submitted'],$_POST['submission']);
        }
	print_r($_SESSION['submitted']);
}


if(isset($_POST['auth'])){
	//Check the length of the password submitted first
        $sub_array=($_SESSION['submitted']);
        print_r($sub_array);//36
	if(count($pass_array)==count($sub_array))
	{
		echo "Correct Length";
		echo "a"+count($pass_array)+" b"+ count($sub_array);
	}
	else
	{
		echo count($pass_array);//+"\r "+ count($sub_array);
                echo "<br/>"+count($sub_array);
		echo "Incorrect Length";
	}
session_destroy();
/*
$pass_counter=0;
$pass_flag=0;
         for($i=0;$i<count($sub_array);$i++)
         {
                for($j=0;$j<count($sub_array[$j]);$j++)
                {
                    if(strcomp($pass_array[$pass_counter],$sub_array[$i][$j])==0)
                        {
                              $pass_counter++;
                              $pass_flag++;
                        }
                 }
          }
if($pass_flag==count($pass_array))
{
 echo "Correct";
}
if($pass_flag!=count($pass_array))
{
 echo "Incorrect";
}
*/

}


?>
					