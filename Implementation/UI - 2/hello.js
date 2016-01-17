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


var $container = find(".viewport");
var countCol=0;
var horizontal_rows=[[],[]];
horizontal_rows[[0]].push(countCol);          
window.alert(horizontal_rows[0][0]);
for(var i = 0; i < 3; i++) {
          /*var $container_of_images = $("<div></div>").addClass("row_"+i).css("float","left");  
          $container_of_images.appendTo($container);*/
    for (var j = 0; j < 4; j++){
        //$("<img src=\"img/normal_234.png\"></img>").appendTo($container);

       //var classnobyrow="img_"+i+""+j;
       //$(images[i][j]).addClass(classnobyrow).appendTo($container);
       $(images[i][j]).addClass("forallimg").addClass("row_"+i).appendTo($container);
       //rows =[{img_id:"imgid", row:0, col:0 },{img_id:2, row:0, col:1 },{img_id:3, row:0, col:2 }]
       //imgid will be the one retrieved from the database
        


    }
    $("<div></div>").css("clear", "both").appendTo($container);

}

$container.appendTo($("body"));
//Every image now displayed. Focus on movements
    





$("#r00").mouseover(function(){
        //Move first row left
        
        var listEl = $(".viewport").find(".row_0");
        var first = $(".col_0:first"), last = listEl.children(":last");
        //var first = $(".col_0:first-child"), last = $(".col_0:first-child");
        var item_width = $(".row_0:first").outerWidth()+10;
                $(".row_0:last").after($(".row_0:first"));

    });
$("#r01").mouseover(function(){
        //Move first row left
        
        var listEl = $(".viewport").find(".row_0");
        var first = $(".col_0:first"), last = listEl.children(":last");
        //var first = $(".col_0:first-child"), last = $(".col_0:first-child");
        var item_width = $(".row_0:first").outerWidth()+10;
                $(".row_0:last").insertBefore($(".row_0:first"));
       
    });
    
    
    
});
