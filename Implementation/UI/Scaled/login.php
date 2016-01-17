  <?php require_once('DBHelper.php');?>

  <script  src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
              
  <html>
  <head>
    <title></title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
  <style type="text/css">
  .forallimg {
      
      width:50px;
      height:50px;
      margin:5px;
      position: relative;
      background-color:#0000FF;
      border: 1px solid;
  }
  .viewport{
            width:1000px;
            height:730px;
            overflow:hidden;
            
              }
  .col_0{
      display: inline;
  }
  </style>
  </head>

  <body>
    <button id="r00">row0 left</button>
      <button id="r01">row 0 right</button>
      <button id="r10">row 1 left</button>
      <button id="r11">row 1 right</button>
      <button id="r20">row 2 left</button>
      <button id="r21">row 2 right</button>
      <button id="r30">row 3 left</button>
      <button id="r31">row 3 right</button>
      <button id="r40">row 4 left</button>
      <button id="r41">row 4 right</button>
      <button id="submit">Submit</button>

  </body>

  </html>       
  <script>            
  $( document ).ready(function() {

  var jArray= <?php echo json_encode($imagearrays); ?>;
  var imgidArray= <?php echo json_encode($idarray); ?>;
  var $container = $("<div class=\"viewport\"></div>");
  $container.appendTo($("body"));

  /*for(var i=0;i<jArray.length;i++){
  var img =new Image();

  img.src="data:image/png;base64,"+jArray[i];
  $(img).appendTo($container);
  }*/
  //Image Factory
  var createImage = function(src, title) {
    var img   = new Image();
    img.src   = src;
    img.alt   = title;
    img.title = title;
    return img; 
  };
  //Array factory
  function makeArray(d1, d2) {
      var arr = new Array(d1), i, l;
      for(i = 0, l = d2; i < l; i++) {
          arr[i] = new Array(d1);
      }
      return arr;
  };
  var images = makeArray(0,5);//[[],[],[]]
  //Bind Images to database
  counter2=0;
  for(i=0;i<5;i++)
  {
    for(j=0;j<5;j++)
    {
      images[[i]].push(createImage("data:image/png;base64,"+jArray[counter2]));
      counter2++;
    }
  }
  var counter_for_id=0;
  for(var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++){
         $(images[i][j]).addClass("forallimg").addClass("id_"+imgidArray[counter_for_id]).addClass("row_"+i).addClass("col_"+j).appendTo($container);
  counter_for_id++;
      }
      $("<div></div>").css("clear", "both").appendTo($container);
  }
  $container.appendTo($("body"));
  //Every image now displayed. Focus on movements
  counter_for_id--;
  row_size=images[0].length;
  //Create row0 tracker
  //Row 0
  tracker_row0=0;
  $("#r00").mouseover(function(){
          //Move first row left
          
          var listEl = $(".viewport").find(".row_0");
          var first = $(".col_0:first"), last = listEl.children(":last");
          var item_width = $(".row_0:first").outerWidth()+10;
                  $(".row_0:last").after($(".row_0:first"));
          //Manipulate tracker
          tracker_row0--;

      });
  $("#r01").mouseover(function(){
          //Move first row left
          
          var listEl = $(".viewport").find(".row_0");
          var first = $(".col_0:first"), last = listEl.children(":last");
          var item_width = $(".row_0:first").outerWidth()+10;
                  $(".row_0:last").insertBefore($(".row_0:first"));
        /* temp=0;
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
          */
          tracker_row0++;
          tracker_row0=(tracker_row0)%row_size;
      });
          
  //Row 1
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
  //        window.alert(tracker_row1);
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
  //Row 2
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
  //Create row3 tracker
  tracker_row3=0;

  $("#r30").mouseover(function(){
          //Move first row left
          
          var listEl = $(".viewport").find(".row_3");
          var item_width = $(".row_3:first").outerWidth()+10;
          $(".row_3:last").after($(".row_3:first"));
          //Manipulate tracker
          tracker_row3--;
          //window.alert(tracker_row3);
      });
  $("#r31").mouseover(function(){
          //Move first row right
          var listEl = $(".viewport").find(".row_3");
          var item_width = $(".row_3:first").outerWidth()+10;
          $(".row_3:last").insertBefore($(".row_3:first"));
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
          tracker_row3++;
          tracker_row3=(tracker_row3)%row_size;
      });

  //Create row4 tracker
  tracker_row4=0;

  $("#r40").mouseover(function(){
          //Move first row left
          
          var listEl = $(".viewport").find(".row_4");
          var item_width = $(".row_4:first").outerWidth()+10;
          $(".row_4:last").after($(".row_4:first"));
          //Manipulate tracker
          tracker_row4--;
          //window.alert(tracker_row0);
      });
  $("#r41").mouseover(function(){
          //Move first row right
          var listEl = $(".viewport").find(".row_4");
          var item_width = $(".row_4:first").outerWidth()+10;
          $(".row_4:last").insertBefore($(".row_4:first"));
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
          tracker_row4++;
          tracker_row4=(tracker_row4)%row_size;
      });




  //On Submit  
          $("#submit").click(function(){
          temp=0;
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
          if(tracker_row3<0)
          {
            temp=row_size;
            store_pos_tracker_row3=-tracker_row3;
          
            while(temp<store_pos_tracker_row3)
            {
              temp=temp+row_size;
            }
            tracker_row3=temp+tracker_row3;
          }
          if(tracker_row4<0)
          {
            temp=row_size;
            store_pos_tracker_row4=-tracker_row4;
          
            while(temp<store_pos_tracker_row4)
            {
              temp=temp+row_size;
            }
            tracker_row4=temp+tracker_row4;
          }

          //Get current images with the help of Ids
        window.alert(counter_for_id);

        var new_image_positions = []; 
          for(i=1;i<=counter_for_id+1;i++)
          {
          var get_all_classname = document.getElementsByClassName("id_"+i.toString())[0].className;
          
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
            case 3:
                get_col=(get_col+tracker_row3)%row_size;
                break;
            case 4:
                get_col=(get_col+tracker_row4)%row_size;
                break;
          }
          new_image_positions.push({id:i,row:get_row,col:get_col});
          }

           window.alert(new_image_positions[0].id+"||"+new_image_positions[0].row+":"+new_image_positions[0].col);+"\r"+
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
                      new_image_positions[11].id+"||"+new_image_positions[11].row+":"+new_image_positions[11].col+"\r"+
                      new_image_positions[12].id+"||"+new_image_positions[12].row+":"+new_image_positions[12].col+"\r"+
                      new_image_positions[13].id+"||"+new_image_positions[13].row+":"+new_image_positions[13].col+"\r"+
                      new_image_positions[14].id+"||"+new_image_positions[14].row+":"+new_image_positions[14].col+"\r"+
                      new_image_positions[15].id+"||"+new_image_positions[15].row+":"+new_image_positions[15].col+"\r"+
                      new_image_positions[16].id+"||"+new_image_positions[16].row+":"+new_image_positions[16].col+"\r"+
                      new_image_positions[17].id+"||"+new_image_positions[17].row+":"+new_image_positions[17].col+"\r"+
                      new_image_positions[18].id+"||"+new_image_positions[18].row+":"+new_image_positions[18].col+"\r"+
                      new_image_positions[19].id+"||"+new_image_positions[19].row+":"+new_image_positions[19].col+"\r"+
                      new_image_positions[20].id+"||"+new_image_positions[20].row+":"+new_image_positions[20].col+"\r"+
                      new_image_positions[21].id+"||"+new_image_positions[21].row+":"+new_image_positions[21].col+"\r"+
                      new_image_positions[22].id+"||"+new_image_positions[22].row+":"+new_image_positions[22].col+"\r"+
                      new_image_positions[23].id+"||"+new_image_positions[23].row+":"+new_image_positions[23].col+"\r"+
                      new_image_positions[24].id+"||"+new_image_positions[24].row+":"+new_image_positions[24].col
                      );
            //Send the new_image_positions to scheme1_authenticate.php
            var a=[];
            a.push({id:1,row:0,col:0});
            $.ajax({
                type: 'post',
                url: 'scheme1_authenticate.php',
                data: {
                    new_image_positions: new_image_positions

                },
                success: function( data ) {
                    window.alert(data);
                    console.log( data );
                }
            });

          });
  });

  </script>   