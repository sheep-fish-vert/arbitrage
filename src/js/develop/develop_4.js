
function block_5_sortable(){
    var ul;
    $( ".block-5 .sort-item,  #block-5-sortable2" ).sortable({
        connectWith:".block-5 .connectedSortable",
        revert:true,
        snap:true,
        cursor:"-webkit-grabbing",
        receive: function(event, ui) {
            var list = $(this);
            if (list.attr('id') != "block-5-sortable2") {
                // if (list.children().length > 1) {
                //     // move item back to main_list
                //     $(ui.sender).sortable('cancel');
                // }

                console.info('beforeStop');
                ul = $(ui.sender);
                console.log(ul);
            }
        },
        start:function(event, ui){
            if ( $(this).attr('id') != 'block-5-sortable2' ){
                var start_pos = ui.item.parent().index();
                ui.item.parent().attr('data_start_pos', start_pos);
            }
        },
        change: function(event, ui) {
        },
        update: function(event, ui) {

        },
        beforeStop: function(event, ui) {
            if ($(this).attr('id') != "block-5-sortable2") {
                console.info('beforeStop');
                ul = ui.sender;
                console.log(ul);

            }
        }


    }).disableSelection();
}


$(document).ready(function(){
    block_5_sortable();
});

$(window).load(function(){

});

$(window).resize(function(){

});

