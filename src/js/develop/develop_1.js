/* block-1 slider */

    function blockOneSlider(){

        $('.block-1-slider').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            fade: true,
            cssEase: 'linear'
        });

    }

/* /block-1-slider */


$(document).ready(function(){

    blockOneSlider();

});

$(window).load(function(){

});

$(window).resize(function(){

});