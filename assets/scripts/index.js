new WOW().init();
$(document).ready(function(){
    $('.sliderss').slick({
        nextArrow: '.arrow_right',
        prevArrow: '.arrow_left', 
        autoplay: true
    });

    $('.playViddeo').click(function(){
        $('.showVideo').show()
    })
    $('.closeVideo').click(function(){
        $('.showVideo').hide()
    })

    
    $('.section4_sliderss').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '.sec4_left',
        nextArrow: '.sec4_right',
    });

    $('.main_review').slick({
        autoplay: true,
        prevArrow: '.review_left',
        nextArrow: '.review_right',
    });
  });

