<?php

$DB_HOST = "mysql1.000webhost.com";
$DB_DATABASE = "a3995330_login";
$DB_USER = "a3995330_amish";
$DB_PASSWORD = "pass@123";

$conn = new mysqli($DB_HOST, $DB_USER, $DB_PASSWORD, $DB_DATABASE);
  if(!$conn) {
    die('Failed to connect to server: ' . mysql_error());
  }
else{
//  $db = mysql_select_db($DB_DATABASE);
        echo "Connected";
}//15

$imagearray=array();
$idarray=generate_shuffled_ids();
$id=0;
$counter =0;
$sql1="SELECT id FROM files";
$result1= $conn->query($sql1);
$no_of_images=25;//mysqli_num_rows($result1);

while($id<$no_of_images){
    $img_id=$idarray[$id];
    $sql = "SELECT data FROM files WHERE id=$img_id";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
         // output data of each row
               while($row = $result->fetch_assoc()) {
               //echo '<img src="data:image/png;base64,'.base64_encode( $row['data'] ).'"/>';
               $imagearrays[$counter] = base64_encode( $row['data'] );
               $counter=$counter+1;
               }
    } else {
    echo "0 results";
    }
    //$idarray[$id-1]=$id;
    $id=$id+1;
    
}

$conn->close();
//



function generate_shuffled_ids(){
$pass_id=array();
$pass_id[0]=1;
$pass_id[1]=2;
$pass_id[2]=3;
$nums=array();
for ($i=1; $i <=25; $i++) { 
  $nums[$i]=$i;
}
$nums=random($nums, $pass_id,0);
print_r($nums);
return $nums;
}

function random($nums,$pass_id,$counter1){
  shuffle($nums);
  $index[0]=search($nums,$pass_id[0]);
  $index[1]=search($nums,$pass_id[1]);
  $index[2]= search($nums,$pass_id[2]);
  $counter1=0;
  if(abs($index[2]-$index[1])<5){
    $counter1++;
  }
  if(abs($index[2]-$index[0])<5){
    $counter1++;
  }
  if(abs($index[1]-$index[0])<5) {
    $counter1++;
  }
  if($counter1>0){
     
    return random($nums,$pass_id,0);
  }
  if($counter1==0)
  return $nums;
}

function search($list,$x){
        for ($i=0; $i < count($list); $i++) { 
          # code...
          if($list[$i]==$x)
            {
            echo $i." ";
            return $i;}
        
    }
}
?>  