var images = [{
    "src": "http://lorempixel.com/400/200/sports/",
        "caption": "Donec id mauris et metus semper euismod vitae in nunc, metus semper euismod vitae."
}, {
    "src": "http://lorempixel.com/400/200/nature/",
        "caption": "Interdum et malesuada fames ac ante ipsum primis in faucibus. "
}, {
    "src": "http://lorempixel.com/400/200/business/",
        "caption": "Aenean porttitor orci elit. Maecenas a commodo felis, a mollis sem."
}, {
    "src": "http://lorempixel.com/400/200/food/",
        "caption": "Aliquam aliquet et tellus quis rhoncus. Vivamus pellentesque id enim sed ullamcorper."
}, {
    "src": "http://lorempixel.com/400/200/abstract/",
        "caption": "Praesent nec urna et elit fermentum volutpat tincidunt eu urna."
}, {
    "src": "http://lorempixel.com/400/200/fashion/",
        "caption": "Nam mattis lectus magna, eu tempor ipsum."
}];

var total = images.length - 1,
    current = 0,
    startX = '',
    startY = '',
    endX = '',
    endY = '',
    start = '',
    end = '',
    moveX = '',
    moveY = '',
    moveTo = '',
    dragDistance = '',
    dragDirection = '',
    dragCompleteX = '',
    dragCompleteY = '',
    /* default */
    //swipeDuration = 1000,
    thresholdX = 30,
    thresholdY = 30,
    preloaded = 1,
    totalImg = images.length;


function preloadImg(x) {
    $(x).removeAttr("onload");
    if (preloaded == totalImg) {
        $.mobile.loading("hide");
    }
    preloaded++;
}

$(document).on("pageinit", "#gallery", function () {
    setTimeout(function () {
        $.mobile.loading("show", {
            text: "loading photos..",
            textVisible: true
        });
    }, 10);
    $.each(images, function (i, data) {

        $("<div class='holder hidden'><img onload='preloadImg(this)' src=" + data.src + " /><div class='caption'><p>" + data.caption + "</p></div></div>").appendTo(".inner");
    });
    $(".inner .holder:first-child").toggleClass("visible hidden first-child");
    $(".inner .holder:last-child").toggleClass("last-child");
});

$(document).on("touchstart", ".inner", function (e, ui) {
    e.preventDefault();
    startX = e.originalEvent.touches[0].pageX;
    startY = e.originalEvent.touches[0].pageY;
    /* drag images */
}).on("touchmove", ".inner", function (e, ui) {
    e.preventDefault();
    moveX = e.originalEvent.touches[0].pageX;
    moveY = e.originalEvent.touches[0].pageY;
    XmoveTo = Math.abs(startX - moveX);
    YmoveTo = Math.abs(startY - moveY);
    dragDistanceX = Math.abs(startX - moveX);
    dragDistanceY = Math.abs(startY - moveY);
    /* Left */
    if (startX > moveX && XmoveTo > 10 && Math.abs(startY - moveY) < 10 && (dragDirection != "up" || dragDirection != "right" || dragDirection != "down")) {
        dragDirection = "left";
        var next = $(".visible").hasClass("last-child") ? $(".first-child") : $(".visible").next();
        $(".visible").css({
            left: "-" + XmoveTo + "px"
        });
        $(next).css({
            left: $(".visible").width() + "px"
        }).removeClass("hidden").css({
            left: $(".visible").width() - XmoveTo + "px",
            top: 0
        });
    }
    /* right */
    if (startX < moveX && XmoveTo > 10 && Math.abs(startY - moveY) < 10 && (dragDirection != "up" || dragDirection != "left" || dragDirection != "down")) {
        dragDirection = "right";
        var prev = $(".visible").hasClass("first-child") ? $(".last-child") : $(".visible").prev();
        $(".visible").css({
            left: XmoveTo + "px"
        });
        $(prev).css({
            left: "-" + $(".visible").width() + "px"
        }).removeClass("hidden").css({
            left: XmoveTo - $(".visible").width() + "px",
            top: 0
        });
    }
    /* up */
    if (startY > moveY && YmoveTo > 10 && Math.abs(startX - moveX) < 10 && (dragDirection != "left" || dragDirection != "right" || dragDirection != "down")) {
        dragDirection = "up";
        var next = $(".visible").hasClass("last-child") ? $(".first-child") : $(".visible").next();
        $(".visible").css({
            top: "-" + YmoveTo + "px"
        });
        $(next).css({
            top: $(".visible").height() + "px"
        }).removeClass("hidden").css({
            top: $(".visible").height() - YmoveTo + "px",
            left: 0
        });
    }
    /* down */
    if (startY < moveY && YmoveTo > 10 && Math.abs(startX - moveX) < 10 && (dragDirection != "left" || dragDirection != "right" || dragDirection != "up")) {
        dragDirection = "down";
        var prev = $(".visible").hasClass("first-child") ? $(".last-child") : $(".visible").prev();
        $(".visible").css({
            top: YmoveTo + "px"
        });
        $(prev).css({
            top: $(".visible").height() + "px"
        }).removeClass("hidden").css({
            top: YmoveTo - $(".visible").height() + "px",
            left: 0
        });
    }

    /* debug */
    console.log("Drag Direction: " + dragDirection);

    /* finalize animation */
}).on("touchend", ".inner", function (e, ui) {
    e.preventDefault();
    endX = e.originalEvent.changedTouches[0].pageX;
    endY = e.originalEvent.changedTouches[0].pageY;
    dragCompleteX = Math.abs(startX - endX);
    dragCompleteY = Math.abs(startY - endY);
    if (dragDirection == "left") {
        var next = $(".visible").hasClass("last-child") ? $(".first-child") : $(".visible").next();
        if (dragDistanceX < 150) {
            $(".visible").animate({
                left: 0
            },
            200);
            $(next).animate({
                left: $(".visible").width() + "px"
            }, 250);
        } else if (dragDistanceX > 150 && dragCompleteX > 10) {
            $(".visible").animate({
                left: "-" + $(".visible").width() + "px"
            },
            250, function () {
                $(this).toggleClass("visible");
            });
            $(next).animate({
                left: 0
            }, 200, function () {
                $(this).toggleClass("visible");
            });
        }
    }
    if (dragDirection == "right") {
        var prev = $(".visible").hasClass("first-child") ? $(".last-child") : $(".visible").prev();
        if (dragDistanceX < 150) {
            $(".visible").animate({
                left: 0
            },
            200);
            $(prev).animate({
                left: "-" + $(".visible").width() + "px"
            }, 250);
        } else if (dragDistanceX > 150 && dragCompleteX > 10) {
            $(".visible").animate({
                left: $(".visible").width() + "px"
            },
            250, function () {
                $(this).toggleClass("visible");
            });
            $(prev).animate({
                left: 0
            }, 200, function () {
                $(this).toggleClass("visible");
            });
        }
    }
    if (dragDirection == "up") {
        var next = $(".visible").hasClass("last-child") ? $(".first-child") : $(".visible").next();
        if (dragDistanceY < 50) {
            $(".visible").animate({
                top: 0
            },
            200);
            $(next).animate({
                top: $(".visible").height() + "px"
            }, 250);
        } else if (dragDistanceY > 50 && dragCompleteY > 10) {
            $(".visible").animate({
                top: "-" + $(".visible").height() + "px"
            },
            250, function () {
                $(this).toggleClass("visible");
            });
            $(next).animate({
                top: 0
            }, 200, function () {
                $(this).toggleClass("visible");
            });
        }
    }
    if (dragDirection == "down") {
        var prev = $(".visible").hasClass("first-child") ? $(".last-child") : $(".visible").prev();
        if (dragDistanceY < 50) {
            $(".visible").animate({
                top: "-" + $(".visible").height() + "px"
            },
            200);
            $(prev).animate({
                top: 0
            }, 250);
        } else if (dragDistanceY > 50 && dragCompleteY > 10) {
            $(".visible").animate({
                top: $(".visible").height() + "px"
            },
            250, function () {
                $(this).toggleClass("visible");
            });
            $(prev).animate({
                top: 0
            }, 200, function () {
                $(this).toggleClass("visible");
            });
        }
    }
});