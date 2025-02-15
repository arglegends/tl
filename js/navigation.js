$(document).ready(function(){
	
	$('.nav__open-links').click(function(event){
		if($('.nav__links').is(':hidden')){
			$('.nav__links').slideDown(300, function() { 
				$(this).css('display', 'block');
			});
			$(this).addClass('active');
		}
		else{
			$('.nav__links').slideUp(300, function() { 
				$(this).css('display', 'none');
			});
			$(this).removeClass('active');
		}
	});
	
	$(document).mouseup(function (e){
		if (!$('.nav__open-links').is(e.target) && !$('.nav__links').is(e.target) && $('.nav__links').has(e.target).length === 0 && $(".nav__open-links").is(":visible")) {
			$(".nav__open-links").removeClass('active');
			$('.nav__links' + ':visible').slideUp(300, function() { 
				$(this).css('display', 'none');
			});
		}
	});
	
	$(window).resize(function(){
		if(!$(".nav__open-links").is(":visible")){
			$(".nav__links").removeAttr("style");
			$(".nav__open-links").removeClass('active');
		}
	});
	
});

$(document).ready(function(){ irArriba(); }); //Hacia arriba

function irArriba(){
  $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
  });
  $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
}

