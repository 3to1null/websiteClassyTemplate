$('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $('ul.smallNav').toggleClass('hidden');
    $('div.cover').toggleClass('hidden');
});
$('div.cover').click(function(){
    var hidden = $(this).hasClass('hidden')
    if(hidden == false){
        $('#nav-icon').toggleClass('open');
        $('ul.smallNav').toggleClass('hidden');
        $('div.cover').toggleClass('hidden');              
    }
});