console.log("Hello World!"); //for reference


window.onload = function(){
    var logo = $(".header");
    TweenLite.to(logo, 5, {left:"440px", ease:Bounce.easeOut});

}










/*This controls the height of the background image*/
function jqUpdateSize(){
    // Get the dimensions of the viewport
    var width = $(window).width();
    var height = $(window).height();

    $('#jqWidth').html(width);      // Display the width
    $('#jqHeight').html(height);    // Display the height
    $(".header-image").css("height", height-51);

    console.log("Width: " + width);
    console.log("Height " + height);
};
$(document).ready(jqUpdateSize);    // When the page first loads
$(window).resize(jqUpdateSize);     // When the browser changes size
/*This is the end of the function that controls height*/