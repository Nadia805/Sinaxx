$(function () {
    // $().();


    // sticky menu 
    $(window).scroll(function () {
        var scrollAmount = $(window).scrollTop();
        if (scrollAmount > 400) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });




    // btn click 

    $('.nav_button').click(function () {
        $('.navbar-nav').toggle();
    });


    // banner area 
    $('.banner_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '.rigt_btn',
        prevArrow: '.left_btn',
    });


    // mix_it_up amazing work part
    var mixer = mixitup('.all_mix_images');




    // counter js part 
    $('.counter_num').counterUp({
        delay: 10,
        time: 5000
    });



    // brand slick slide active 

    $('.slick_banner').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 577,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
    },
            {
                breakpoint: 321,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
    }
  ]
    });





    // veno box 
    $(document).ready(function () {
        $('.venobox').venobox();
    });


});
