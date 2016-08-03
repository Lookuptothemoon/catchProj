console.log("Hello World!"); //for reference

function init() {
    var width = $(window).width();
    var height = $(window).height();

    $('#jqWidth').html(width);
    $('#jqHeight').html(height);


    var headerHeight = 966; //header bckgrd image original height
    var headerWidth = 2000; //header bckgrd image original width

    var topWidth = $(".header-image").width();
    var topwidth = $(".header-image").css("width")
    var change = topWidth/headerWidth; //checks how much width value of width changed
    $(".header-image").height(headerHeight*change) //approximately resizes top-image height
    // header text size
    $(".header-content > p").css("font-size", topWidth/10);



    var headerHeight = 1800; //rockefeller image original height
    var headerWidth = 2880; //header bckgrd image original width

    var topWidth = $(".rockefeller-content").width();
    var topwidth = $(".rockefeller-content").css("width")
    console.log("Top Width: " + topWidth);
    console.log("Css Width: " + topwidth);
    var change = topWidth/headerWidth; //checks how much width value of width changed
    var propHeight = headerHeight*change
    $(".rockefeller-content").height(propHeight*1.5) //approximately resizes top-image height



    var headerHeight = 1270; //quiz image original height
    var headerWidth = 1912; //quiz bckgrd image original width

    var topWidth = $(".quiz-content").width();
    var topwidth = $(".quiz-content").css("width")
    console.log("Top Width: " + topWidth);
    console.log("Css Width: " + topwidth);
    var change = topWidth/headerWidth; //checks how much width value of width changed
    var propHeight = headerHeight*change
    $(".quiz-content").height(propHeight) //approximately resizes top-image height



    //mouse to inform scrolling
    $(window).bind('scroll', function() {
        mouse = $(".scroll-content");
        if ($(window).scrollTop() > 150) {
            mouse.hide();
        }
        else {
            mouse.show();    //get rid of this if you do not want to show anymore
        }
    });
    
    //ScrollMagic Stuff
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onCenter'
        }
    });

    $("section").each(function() {
        var section = $(this).attr('id');

        new ScrollMagic.Scene({
            triggerElement: this
        })
        .addIndicators({
            colorStart: "rgba(255,255,255,0.5)",
            colorEnd: "rgba(255,255,255,0.5)", 
            colorTrigger: "rgba(255,255,255,1)",
            name:section
        })
        .addTo(controller);
    });



/*
Tweens --> 
    Elastic.easeIn
    Elastic.easeInout
    Back.easeOut
    Power1.easeOut
    Power2.easeOut
    Power3.easeOut
    Power4.easeOut
    SlowMo.ease
*/

    var line = CSSRulePlugin.getRule(".mil-quote:before");
    var tween = TweenMax.to(line, .5, {cssRule:{top:-50}});

    var Scene = new ScrollMagic.Scene({
        triggerElement: ".rockefeller-content"
    })
    .setTween(tween)
    .addIndicators({
        colorStart: "rgba(255,255,255,0.5)",
        colorEnd: "rgba(255,255,255,0.5)", 
        colorTrigger: "rgba(255,255,255,1)",
        name:line
    })
    .addTo(controller);

}



function jqUpdateSize() {
    var width = $(window).width();
    var height = $(window).height();

    $('#jqWidth').html(width);
    $('#jqHeight').html(height);


    var headerHeight = 966; //header bckgrd image original height
    var headerWidth = 2000; //header bckgrd image original width

    var topWidth = $(".header-image").width();
    var topwidth = $(".header-image").css("width")
    console.log("Top Width: " + topWidth);
    console.log("Css Width: " + topwidth);
    var change = topWidth/headerWidth; //checks how much width value of width changed
    $(".header-image").height(headerHeight*change) //approximately resizes top-image height

    $(".header-content > p").css("font-size", topWidth/10);

    console.log("Width: " + width);
    console.log("Height " + height);

};
$(window).ready(init);
$(window).resize(init);

