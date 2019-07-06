// JavaScript Document
/*-------------Scrolltop--*/
$(window).scroll(function() {
    if ($(this).scrollTop() > 500 ) {
        $('.scrolltop').fadeIn();
    } else {
        $('.scrolltop').fadeOut();
    }
});

		
$(function(){$('.scrolltop').click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"3000");return false})})


/*------1. Custom selector------*/
var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("my-custom-select");
for (i = 0; i < x.length; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < selElmnt.length; j++) {
		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function(e) {
			var y, i, k, s, h;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			h = this.parentNode.previousSibling;
			for (i = 0; i < s.length; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					for (k = 0; k < y.length; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function(e) {
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}

function closeAllSelect(elmnt) {
	var x, y, i, arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	for (i = 0; i < y.length; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i)
		} else {
			y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < x.length; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}

document.addEventListener("click", closeAllSelect);

/*4. Slider*/

setTimeout(function() {
	$("#loader-warp").fadeOut();
}, 2900);

setTimeout(function() {
	$("main").removeAttr("class");
	$("body").removeAttr("class");
}, 2900);

function changeBG() {
	if ($("#slider-active").hasClass("a1")) {
		$("#slider-active").removeClass("a1").addClass("a3");
		$("#slider-in").removeClass("b1").addClass("b3");
		$("#slider-out").removeClass("b2").addClass("b1");
		$("#d-title").text("dễ hiểu");
	} else if ($("#slider-active").hasClass("a2")) {
		$("#slider-active").removeClass("a2").addClass("a1");
		$("#slider-in").removeClass("b2").addClass("b1");
		$("#slider-out").removeClass("b3").addClass("b2");
		$("#d-title").text("dễ học");
	} else {
		$("#slider-active").removeClass("a3").addClass("a2");
		$("#slider-in").removeClass("b3").addClass("b2");
		$("#slider-out").removeClass("b1").addClass("b3");
		$("#d-title").text("dễ nhớ");
	}
}

function slide() {
	$("#slider-in, #slider-out").removeClass("animated fadeInLeft2");
	$("#slider-active").removeClass("animated fadeInLeft");
	$("#d-title").removeClass("animated bounceInDown");

	setTimeout(function() {
		$("#slider-in, #slider-out").addClass("animated fadeOutRight2");
		$("#slider-active").addClass("animated fadeOutRight");
		$("#d-title").addClass("animated bounceOutDown");
	}, 10)

	setTimeout(function() {
		$("#slider-in, #slider-out, #slider-active, #d-title").addClass("hide").removeClass("animated fadeOutRight2 fadeOutRight bounceOutDown");
	}, 990)

	setTimeout(changeBG, 1000);

	setTimeout(function() {
		$("#slider-in, #slider-out").removeClass("hide").addClass("animated fadeInLeft2");
		$("#slider-active").removeClass("hide").addClass("animated fadeInLeft");
		$("#d-title").removeClass("hide").addClass("animated bounceInDown");
	}, 1010)
};

function slideLoop() {
	setInterval(slide, 4000);
};

setTimeout(function() {
	$(".animated").removeClass("fadeInUp delay-3s");
}, 3900);

setTimeout(slideLoop, 4000);


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

/*6. Loader control*/
setTimeout(function() {
	$("#loader-warp").fadeOut();
}, 2900);

setTimeout(function() {
	$("main").removeAttr("class");
	$("body").removeAttr("class");
}, 2900);

/*8. Scroll to Top*/

/*7. Grid Init*/
$(function() {
	Grid.init();
});


/*2. Wow active*/

/*3. Owl control*/
$('#owl-one').owlCarousel({
	loop: true,
	margin: 10,
	autoplay: true,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	dots: false,
	navText: [
		'<i class="fa fa-angle-left" aria-hidden="true"></i>',
		'<i class="fa fa-angle-right" aria-hidden="true"></i>'
	],
	navContainer: '.slide-content .custom-nav',
	responsive: {
		0: {
			items: 1,
			nav: false,
		},
		600: {
			items: 2,
			nav: false,
		},
		1000: {
			items: 3,
			nav: true,
		}
	}
})

$('#owl-two').owlCarousel({
	loop: true,
	margin: 30,
	autoplay: true,
	stagePadding: 30,
	autoplayTimeout: 4000,
	autoplayHoverPause: true,
	nav: false,
	dots: false,
	items: 1,
	animateOut: 'fadeOutDown',
    animateIn: 'flipInX',
	smartSpeed: 450,
});


/*3. Zoom gallery*/
$(document).ready(function() {
	$('.gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: true,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			easing: 'ease-in-out',
			opener: function(element) {
				return element.find('img');
			}
		}

	});
});

/* Image thumb*/
var list = document.getElementsByClassName('thumb');

for (var i = 0; i < list.length; i++) {
  var src = list[i].getAttribute('data-image-src');
  list[i].style.backgroundImage="url('" + src + "')";
}

/*Modal*/
// hasClass
function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

// toggleClass
function toggleClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  } else {
    elem.className += ' ' + className;
  }
}

// select
function select(selector) {
  var elements = document.querySelectorAll(selector);

  if (elements.length > 1) {
    return elements;
  } else {
    return elements.item(0);
  }
}
	
	

var btnOpen = select('.js-open');
var btnClose = select('.js-close');
var modal = select('.js-modal');
var modalChildren = modal.children;

function hideModal() {
  dynamics.animate(modal, {
    opacity: 0,
    translateY: 100
  }, {
    type: dynamics.spring,
    frequency: 50,
    friction: 600,
    duration: 1500
  });
}

function showModal() {
  // Define initial properties
  dynamics.css(modal, {
    opacity: 0,
    scale: .5
  });
  
  // Animate to final properties
  dynamics.animate(modal, {
    opacity: 1,
    scale: 1
  }, {
    type: dynamics.spring,
    frequency: 300,
    friction: 400,
    duration: 1000
  });
}

function showBtn() {
  dynamics.css(btnOpen, {
    opacity: 0
  });
  
  dynamics.animate(btnOpen, {
    opacity: 1
  }, {
    type: dynamics.spring,
    frequency: 300,
    friction: 400,
    duration: 800
  });
}

function showModalChildren() {
  // Animate each child individually
  for(var i=0; i<modalChildren.length; i++) {
    var item = modalChildren[i];
    
    // Define initial properties
    dynamics.css(item, {
      opacity: 0,
      translateY: 30
    });

    // Animate to final properties
    dynamics.animate(item, {
      opacity: 1,
      translateY: 0
    }, {
      type: dynamics.spring,
      frequency: 300,
      friction: 400,
      duration: 1000,
      delay: 100 + i * 40
    });
  } 
}

function toggleClasses() {
  toggleClass(btnOpen, 'is-active');
  toggleClass(modal, 'is-active');
}

// Open nav when clicking sandwich button
btnOpen.addEventListener('click', function(e) {
  toggleClasses();
  showModal();
  showModalChildren();
});

// Open nav when clicking sandwich button
btnClose.addEventListener('click', function(e) {
  hideModal();
  dynamics.setTimeout(toggleClasses, 500);
  dynamics.setTimeout(showBtn, 500);
});
