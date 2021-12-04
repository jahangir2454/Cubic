$(function(){

  $("#search-icon").click(function() {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
  });
  
  $('.menu-toggle').click(function(){
     $(".nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
  });
  
  // =================================================
  window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })
  $('.menu-bar').click(function(){
    $('.menu-bar').toggleClass('activ')
    $('nav').toggleClass('activ')
  });
  // =================================================
// banner
// $('.banner-slider').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 10000,
//   fade: true,
//   cssEase: 'linear',
//   prevArrow:'<a href="#" class=" arow"><p><i class="fas fa-chevron-left aft"></i></p></a> ',
//   nextArrow:'<a href="#" class="arowr"><p><i class="fas fa-chevron-right art"></i></p></a> ', 
// });

$('.counteer').counterUp({
  delay: 4,
  time: 1000
});


$('.multiple-items').slick({
infinite: true,
slidesToShow: 3,
slidesToScroll: 1,
arrows:false,
centerPadding: '0px',
// autoplay: true,
autoplaySpeed: 2000,

responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 320,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },

]


});


$('.autoplay').slick({
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 2000,
prevArrow:'<a href="#" class=" arow aroes"><p><i class="fas fa-arrow-left"></i></p></a> ',
nextArrow:'<a href="#" class="arowr"><p><i class="fas fa-arrow-right"></i></p></a> ',
});

$('.autop').slick({
slidesToShow: 6,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 2000,
arrows:false,


responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  },

]



});



// venobox

$('.venobox').venobox({
share: ['facebook', 'twitter', 'linkedin', 'pinterest', 'download'],
spinner:'wave',
spinColor:'#fec600',
border:'10px',
arrowsColor:'#fec600',
bgcolor:'#fec600',
closeColor:'#fec600',
});


// init Isotope
var $grid = $('.grid').isotope({
// options
});
// filter items on button click
$('.works-item').on( 'click', 'li', function() {
var filterValue = $(this).attr('data-filter');
$grid.isotope({ filter: filterValue });
})

$('.list').click(function(){
$(this).addClass('active').siblings().removeClass('active')
});


$(window).on('scroll',function(){
var scroll = $(window).scrollTop();
if(scroll < 10){
$('#sticky-header').removeClass("sticky");
}else{
$('#sticky-header').addClass('sticky')
}
});


$(window).load(function() {
//$("#loading").delay(2000).fadeOut(500);
// $("#loading-center").click(function() {
$("#loading").fadeOut(5000);

})


// scrollup
$.scrollUp({
scrollName: 'scrollUp', // Element ID
topDistance: '300', // Distance from top before showing element (px)
topSpeed: 300, // Speed back to top (ms)
animation: 'fade', // Fade, slide, none
animationInSpeed: 200, // Animation in speed (ms)
animationOutSpeed: 200, // Animation out speed (ms)
scrollText: '<i class="fas fa-angle-double-up"></i>', // Text for element
activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

new WOW().init();




















});












