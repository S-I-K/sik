/* button effect */
$button_effect = $('.button-effect');
$button_effect.each(function(){
    $(this).attr('data-hover', $(this).text());
});
