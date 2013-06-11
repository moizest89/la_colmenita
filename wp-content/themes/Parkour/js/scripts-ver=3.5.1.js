jQuery(document).ready(function() {

	"use strict";
	
	resolutionLogic();
		
	jQuery(window).resize(resolutionLogic);
	
	jQuery('.vertical-scroll').jScrollPane();
				
	jQuery("body, html").bind('mousewheel', function(event, delta) {
	
			this.scrollLeft -= (delta * 80);
			
			event.preventDefault();			
			
	});
	
	if(jQuery('.blog-posts').length) {
	
		jQuery('.blog-posts .wp-post-image').each(function() {
		
			var wpH = jQuery(this).height();
			
			var wpW = jQuery(this).width();
			
			if (wpH > wpW) {
			
				jQuery(this).parent().parent().parent().removeClass('blog-posts-normal');
				
				jQuery(this).parent().parent().parent().addClass('blog-posts-wide');
				
			} 
			
		});
		
	}
	
	jQuery('.featured-post').mouseenter(function() {
	
		jQuery(this).children('.footing').animate({
		
			height: '290px'
			
		}, {duration:300});
		
	}).mouseleave(function() {
	
		jQuery(this).children('.footing').animate({
		
			height: '190px'
			
		});
		
	});		
	
	jQuery('nav ul li').mouseenter(function() {
	
		jQuery(this).children('a').addClass('black');
		
	}).mouseleave(function() {
	
		jQuery(this).children('a').removeClass('black');
		
	});

	jQuery('.mbMenuBtn').click(function() {
	
		jQuery(this).toggleClass('mobileBtnBkg');
		
		jQuery('.mobileMenu').slideToggle();
		
	});
	
	jQuery('.mbSearchBtn').click(function() {
	
		jQuery('.mobileSearch').slideToggle();
		
	});

	jQuery("div.prettyPhotoGallery a").each(function() {
	
		jQuery(this).attr("rel", "prettyPhoto[gallery1]");
		
	});
	
	jQuery("div.prettyPhotoGallery a").prettyPhoto({
		show_title: false,
		theme: "dark_square",
		social_tools: ""
	});
	
	if(jQuery('body').hasClass('page-template-tpl_portfolio_slider-php')) {
	
		jQuery('.flexslider').flexslider({
			animation: "slide"
		});
		
	}


	if(jQuery('#ptSlider').length) {
	
		if(jQuery('#ptSlider').is(":visible")) {
	
		jQuery('.flexslider').flexslider({
		
			animation: "slide"
			
		});
		
		jQuery('.vertical-scroll').jScrollPane();
		}
	}

	
	if(jQuery('.autoScroll').length) {
	
		var windowWidth = jQuery(window).width();
		
		var windowHeight = jQuery(window).height();	
	
		var totalNewWidth = windowWidth-300;
		
		if(windowWidth >= 976) {

			jQuery('.featured-post-pic').click(function() {
			
				var p = jQuery(this).parent();
				
				var position = p.position();
				
				var scrollpos = position.left-50;
				
				window.scrollTo(scrollpos,0);
				
				jQuery(this).parent().children('.postHidden').show();
				
				jQuery(this).parent().children('.postHidden').width(totalNewWidth-300);
				
				jQuery(this).children('img').css({'width' : 'auto', 'min-width' : '600px'});
				
				jQuery(this).parent().animate({'width' : totalNewWidth}, {duration: 'slow', easing: 'easeOutBack'});
				
				jQuery("body, html").unbind('mousewheel');
				
				jQuery('.featured-post-pic').not(this).each(function() {
				
					jQuery(this).animate({ opacity : .4 });
					
				});
				
				jQuery(this).parent().children('.footing').animate({
				
					height: '0px'
					
				});
				
				jQuery('.flexslider').flexslider({
				
					animation: "slide"
					
				});
				
				return false;
			});
			
			jQuery('.featured-post-close').click(function() { 
			
				var p = jQuery(this).parent().parent().parent();
				
				var position = p.position();
				
				var scrollpos = position.left-50;
				
				window.scrollTo(scrollpos,0);
			
				jQuery(this).parent().parent().parent().animate({'width' : '350px'}, {duration: 'fast', easing: 'swing'});
								
				jQuery(this).parent().parent().hide();
				
				jQuery('.featured-post-pic').each(function() {
				
					jQuery(this).animate({ opacity : 1 });
					
				});
				
				jQuery("body, html").bind('mousewheel', function(event, delta) {
				
						this.scrollLeft -= (delta * 80);
						
						event.preventDefault();			
						
				});
		
			});
		
		}

	}
	
	
	
	jQuery("#contactForm").submit(function() {
	
		var aemail = 	jQuery("#myEmail").val();
		var subj = 		jQuery("#mySubject").val();
		var name = 		jQuery("#name").val();
		var email = 	jQuery("#email").val();
		var msg = 		jQuery("#message").val();
		
		if ((email.length < 5) || (name == "")) {
		
			jQuery(".error-form").html("Please Fill Out All Information");
			
			jQuery(".error-form").slideDown("fast", function() {
			
				setTimeout(function() {
				
					jQuery(".error-form").slideUp("slow");
					
				}, 3000);
				
			});
			
		} else {
		
			jQuery.post("../wp-content/themes/Parkour/inc/ptAjax.php", { myEmail: aemail, mySubject: subj, theirName: name, theirEmail: email, theirMessage: msg } , function(data) {
			
				jQuery(".success-form").html(data);
				
				jQuery(".success-form").slideDown("fast", function() {
				
					setTimeout(function() {
					
						jQuery(".success-form").slideUp("slow");
						
					}, 3000);
					
					jQuery("input[type=text]").val("");
					
					jQuery("textarea").val("");
					
				});
				
			});
			
		}
		
		return false;
		
	});
	
});


jQuery(window).load(function() {

	"use strict";
	
	if(jQuery('#largeSlider').length) {
		
		jQuery('.flexslider').flexslider({
		
			animation: "slide"
			
		});
	
	}	

	if(jQuery('.page-template-tpl_portfolio_full-php #maximage').length) {
		jQuery('#maximage').maximage({
			cycleOptions: {
				fx: 'fade',
				speed: 1000,
				timeout: 5000,
				prev: '#arrow_left',
				next: '#arrow_right',
				pause: 1
			},
			onFirstImageLoaded: function(){
				jQuery('#cycle-loader').hide();
				jQuery('#maximage').fadeIn('fast');
			}
		});
	

		jQuery('header').mouseenter(function() {
		
			jQuery(this).animate({'left' : '0px'}, {duration:500});
			
		}).mouseleave(function() {
		
			setTimeout(function() {
			
				jQuery('header').animate({'left' : '-180px'}, {duration:500});
				
			}, 1000);
			
		});
		
		jQuery('#mobileNav').click(function() {
		
			jQuery('#mobileNav').animate({'top' : '0px'}, {duration:300});
			
			setTimeout(function() {
			
				jQuery('#mobileNav').animate({'top' : '-50px'}, {duration:300});
			
			}, 2500);
		
		});
		
		setTimeout(function() {
		
			jQuery('header').animate({'left' : '-180px'}, {duration:300});
			
			jQuery('#mobileNav').animate({'top' : '-50px'}, {duration:300});
			
		}, 3000);
	
	}	
	
	checkWrapperWidth();
	
});




function resolutionLogic() {

	"use strict";
	
	var windowWidth = jQuery(window).width();
	
	var windowHeight = jQuery(window).height();
	
	if (windowWidth <= 975) {
	
		jQuery('#wrapper').css({'height' : windowHeight - 60});	
				
	} else {
		
		jQuery('#wrapper').css({'height' : '100%'});
				
	}
		
	checkWrapperWidth();
	
	jQuery('.vertical-scroll').jScrollPane();

}


function checkWrapperWidth() {

	"use strict";

	var windowWidth = jQuery(window).width();

	var wrapWidth = 0;
	
	if(jQuery('.blog-posts').length) {	
	
		jQuery('.blog-posts').each(function() {
		
			wrapWidth += Number(jQuery(this).width());
			
		});
		
		jQuery('#wrapper').width(wrapWidth+1590);
		
	}

	if(jQuery('.featured-post').length) {
	
		jQuery('.featured-post').each(function() {
		
			wrapWidth += Number(jQuery(this).width());
			
		});
		
		jQuery('#wrapper').width(wrapWidth+1590);
		
	}

	if(jQuery('#largeSlider').length) {
	
		jQuery('#largeSlider').width(windowWidth*0.7);
	
		wrapWidth += Number(jQuery('#largeSlider').width());
		
		jQuery('#wrapper').width(wrapWidth+1591);
	
	}

	if(jQuery('.single-article').length) {
	
		if(jQuery('.singleHeader').length) {
		
			var SHWidth = jQuery('.singleHeader').find('img').width();
			
			jQuery('.singleHeader').width(SHWidth);
			
			wrapWidth += Number(jQuery('.singleHeader').width());
			
		}
		
		if(windowWidth >= 747) {
		
			if(jQuery('footer').length) {
				
				wrapWidth += Number(jQuery('footer').width());
				
			}
			
			if(jQuery('#sidebar').length) {
			
				wrapWidth += Number(jQuery('#sidebar').width());
			
			} 

			if(jQuery('.featured-pagination').length) {
			
				wrapWidth += Number(jQuery('.featured-pagination').width()+1);
			
			} 
			
			wrapWidth += Number(jQuery('.single-article').width());
					
		} else {
			
			jQuery('.single-article').width(windowWidth);
						
			wrapWidth += Number(jQuery('.single-article').width());
			
		}
		
		if(jQuery('body').hasClass('error404')) {
			
			wrapWidth += Number(2);
			
		}
		
		jQuery('#wrapper').width(wrapWidth);
			
					
	}
	
	if(jQuery('.portfolio-images').length) {
	
		var portfolioWidth = jQuery(window).width() -200;
		
		jQuery('.portfolio-images').width(portfolioWidth);
		
		jQuery('#wrapper').width(portfolioWidth+1590);
		
	}
			
}