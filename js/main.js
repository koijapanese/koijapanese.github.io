$(function(){
	$("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 500,
        onStepChanging: function (event, currentIndex, newIndex) { 
            if ( newIndex === 1 ) {
                $('.steps ul').addClass('step-2');
            } else {
                $('.steps ul').removeClass('step-2');
            }
            if ( newIndex === 2 ) {
                $('.steps ul').addClass('step-3');
            } else {
                $('.steps ul').removeClass('step-3');
            }

            if ( newIndex === 3 ) {
                $('.steps ul').addClass('step-4');
                $('.actions ul').addClass('step-last');
            } else {
                $('.steps ul').removeClass('step-4');
                $('.actions ul').removeClass('step-last');
            }
            return true; 
        },
        labels: {
            finish: "Về trang chủ",
            next: "Tiếp",
            previous: "Trở lại",
        },
    	onFinished: function (event, currentIndex)	{
        	window.open("index.html", "_top");
    	}
    });
    // Custom Steps Jquery Steps
    $('.wizard > .steps li a').click(function(){
    	$(this).parent().addClass('checked');
		$(this).parent().prevAll().addClass('checked');
		$(this).parent().nextAll().removeClass('checked');
    });
    // Custom Button Jquery Steps
    $('.forward').click(function(){
    	$("#wizard").steps('next');
    })
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    })
    // Checkbox
    $('.checkbox-circle label').click(function(){
        $('.checkbox-circle label').removeClass('active');
        $(this).addClass('active');
    })
})


/*5. Sroll menu*/
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 56;
var sliderHeight = $(".counselling").scrollTop();

$(window).scroll(function(event) {
	didScroll = true;
});

setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled() {
	var st = $(window).scrollTop();

	if (Math.abs(lastScrollTop - st) <= delta)
		return;
	
	if (st > lastScrollTop) {
		// Scroll Down
		$('#menuToggle').removeClass('nav-in').addClass('nav-out');
	} else {
		// Scroll Up
		if (st + $(window).height() < $(document).height()) {
			$('#menuToggle').removeClass('nav-out').addClass('nav-in');		}
	}

	if (st > lastScrollTop && st > navbarHeight || st < 300) {
		// Scroll Down
		$('#fixed-menu').removeClass('nav-down').addClass('nav-up');
	} else {
		// Scroll Up
		if (st + $(window).height() < $(document).height()) {
			$('#fixed-menu').removeClass('nav-up').addClass('nav-down');}
	}

	
	lastScrollTop = st;
}

