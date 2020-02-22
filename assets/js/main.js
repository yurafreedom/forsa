if(/Android/.test(navigator.appVersion)) {
	window.addEventListener("resize", function() {
		if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
			document.activeElement.scrollIntoView();
		}
	});
} 


var block = $('<div>').css({'height':'50px','width':'50px'}),
    indicator = $('<div>').css({'height':'200px'}),
    scrollbarWidth = 0;

$('body').append(block.append(indicator));
var w1 = $('div', block).innerWidth();    
block.css('overflow-y', 'scroll');
var w2 = $('div', block).innerWidth();
$(block).remove();
scrollbarWidth = (w1 - w2);


var bodyScrollOptions = {
    reserveScrollBarGap: true
};

function openModal(hrefModal) {
    
    if ($(hrefModal).length > 0){
        $(hrefModal).fadeIn(300);
    
        bodyScrollLock.clearAllBodyScrollLocks();
        bodyScrollLock.disableBodyScroll(hrefModal, bodyScrollOptions);
    }
}

function closeModals() {
	if (scrollbarWidth > 0) {
		$('.popup-block:not(:hidden)').fadeOut(200, function() {
            bodyScrollLock.clearAllBodyScrollLocks();
        });
	} else {
		$('.popup-block:not(:hidden)').fadeOut(200);
		
		bodyScrollLock.clearAllBodyScrollLocks();
	}
}


$(document.body).on('click','[data-toggle="modal"]',function(e) {
	e.preventDefault();
	
	var hrefModal = $(this).attr('data-target');
	
	openModal(hrefModal);
});

$(document.body).on('click','.popup-block__overlay',function(e) {
	var closeButton = $(this).children('[data-toggle="dismiss"]');
	
	if (e.target != this) {
//		return false;
	} else {
		closeModals();
	}
});


$(document.body).on('click','[data-toggle="dismiss"]',function(e) {
	e.preventDefault();
	
	closeModals();
});

$('input, textarea').each(function(e) {
 if ($(this).val() != '') {
  $(this).addClass('not-empty').parent().addClass('not-empty');
 } else {
  $(this).removeClass('not-empty').parent().removeClass('not-empty');
 }
});

$(document).off('change focusout keydown keypress input', 'input, textarea').on('change focusout keydown keypress input', 'input, textarea', function(e) {
 if ($(this).val() != '') {
  $(this).addClass('not-empty').parent().addClass('not-empty');
 } else {
  $(this).removeClass('not-empty').parent().removeClass('not-empty');
 }
});

$(document).off('focusin', 'input, textarea').on('focusin', 'input, textarea', function(e) {
 $(this).parent().addClass('focused');
});

$(document).off('focusout', 'input, textarea').on('focusout', 'input, textarea', function(e) {
 $(this).parent().removeClass('focused');
});


$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $(this).addClass('active');
  $("#header-menu").addClass("active");
  $(".page-header__menu-transparent").addClass("active");
});

$("#menu-toggle-active").click(function(e) {
  e.preventDefault();
  $("#header-menu").removeClass("active");
  $(".page-header__menu-transparent").removeClass("active");
});

$(".page-header__menu-transparent").on('click', function(e) {
	e.preventDefault();
	$(this).addClass('active');
	$("#header-menu").removeClass("active");
	$("#menu-toggle").removeClass("active");
	$(".page-header__menu-transparent").removeClass("active");
});


$('.page-header__scroll-up').on('click', function(e) {
  e.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 1000);
});


// $('.grammar-block__heading').click( function () {
// 	$(this).toggleClass('in').next().stop().slideToggle(200).parent().toggleClass('active');
// });


$('select').niceSelect();

$.extend($.validator.messages, {
    required: "некорректные данные",
    email: "некорректные данные",
});

$("form").each(function() {
    $(this).validate({
        errorPlacement: function(e, i) {
              e.addClass("error-message"),
              e.appendTo(i.parent("div"))
        },
        highlight: function(e) {
            $(e).addClass("has-error").parent().addClass("has-error");
        },
        unhighlight: function(e) {
            $(e).removeClass("has-error").parent().removeClass("has-error");
        },
        ignore: [],
        rules: {
            name: "required",
            tel: {
                required: !0
            },
            email: {
                required: !0,
                email: true
            }
        },
    });
});

$('[data-toggle="tab"]').click(function(e) {
 e.preventDefault();
 
 var thisTarget = $(this).attr('data-target');
 
 if ($(this).parent().is('li')) {
  $(this).parent().addClass('active').siblings().removeClass('active');
 } else {
  $(this).addClass('active').siblings().removeClass('active');
 }
 
 $(thisTarget).addClass('active').siblings().removeClass('active');
});

var randomSlideId = Math.random() * 4 | 0;

$(document).ready(function () {
 if( $(".swiper-container").length ) {
      var mainSwiper = new Swiper ('#main_slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        // autoplay: {
        //   delay: 8000,
        // },
      });
      $(window).resize(function() {
          mainSwiper.update(true),
          console.log("mainSwiper update")
      })
 }
});

$(document).ready(function () {
 if( $(".swiper-container").length ) {
      var bannerSwiper = new Swiper ('#banners_slider', {
        slidesPerView: 'auto',
        centeredSlides: true,
        initialSlide: 1,
        navigation: {
            nextEl: '.banner-button-next',
            prevEl: '.banner-button-prev',
        },
        speed: 600,
        pagination: {
            el: ".js--banner-pag",
            clickable: true,
        },
        breakpoints: {
            320: {
              initialSlide: 0,
            },
            768: {
              initialSlide: 1,
            },
        },
      });
      $(window).resize(function() {
          bannerSwiper.update(true),
          console.log("bannerSwiper update")
      })
 }
});

$(document).ready(function () {
 if( $(".swiper-container").length ) {
      var competitorSwiper = new Swiper ('#competitors_slider', {
        slidesPerView: 'auto',
        speed: 1000,
        navigation: {
            nextEl: '.competitor-button-next',
            prevEl: '.competitor-button-prev',
        },
        on: {
          slideNextTransitionStart: function () {
            $('.competitor-button-prev').addClass('active');
          },
        },
      });
      $(window).resize(function() {
          competitorSwiper.update(true),
          console.log("competitorSwiper update")
      })
 }
});

$(document).ready(function () {
 if( $(".swiper-container").length ) {
      var teamSwiper = new Swiper ('#team_slider', {
        slidesPerView: 'auto',
        speed: 1000,
        spaceBetween: 40,
        navigation: {
            nextEl: '.team-button-next',
            prevEl: '.team-button-prev',
        },
        on: {
          slideNextTransitionStart: function () {
            $('.team-button-prev').addClass('active');
          },
        },
      });
      $(window).resize(function() {
          teamSwiper.update(true),
          console.log("teamSwiper update")
      })
 }
});

$(document).ready(function () {
 if( $(".swiper-container").length ) {
      var adviserSwiper = new Swiper ('#adviser_slider', {
        slidesPerView: 'auto',
        speed: 1000,
        spaceBetween: 40,
        navigation: {
            nextEl: '.adviser-button-next',
            prevEl: '.adviser-button-prev',
        },
        on: {
          slideNextTransitionStart: function () {
            $('.adviser-button-prev').addClass('active');
          },
        },
      });
      $(window).resize(function() {
          adviserSwiper.update(true),
          console.log("adviserSwiper update")
      })
 }
});

$('.page-header__toggle-language').on('click', function() {
  $(this).toggleClass('active');
});

$('.page-header__menu-toggle-languages').on('click', function() {
  $(this).toggleClass('active');
});

$('.page-header__nav-heading').click( function () {
  $(this).toggleClass('in').next().stop().slideToggle(200).parent().toggleClass('active');
});
