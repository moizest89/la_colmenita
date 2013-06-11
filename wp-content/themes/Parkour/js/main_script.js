$(function(){
	var body = $('body'),
		links_to_scroll = [],
		links_destination = [],
		div_destination = [];
	links_scolling = (body.find('a.scroll_to'))
	for (var i = 0; i < links_scolling.length; i++) {
		links_destination.push($(links_scolling[i]).attr('href'))
	};
	$('a.scroll_to').click(function(){
		var element_to_scroll = $(this).attr('href');
		var element_to_id = $(this).attr('id')
		var top_arrow = $(this).attr("rev")
		// =====================================

		$('a.scroll_to').removeClass('active')
		$(this).addClass('active');
		if (element_to_id != "scroll_link_slider"){
			$("img#arrow_active").animate({
				opacity:1.0
			})
		}else{
			$("img#arrow_active").animate({
				opacity:0,
				top:0
			})
		}
		$("img#arrow_active").animate({
			top:top_arrow
		},800);
		$('html,body').animate({
			scrollLeft: (($(element_to_scroll).offset().left)- 75)
		},{duration:1500,
           	specialEasing:{
            	scrollLeft: 'easeOutBack'
 			},complete:function(){

		}})
		
		return false;
	});
   	$('#slider, #largeSlider, #slidiv1, #slidiv2, #slidiv3, #slidiv4 ,#slidiv5').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
	  if (isInView) {
	    // element is now visible in the viewport
	   
	     $(this).addClass("inview");
	     var id_element = $(this).attr("id")
	     //console.log(id_element)
	     //$("a#scroll_link_"+id_element).addClass("active")
		    if (visiblePartX == 'right') {
		      // top part of element is visible
		 		$(this).removeClass("inview");
		    } 
		    else {
		      // whole part of element is visible
		      $(this).addClass("inview");
		    }
	  } else {
	    // element has gone out of viewport
	   // $("a.scroll_to").removeClass("active")
	     $(this).removeClass("inview");
	  }
	});
	var timer;
    $(window).bind('scroll',function () {
        clearTimeout(timer);
        timer = setTimeout( refresh , 1000 );
    });
    var refresh = function () { 
        var id_element = $('div.slide_option.inview').attr('id');
		var top_arrow = $('a#scroll_link_'+id_element+'.scroll_to').attr("rev")
		if (id_element != undefined) {
			$('a.scroll_to').removeClass('active');
			$('a#scroll_link_'+id_element+'.scroll_to').addClass('active');
			if (id_element != "largeSlider"){
				$("img#arrow_active").animate({
					opacity:1.0
				})
			}else{
				$("img#arrow_active").animate({
					opacity:0,
					top:0
				})
			}
			$("img#arrow_active").animate({
				top:top_arrow
			},800);
		};
    };

})
