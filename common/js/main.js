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

    /* gsap effect */
    gsap.registerPlugin(ScrollTrigger);
    $fade_up = gsap.utils.toArray('.gsap-fade-up');
    $fade_up.forEach(el => {
        gsap.to(el, {
            'transform': 'translateY(0px)',
            'opacity': 1,
            'duration': 2,
            'ease': 'ease',
            scrollTrigger: {
                markers: false,
                trigger: el,
                start: '-20% 100%',
                end: 'top 70%',
                scrub: 2,
                // toggleClass: 'active',
            }
        })
    });
});
