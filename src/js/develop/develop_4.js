
function block_5_sortable(){
    var ul;
    var oldElem;
    var sender;
    $( ".block-5 .sort-item,  #block-5-sortable2" ).sortable({
        connectWith:".block-5 .connectedSortable",
        revert:true,
        snap:true,
        cursor:"-webkit-grabbing",
        receive: function(event, ui) {
            var list = $(this);
            //console.log(list);


            sender = $(ui.sender);
            //console.log(sender.attr('id'));
            if ( sender.attr('id') == 'block-5-sortable2') {
                console.log('sender 222222');
                if( $(ui.item).siblings('li').length > 0 ){
                    sender.sortable('cancel');
                }
            }
            if (list.attr('id') != "block-5-sortable2") {
                ul = $(ui.sender);
                if( ul.is('.sort-item')){
                    var child = ul.find('li');
                    oldElem = $(ui.item).siblings('li');
                    elem = $(ui.item);
                    elem.siblings('li').remove();
                    ul.append(oldElem);
                }

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

