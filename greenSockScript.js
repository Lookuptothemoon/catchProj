/*
we'll use a window.onload for simplicity, but typically it is best to use either 
jQuery's $(document).ready() or 
$(window).load() or 
cross-browser event listeners so that you're not limited to one.
*/
var clicked = false;

function init(){
    var tl_1 = new TimelineMax();


    $(function() {
        $(window).on("mousewheel", function() {
            console.log("Scroll Top: " + $(window).scrollTop());
            // console.log("Scroll Left: " + $(window).scrollLeft());
        });
    });

    var width = $("#container").width();
    var height = $(window).height();

    $('#jqWidth').html(width);
    $('#jqHeight').html(height);

    var load_bars = new Array();
    var load_bar1 = $("#load-bar1");
    var load_bar2 = $("#load-bar2");
    var load_bar3 = $("#load-bar3");
    var load_bar4 = $("#load-bar4");
    var load_bar5 = $("#load-bar5");
    var load_bar6 = $("#load-bar6");
    var load_bar7 = $("#load-bar7");

    load_bars.push(load_bar1);
    load_bars.push(load_bar2);
    load_bars.push(load_bar3);
    load_bars.push(load_bar4);
    load_bars.push(load_bar5);
    load_bars.push(load_bar6);
    load_bars.push(load_bar7);

    var duration = .45;
    //TweenLite.from([load_bar1,load_bar2,load_bar3,load_bar4,load_bar5,load_bar6,load_bar7], 2, {x:-150 opacity:0, left:"150px"});
    // TweenLite.to( [load_bar1,load_bar2,load_bar3,load_bar4,load_bar5,load_bar6,load_bar7], 1, {width:width, delay:1} );


    //randomly selects color
    function random_color(object) { 
        var colors = [
            '#B098A4',
            '#CECFC7',
            '#DBD9DB',
            '#E5EBEA',
            '#A790A5',
            '#875C74',
            '#D65780',
            '#D65780',
            '#EE9480',
            '#FED766',
            '#E8B4BC',
            '#9E0031',
            '#78CAD2',
            '#5497A7',
            '#50858B',
            '#DD6031',
            '#FEF6C9',
            '#005E7C',
            '#187795',
            '#C99DA3',
            '#D81E5B',
            '#EB5E55',
            '#E20909'
        ];
        color = colors[Math.floor(Math.random() * colors.length)];
        tl_1.to(object, .1, {backgroundColor:color});
        // Used this website for colors: https://coolors.co/c5ebc3-875c74-a790a5-beb7df-b098a4
    }

    //sets attributes for load_bars
    for (i=0; i<load_bars.length; i++) {
        random_color(load_bars[i]);
        load_bars[i].css("height", height/7.10);
        load_bars[i].css("width", 0);
    }

    tl_1.to(load_bar1, duration, {width:width})
        .to(load_bar2, duration, {width:width}, "-=.05")
        .to(load_bar3, duration, {width:width}, "-=.05")
        .to(load_bar4, duration, {width:width}, "-=.05")
        .to(load_bar5, duration, {width:width}, "-=.05")
        .to(load_bar6, duration, {width:width}, "-=.05")
        .to(load_bar7, duration, {width:width}, "-=.05")
    //load_bar4.text( "HELLO!" );
    //$( "#load-bar4" ).empty();

    //makes all load_bars blue
    for (i=0; i<load_bars.length; i++) {
        tl_1.to(load_bars[i], .55, {backgroundColor:"blue"});
    }

    /*
    //load_bars slide out of view
    tl_1.to(load_bar7, duration, {width:0, height:height/7.10})
        .to(load_bar6, duration, {width:0, height:height/7.10})
        .to(load_bar5, duration, {width:0, height:height/7.10})
        .to(load_bar4, duration, {width:0, height:height/7.10})
        .to(load_bar3, duration, {width:0, height:height/7.10})
        .to(load_bar2, duration, {width:0, height:height/7.10})
        .to(load_bar1, duration, {width:0, height:height/7.10})
    */


    var end_bar1 = $("#end-bar1");
    var end_bar2 = $("#end-bar2");
    var end_bar3 = $("#end-bar3");
    var end_bar4 = $("#end-bar4");
    var end_bar5 = $("#end-bar5");
    var end_bar6 = $("#end-bar6");
    var end_bar7 = $("#end-bar7");

    /*
    tl_1.to(end_bar1, duration, {width:width, height:height/7.10});
    tl_1.to(end_bar2, duration, {width:width, height:height/7.10});
    tl_1.to(end_bar3, duration, {width:width, height:height/7.10});
    tl_1.to(end_bar4, duration, {width:width, height:height/7.10});
    tl_1.to(end_bar5, duration, {width:width, height:height/7.10});
    tl_1.to(end_bar6, duration, {width:width, height:height/7.10});
    tl_1.to(end_bar7, duration, {width:width, height:height/7.10});
    */
    //end of loading bars

    //click functions
    if (clicked == false) {
        $( "#knot" ).click(function() {
            TweenLite.to(knot, 3, {x:width-100, y:330, ease:Bounce.easeOut});
            $("#knot").css("cursor", "default");
            clicked = true;
        });
    }
    else {
        TweenLite.to(knot, 3, {x:width-100, y:330});
        clicked = true;
    }

    $( "#text" ).click(function() {
        TweenLite.to(text, 3, {left:width-232, ease:Bounce.easeOut});
        $("#text").css("cursor", "default");
    });

    $( "#kanye" ).click(function() {
        TweenLite.to($("#kanye"), 3, {left:width-100, ease:Power2.easeOut});
        $("#kanye").css("cursor", "default");
    });

    $( "#cat" ).click(function() {
        TweenLite.to(cat, 3, {x:200, y:-205});
        $("#cat").css("cursor", "default");
    });

    $( "#friends" ).click(function() {
        TweenLite.to(friends, 3, {width:width});
        $("#friends").css("cursor", "default");
    });

    $( "#happy" ).click(function() {
        TweenLite.to(happy, 2, {rotation:360, transformOrigin:"right 100%"});
        $("#happy").css("cursor", "default");
    });

    var line = CSSRulePlugin.getRule(".line:before");
    TweenLite.to(line, 3, {cssRule:{top:100}});


    /*
    tl_1.to(el, 2, {left:10});
    tl_1.to(el, 1, {top:20});
    tl_1.pause();
    tl_1.resume();
    tl_1.seek(1.5);
    */

    //t1_1.to(load_bar1, duration, {width:width, height:height/7.10, repeat:2, yoyo:true}); //need to figure this out

        

// ___________________________________________________________________________________________________________

    //Draggable.create("#kanye", {type:"x,y", edgeResistance:0.35, bounds:"container", throwProps:false});

    /*
    Elastic.easeIn
    Elastic.easeInout
    Back.easeOut
    Power1.easeOut
    Power2.easeOut
    Power3.easeOut
    Power4.easeOut
    SlowMo.ease
    */
    console.log("If this works, YAY!");
};

$(window).ready(init);
$(window).resize(init);

