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

/* block-6 scripts */

    function blockSixthTriangle(){

        function triangleSize(){

            var windowWidth = $(window).width();
            console.log(windowWidth);
            $('.block-6-triangle').css({'border-width': '30px '+windowWidth+'px 0 0'});

        }

        triangleSize();

        $(window).resize(function(){
            triangleSize();
        });

    }

/* /block-6 scripts */


$(document).ready(function(){

    blockOneSlider();

    scrollUp('.scroll-bottom-button', '.block-2');

    blockSixthTriangle();

});

$(window).load(function(){

});

$(window).resize(function(){

});