<?php require_once('scheme2_backend.php');?>
<script  src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script type="text/javascript">
$( document ).ready(function() {

var parent_array= <?php echo json_encode($parent_array); ?>;
window.alert(0+"||"+parent_array[0]+"\r"+
	1+"||"+parent_array[1]+"\r"+
	2+"||"+parent_array[2]+"\r"+
	3+"||"+parent_array[3]+"\r"+
	4+"||"+parent_array[4]+"\r"+
	5+"||"+parent_array[5]+"\r"+
	6+"||"+parent_array[6]+"\r"+
	7+"||"+parent_array[7]+"\r"
	);


});

</script>
<html>
<head>
	<title></title>
</head>
<body>
<input type="text" id="incoming"><br>
<button id="send_button" onclick="post()">Confirm</button><br>
<button id="submit_button" onclick="auth()">Submit</button><br> 
</body>
</html>
<script type="text/javascript">
	function post()
	{

		var array_index=parseInt(document.getElementById("incoming").value);
		var parent_array= <?php echo json_encode($parent_array); ?>;
		switch(array_index){
			case 0:
				send(parent_array[0]);
				break;
			case 1:
				send(parent_array[1]);
				break;	
			case 2:
				send(parent_array[2]);
				break;
			case 3:
				send(parent_array[3]);
				break;
			case 4:
				send(parent_array[4]);
				break;
			case 5:
				send(parent_array[5]);
				break;
			case 6:
				send(parent_array[6]);
				break;	
			case 7:
				send(parent_array[7]);
				break;
				
		}
	}        
		function send(submitted_array)
			{
				
				
				$.ajax({
                         		        type: 'post',
		                                url: 'scheme2_authenticate.php',
		                                data: {
                                 	        submission: submitted_array
                                                 }, 
                        		        success: function( data ) {
		                                    console.log( data );
		                                 }
		                       });
                                
                        }
		function auth()
			{
				
				var auth=1;
				$.ajax({
		        type: 'post',
		        url: 'scheme2_authenticate.php',
		        data: {
		            auth: auth

		        },
		        success: function( data ) {
		            console.log( data );
		        }
		    });
                           }
        
	
</script>			