$(()=>{
    /* button effect */
    $button_effect = $('.button-effect');
    $button_effect.each(function(){
        $(this).attr('data-hover', $(this).text());
    });



    /* header commons */
    $('.burger-wrap').mouseenter(()=>{
        $('.burger-box span').css({
            'top': '10px',
        });
    })
    .mouseleave(()=>{
        $('.burger-box span:nth-child(1)').css({
            'top': '6px',
        });
        $('.burger-box span:nth-child(2)').css({
            'top': '14px',
        });
    });

    $('.burger-wrap').click(function(e){
        e.preventDefault();

        if(!$('.burger-box').hasClass('active')){
            $('.burger-box').addClass('active');
        }else{
            $('.burger-box').removeClass('active');
        }
    });
});
