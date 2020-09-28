// Navbar
$(document).ready(() => {
    let $hamburger = $(".hamburger");
    let $navbar = $(".nav-mobile");
    let $closeButton = $(".fa-times");
    $hamburger.on('click', () => {
        $navbar.addClass("nav-mobile-active");
        $navbar.addClass("nav-mobile-transition")
    });

    $closeButton.on('click', () => {
        $navbar.removeClass("nav-mobile-active");
    });

    $(".link").on('click', () => {
        $navbar.removeClass("nav-mobile-active");
    });

    $(window).resize(() => {
        if (window.innerWidth >= 991 || document.body.clientWidth >= 991) {
            $navbar.removeClass("nav-mobile-transition")
            $navbar.removeClass("nav-mobile-active");
        }
    });

    window.setTimeout(() => {
        $(".header-text").css({
            opacity: "1"
        });
    }, 1900)
});


// Carousel

$(".carousel").carousel({
    interval: 5000,
    pause: "null"
});


// Header fading
$(".header-title").hide();
$(".header-title").slideDown(1000);


// Ekko Lightbox
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});


// Opinions && About fading && Video Autoplay
$("#opinions .card").css({maxWidth: '300px'});
function scrollFunction() {
    
    // Opinions
    let opinionTransition = document.querySelector("#opinions-trans");
    let opinionTransitionBounding = opinionTransition.getBoundingClientRect();
    if (opinionTransitionBounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        opinionTransition.classList.remove("opinion-transition");
    }
    else {
        opinionTransition.classList.add("opinion-transition");
    }

    // About
    let aboutText = document.querySelector("#about-text");
    let aboutTextBounding = aboutText.getBoundingClientRect();
    if (aboutTextBounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        aboutText.classList.remove("about-text");
    } else {
        aboutText.classList.add("about-text");
    }

    // Questions
    let questionsBox = document.querySelector("#questionsBox");
    let questionsBoxBounding = questionsBox.getBoundingClientRect();
    if (questionsBoxBounding.bottom - 400 <= (window.innerHeight || document.documentElement.clientHeight)) {
        questionsBox.classList.remove("questionBoxTrans");
    } else {
        questionsBox.classList.add("questionBoxTrans");
    };
    if (window.innerWidth < 768 || document.documentElement.clientWidth < 768) {
        questionsBox.classList.remove("questionBoxTrans");
    }
}

window.onscroll = function() {scrollFunction()};

$(document).mouseup((e) => {
    const menu = $(".nav-mobile");
    if (!menu.is(e.target) && menu.has(e.target).length === 0) {
        menu.removeClass("nav-mobile-active")
    }
})

// Smooth Scrolling

$(document).ready(function(){
    $("nav a, .nav-mobile a").on('click', function(event) {
        console.log(this.hash);
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html').animate({
          scrollTop: $(hash).offset().top
        }, 800);
      }
    });
  });


// Google Maps
mapboxgl.accessToken = 'pk.eyJ1IjoiZmlyZWVhZ2xlODI5IiwiYSI6ImNrZm4zOHhueDJpcXUycW8zcmlybm04enEifQ.1PLluIi5567E7d96EYa_aA';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 15,
center: [30.950131382525456, 29.958230261671957]
});

var marker = new mapboxgl.Marker()
.setLngLat([30.950131382525456, 29.958230261671957])
.addTo(map);
