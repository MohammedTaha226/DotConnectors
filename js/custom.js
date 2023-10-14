$(function(){

	new WOW().init();

	$(window).scroll(function () {
		
		if($(this).scrollTop() > 100) {
			
			
			$(".header").addClass("headerFixed");
			
			
		} else {
			
			$(".header").removeClass("headerFixed");
		}
		
	});
	
	$('#bx-home').bxSlider({
		useCSS: false,
		auto: true,
		controls: true,
		pager: true,
		autoHover: true,
		responsive: true,
		nextSelector: '#slider-next',
		prevSelector: '#slider-prev',
		nextText: '<i class="fa fa-angle-right"></i>',
		prevText: '<i class="fa fa-angle-left"></i>',
		
	});
	
	
	

	$(".openMenu").click(function () {
		
		$("body").addClass("overflowH");
		$(".menuMobile").fadeIn();
		$(".transformPage,.menuMobile .menuContent").addClass("active");
		
	});
	

	$(".closeX,.BgClose").click(function () {
		
		$("body").removeClass("overflowH");
		$(".menuMobile").fadeOut();
		$(".transformPage,.menuMobile .menuContent").removeClass("active");
		
	});
	
	$(".menuMobile .menuContent .menuRes li a,.menuMobile .menuContent .menuRes li .subMenu .subSubMenu ").click(function (){
		
		
		$(this).siblings().slideToggle();
		
	});
	
	
	  var owlWorks = $('#owlWorks');
	 
	  owlWorks.owlCarousel({
	      
	      items : 4, //10 items above 1000px browser width
	      itemsDesktop : [1200,4], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,3], // betweem 900px and 601px
	      itemsTablet: [768,2], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:false,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	  });
	
	  var owlPartners = $('#owlPartners');
	 
	  owlPartners.owlCarousel({
	      
	      items : 1, //10 items above 1000px browser width
	      itemsDesktop : [1200,1], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,1], // betweem 900px and 601px
	      itemsTablet: [768,1], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	  });
	  
	  var owlPartnersMobile = $('#owlPartnersMobile');
	 
	  owlPartnersMobile.owlCarousel({
	      
	      items : 1, //10 items above 1000px browser width
	      itemsDesktop : [1200,3], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,2], // betweem 900px and 601px
	      itemsTablet: [768,1], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	  });
	
	$(".footer .inputStyle input,.footer .inputStyle textarea").keyup(function() {
	    if($(this).val().length > 0) {
	         $(this).parent().addClass("active");
	    } else {
	        $(this).parent().removeClass("active");
	    }
	});


	/****** Start accordion ******/
	
	$(".accordion.active .accordion-content").css("display","block");
	
	$(".accordion .accordion-title").click(function () {
		
		var accordId = $(this).parent().parent().attr("id");
				
		$(this).next().slideToggle(500);
		
		$("#"+accordId + " .accordion .accordion-content").not($(this).next()).slideUp(500);
		
		$(this).parent().toggleClass("active").siblings().removeClass("active");
				
	});
	
	/****** End accordion ******/
	
	
	$(".accordion1 .accordion .accordion-content .listAcc li").click(function() {
		
		$(this).addClass("active");
		
	});
	
	$(".jobs .formDetails .selectStyle .titleSelect").click(function () {
		$(this).siblings().slideToggle();
	});
	
	$(".jobs .formDetails .selectStyle .subLinks li").click(function() {
		var val = $(this).attr("val");
		$(this).addClass("active").siblings().removeClass("active");
		
		$(".jobs .formDetails .selectStyle .titleSelect span").text(val);
		$(".jobs .formDetails .selectStyle .titleSelect input").attr("val",val);
	});
	
        
	$('body,html').on('click', function(e) {
		var container = $(".jobs .formDetails .selectStyle .subLinks, .jobs .formDetails .selectStyle .titleSelect, .jobs .formDetails .selectStyle .titleSelect *"),
		Sub = $(".jobs .formDetails .selectStyle .subLinks");
		

	    if( !$(e.target).is(container) ){
	        Sub.slideUp();
	    }
	
	});
	
		$(".niceScroll").niceScroll({
		    cursorborderradius: 0,
			scrollspeed: 60,
			mousescrollstep: 38,
			cursorwidth: 5,
			cursorborder: 0,
			cursorcolor: '#000000',
			zindex: 1500
			
	    });
	
	
	
	
	
	
	
	
	
});
