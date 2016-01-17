$( document ).ready(function() {
  // Handler for .ready() called.

// Image factory
var createImage = function(src, title) {
  var img   = new Image();
  img.src   = src;
  img.alt   = title;
  img.title = title;
  return img; 
};

var images = [[],[],[]];
var imgidArrays=[];
// push two images to the array
images[[0]].push(createImage("img/normal_1.png", "foo title"));
images[[0]].push(createImage("img/normal_2.png", "bar title"));
images[[0]].push(createImage("img/normal_3.png", "foo title"));
images[[0]].push(createImage("img/normal_4.png", "bar title"));
images[[1]].push(createImage("img/normal_5.png", "foo title"));
images[[1]].push(createImage("img/normal_6.png", "bar title"));
images[[1]].push(createImage("img/normal_7.png", "foo title"));
images[[1]].push(createImage("img/normal_8.png", "bar title"));
images[[2]].push(createImage("img/normal_9.png", "foo title"));
images[[2]].push(createImage("img/normal_10.png", "bar title"));
images[[2]].push(createImage("img/normal_11.png", "foo title"));
images[[2]].push(createImage("img/normal_12.png", "bar title"));


var $container = $("<div class=\"viewport\"></div>");
var counter_for_id=0;
/*var horizontal_rows=[[],[]];
horizontal_rows[[0]].push(countCol);      
window.alert(horizontal_rows[0][0]);*/
for(var i = 0; i < 3; i++) {
          /*var $container_of_images = $("<div></div>").addClass("row_"+i).css("float","left");  
          $container_of_images.appendTo($container);*/
    for (var j = 0; j < 4; j++){
        //$("<img src=\"img/normal_234.png\"></img>").appendTo($container);

       //var classnobyrow="img_"+i+""+j;
       //$(images[i][j]).addClass(classnobyrow).appendTo($container);
       $(images[i][j]).addClass("forallimg").addClass("id_"+counter_for_id).addClass("row_"+i).addClass("col_"+j).appendTo($container);
       //rows =[{img_id:"imgid", row:0, col:0 },{img_id:2, row:0, col:1 },{img_id:3, row:0, col:2 }]
       //imgid will be the one retrieved from the database
        counter_for_id++; 


    }
    $("<div></div>").css("clear", "both").appendTo($container);

}
counter_for_id--;//Used while submitting also so 0
$container.appendTo($("body"));
//Every image now displayed. Focus on movements

row_size=images[0].length;
//Create row0 tracker
tracker_row0=0;

$("#r00").mouseover(function(){
        //Move first row left
        
        var listEl = $(".viewport").find(".row_0");
        var item_width = $(".row_0:first").outerWidth()+10;
        $(".row_0:last").after($(".row_0:first"));
        //Manipulate tracker
        tracker_row0--;
        //window.alert(tracker_row0);
    });
$("#r01").mouseover(function(){
        //Move first row right
        var listEl = $(".viewport").find(".row_0");
        var item_width = $(".row_0:first").outerWidth()+10;
        $(".row_0:last").insertBefore($(".row_0:first"));
        /*temp=0;
        if(tracker_row0<0)
        {
          temp=row_size;
          store_pos_tracker_row0=-tracker_row0;
        
          while(temp<store_pos_tracker_row0)
          {
            temp=temp+row_size;
          }
          tracker_row0=temp+tracker_row0;
        }*/
        tracker_row0++;
        tracker_row0=(tracker_row0)%row_size;
    });

tracker_row1=0;
$("#r10").mouseover(function(){
        //Move first row left
        
        var listEl = $(".viewport").find(".row_1");
        var item_width = $(".row_1:first").outerWidth()+10;
        $(".row_1:last").after($(".row_1:first"));
        //Manipulate tracker
        tracker_row1--;
        //window.alert(tracker_row0);
    });
$("#r11").mouseover(function(){
        //Move first row right
        var listEl = $(".viewport").find(".row_1");
        var item_width = $(".row_1:first").outerWidth()+10;
        $(".row_1:last").insertBefore($(".row_1:first"));
        temp=0;
        //window.alert(tracker_row1);
        /*if(tracker_row1<0)
        {
          temp=row_size;
          store_pos_tracker_row1=-tracker_row1;
        
          while(temp<store_pos_tracker_row1)
          {
            temp=temp+row_size;
          }
          tracker_row1=temp+tracker_row1;
        }*/
        tracker_row1++;
        tracker_row1=(tracker_row1)%row_size;
    });
tracker_row2=0;
$("#r20").mouseover(function(){
        //Move first row left
        
        var listEl = $(".viewport").find(".row_2");
        var item_width = $(".row_2:first").outerWidth()+10;
        $(".row_2:last").after($(".row_2:first"));
        //Manipulate tracker
        tracker_row2--;
        //window.alert(tracker_row0);
    });
$("#r21").mouseover(function(){
        //Move first row right
        var listEl = $(".viewport").find(".row_2");
        var item_width = $(".row_2:first").outerWidth()+10;
        $(".row_2:last").insertBefore($(".row_2:first"));
        temp=0;
        //window.alert(tracker_row2);
        /*if(tracker_row2<0)
        {
          temp=row_size;
          store_pos_tracker_row2=-tracker_row2;
        
          while(temp<store_pos_tracker_row2)
          {
            temp=temp+row_size;
          }
          tracker_row2=temp+tracker_row2;
        }*/
        tracker_row2++;
        tracker_row2=(tracker_row2)%row_size;
    });
  
        $("#submit").click(function(){
          var temp=0;
        if(tracker_row0<0)
        {
          temp=row_size;
          store_pos_tracker_row0=-tracker_row0;
        
          while(temp<store_pos_tracker_row0)
          {
            temp=temp+row_size;
          }
          tracker_row0=temp+tracker_row0;
        }
        if(tracker_row1<0)
        {
          temp=row_size;
          store_pos_tracker_row1=-tracker_row1;
        
          while(temp<store_pos_tracker_row1)
          {
            temp=temp+row_size;
          }
          tracker_row1=temp+tracker_row1;
        }
        if(tracker_row2<0)
        {
          temp=row_size;
          store_pos_tracker_row2=-tracker_row2;
        
          while(temp<store_pos_tracker_row2)
          {
            temp=temp+row_size;
          }
          tracker_row2=temp+tracker_row2;
        }

        //Get current images with the help of Ids
        var new_image_positions = []; 
        for(i=0;i<=counter_for_id;i++)
        {
        
        var get_all_classname = document.getElementsByClassName("id_"+i)[0].className;
        var get_row = parseInt((get_all_classname.split(" ")[2]).replace("row_",""));
        var get_col = parseInt((get_all_classname.split(" ")[3]).replace("col_",""));
        switch(get_row)
        {
          case 0:
              get_col=(get_col+tracker_row0)%row_size;   
              break; 
          case 1:
              get_col=(get_col+tracker_row1)%row_size;
              break;
          case 2:
              get_col=(get_col+tracker_row2)%row_size;
              break;
        }
        new_image_positions.push({id:i,row:get_row,col:get_col});
        }  
        window.alert(new_image_positions[0].id+"||"+new_image_positions[0].row+":"+new_image_positions[0].col+"\r"+
                    new_image_positions[1].id+"||"+new_image_positions[1].row+":"+new_image_positions[1].col+"\r"+
                    new_image_positions[2].id+"||"+new_image_positions[2].row+":"+new_image_positions[2].col+"\r"+
                    new_image_positions[3].id+"||"+new_image_positions[3].row+":"+new_image_positions[3].col+"\r"+
                    new_image_positions[4].id+"||"+new_image_positions[4].row+":"+new_image_positions[4].col+"\r"+
                    new_image_positions[5].id+"||"+new_image_positions[5].row+":"+new_image_positions[5].col+"\r"+
                    new_image_positions[6].id+"||"+new_image_positions[6].row+":"+new_image_positions[6].col+"\r"+
                    new_image_positions[7].id+"||"+new_image_positions[7].row+":"+new_image_positions[7].col+"\r"+
                    new_image_positions[8].id+"||"+new_image_positions[8].row+":"+new_image_positions[8].col+"\r"+
                    new_image_positions[9].id+"||"+new_image_positions[9].row+":"+new_image_positions[9].col+"\r"+
                    new_image_positions[10].id+"||"+new_image_positions[10].row+":"+new_image_positions[10].col+"\r"+
                    new_image_positions[11].id+"||"+new_image_positions[11].row+":"+new_image_positions[11].col);
        });
        //Send the new_image_positions to scheme2_authenticate.php
        $.ajax({
            type: 'post',
            url: 'scheme1_authenticate.php',
            data: {
                new_image_positions: new_image_positions;

            },
            success: function( data ) {
                console.log( data );
            }
        });
});
