$(document).ready(function() {

	//returns DOM object
	var video = $("#vid1")[0];

	var playButton = $("#play-pause");
	var nowTime = $("#current-time");
	var durationTime = $("#duration-time");
	var scrubBar = $("#scrub-bar");
	var volumeBar = $("volume-bar");
	var fullScreenButton = $("#full-screen");

	//play button
	playButton.on('click', function() {
		if(video.paused) {
			video.play();
			//http://image.flaticon.com/icons/png/256/12/12193.png
			$('#play-img').attr('src','http://image.flaticon.com/icons/png/256/12/12193.png');
		}
		else {
			video.pause();
			$('#play-img').attr('src','https://cdn2.iconfinder.com/data/icons/media-and-navigation-buttons-round/512/Button_3-512.png');
			//$("#play-img").attr('src',"https://cdn2.iconfinder.com/data/icons/media-and-navigation-buttons-round/512/Button_3-512.png");
		}
		return false;
	});

	//duration and current time
	$("#vid1").on('timeupdate', function() {
		durationTime.text(video.duration);
		nowTime.text(video.currentTime);

		var currentPos = video.currentTime;
		var maxduration = video.duration;
		var percentage = 100 * (currentPos / maxduration);
		$(".timeBar").css("width", percentage+"%");
	});






	var timeDrag = false;
	$('.progressBar').mousedown(function(e) {
	    timeDrag = true;
	    updatebar(e.pageX);
	});
	$(document).mouseup(function(e) {
	    if(timeDrag) {
	        timeDrag = false;
	        updatebar(e.pageX);
	    }
	});
	$(document).mousemove(function(e) {
	    if(timeDrag) {
	        updatebar(e.pageX);
	    }
	});
	 
	//update Progress Bar control
	var updatebar = function(x) {
	    var progress = $('.progressBar');
	    var maxduration = video.duration; //Video duraiton
	    var position = x - progress.offset().left; //Click pos
	    var percentage = 100 * position / progress.width();
	 
	    //Check within range
	    if(percentage > 100) {
	        percentage = 100;
	    }
	    if(percentage < 0) {
	        percentage = 0;
	    }
	 
	    //Update progress bar and video currenttime
	    $('.timeBar').css('width', percentage+'%');
	    video.currentTime = maxduration * percentage / 100;
	};







	var startBuffer = function() {
	    var maxduration = video.duration;
	    var currentBuffer = video.buffered.end(0);
	    var percentage = 100 * currentBuffer / maxduration;
	    $('.bufferBar').css('width', percentage+'%');
	 
	    if(currentBuffer < maxduration) {
	        setTimeout(startBuffer, 500);
	    }
	};
	setTimeout(startBuffer, 500);



	$('.muted').click(function() {
	    video.muted = !video.muted;
	    return false;
	});
	 
	//Volume control clicked
	$('.volumeBar').on('mousedown', function(e) {
	    var position = e.pageX - volume.offset().left;
	    var percentage = 100 * position / volume.width();
	    $('.volumeBar').css('width', percentage+'%');
	    video.volume = percentage / 100;
	});


/*Not working right now, need to fix*/
	//Fast forward control
	$('.ff').on('click', function() {
	    video.playbackrate = 50;
	    return false;
	});
	 
	//Rewind control
	$('.rw').on('click', function() {
	    video.playbackrate = -5;
	    return false;
	});
	 
	//Slow motion control
	$('.sl').on('click', function() {
	    video.playbackrate = 0.5;
	    return false;
	});


	// does not work, needs to be fixed
	$('.fullscreen').on('click', function() {
	    if(video.requestFullscreen) {
	    	video.requestFullscreen();
	    }
	 
	    return false;	
	});






});

/*



$(document).ready(function(){
  $("#video-active").on(
    "timeupdate", 
    function(event){
      onTrackedVideoFrame(this.currentTime, this.duration);
    });
}

function onTrackedVideoFrame(currentTime, duration){
    $("#current").text(currentTime);
    $("#duration").text(duration);
}
*/

