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

            $('.block-6-triangle').css({'border-width': '30px '+windowWidth+'px 0 0'});

        }

        triangleSize();

        $(window).resize(function(){
            triangleSize();
        });

    }

    function blockSixthSortable(){

        $('.block-6-drag-wrap').each(function(index){

            var connectClass = '.sortable-tuzer-'+(index+1);

            $(this).find('.sort-to-'+(index+1)+', .sort-from-'+(index+1)).sortable({
                connectWith:connectClass,
                snap:true,
                revert:true,
                stop:function(event, ui){
                    if($('.sort-to-'+(index+1)+' li').length){
                        $('.sort-to-'+(index+1)).parents('.drag-field').addClass('not-empty');
                    }else{
                        $('.sort-to-'+(index+1)).parents('.drag-field').removeClass('not-empty');
                    }

                    if($('.sort-from-'+(index+1)+' li').length == 0){
                        $('.sort-from-'+(index+1)).parents('.drag-field-items').addClass('empty');
                    }else{
                        $('.sort-from-'+(index+1)).parents('.drag-field-items').removeClass('empty');
                    }

                }
            }).disableSelection();

        });

    }

/* /block-6 scripts */

/* scroll reveal */

    function scrollRevealInit(){

        window.sr = ScrollReveal().reveal('.animate');

    }

/* /scroll reveal */


$(document).ready(function(){

    blockOneSlider();

    scrollUp('.scroll-bottom-button', '.block-2');

    blockSixthTriangle();
    blockSixthSortable();

    //scrollRevealInit();

});

$(window).load(function(){

});

$(window).resize(function(){

});