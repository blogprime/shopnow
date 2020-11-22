$(document).ready(function(){
	$('.bxslider').bxSlider({
	  controls: true,
	  adaptiveHeight: true
	 });

	 $('.pre_toform').click(function() {
          $("html, body").animate({
              scrollTop: $("form").offset().top - 300
          }, 2000);
          return false;
        });
});