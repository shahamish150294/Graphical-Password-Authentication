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
//Array factory
function makeArray(d1, d2) {
    var arr = new Array(d1), i, l;
    for(i = 0, l = d2; i < l; i++) {
        arr[i] = new Array(d1);
    }
    return arr;
};
var images = makeArray(0,4);//[[],[],[]]
// push two images to the array
/*images[[0]].push(createImage("img/normal_1.png", "foo title"));
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
images[[2]].push(createImage("img/normal_12.png", "bar title"));*/
counter2=1;
for(i=0;i<3;i++)
{
  for(j=0;j<4;j++)
  {
    images[[i]].push(createImage("img/normal_"+counter2+".png"));
    counter2++;
  }
}


var $container = $("<div class=\"viewport\"></div>");

var countCol=0;
for(var i = 0; i < 3; i++) {
          /*var $container_of_images = $("<div></div>").addClass("row_"+i).css("float","left");  
          $container_of_images.appendTo($container);*/
    for (var j = 0; j < 4; j++){
        //$("<img src=\"img/normal_234.png\"></img>").appendTo($container);

       //var classnobyrow="img_"+i+""+j;
       //$(images[i][j]).addClass(classnobyrow).appendTo($container);
       $(images[i][j]).addClass("forallimg").addClass("row_"+i).addClass("col_"+j).appendTo($container);
       
          
    }
    $("<div></div>").css("clear", "both").appendTo($container);
}

$container.appendTo($("body"));
//Every image now displayed. Focus on movements

$("#c00").mouseover(function(){
        //Move first column up
        
        var listEl = $(".viewport").find(".col_0");
        var first = $(".col_0:first"), last = listEl.children(":last");
        //var first = $(".col_0:first-child"), last = $(".col_0:first-child");
        var item_width = $(".col_0:first").outerHeight()+10;
        
       
/*        distance = item_height;
        prevProp = { 'scrollTop' : "-=" + distance };
        nextProp = { 'scrollTop' : distance }; 
*/
        //var top_indent= 0;//parseInt($('#carousel_ul').css('left')) - item_height;
        //$(".col_0").animate(500,function(){    
                
                //get the first list item and put it after the last list item (that's how the infinite effects is made) '
                $(".col_0:last").after($(".col_0:first"));
                $(".col_0").animate({top:-item_width})
                //$(".row_0:last").after($(".row_0:first"));
                // $(".col_0:first").removeClass("row_0").addClass("row_2");
                //$(".col_0:last").css({top:'-33%'})
                
                
                //top: -100px;
        //        window.alert(item_width);
                //and get the left indent to the default -210px
        
          //  }); 
        
        //$(".col_0").animate({top:'100px'},2000)
    });
    
    //var rows =[{img_id:1, row:0, col:0 },{img_id:2, row:0, col:1 },{img_id:3, row:0, col:2 }]
    
});
