function block_5_sortable(){
    $( ".block-5 .sort-item,  #block-5-sortable2" ).sortable({
      connectWith:".block-5 .connectedSortable",
      revert:true,
      snap:true,
      cursor:"-webkit-grabbing",
      receive: function(event, ui) {
            var list = $(this);
            if (list.attr('id') != "block-5-sortable2") {
                if (list.children().length > 1) {
                    // move item back to main_list
                    $(ui.sender).sortable('cancel');
                }
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
