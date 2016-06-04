function block_5_sortable(){
    $( "#block-5-sortable1,  #block-5-sortable2" ).sortable({
      connectWith:".block-5 .connectedSortable",
      revert:true,
      snap:true,
      cursor:"-webkit-grabbing"
    }).disableSelection();
}


$(document).ready(function(){
    block_5_sortable();
});

$(window).load(function(){

});

$(window).resize(function(){

});
