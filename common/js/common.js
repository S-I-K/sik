$(()=>{
    /* button effect */
    $button_effect = $('.button-effect');
    $button_effect.each(function(){
        $(this).attr('data-hover', $(this).text());
    });


    /* scroll event */
    $('.back-top-btn.scroll').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1800,)
        return false;
    });
    $('.go-to-top').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1800,)
        return false;
    });

    /* header scroll logo change event */
    $(window).scroll(()=>{
        console.log(window.scrollY);
        if(window.scrollY >= 1750 ) {
            $('header#main-header .logo-box > a > svg path').css({
                'fill' : '#2a2a2a',
            });
            $('header#main-header .menu-box > a > span').css({
                'color' : '#2a2a2a',
            });
            $('header#main-header .burger-wrap a.burger-box span').css({
                'background' : '#2a2a2a',
            });
        }else {
            $('header#main-header .logo-box > a > svg path').css({
                'fill' : '#fff',
            });
            $('header#main-header .menu-box > a > span').css({
                'color' : '#fff',
            });
            $('header#main-header .burger-wrap a.burger-box span').css({
                'background' : '#fff',
            });
        }
    })

    /* header floating event */
    $(window).scroll(function(){
        if ($(this).scrollTop() >= 850) {
            $('.floating-box').css({
                'opacity': '1',
                'pointer-events': 'unset',
            });
            $('.sns-floating-box').css({
                'opacity': '1',
                'pointer-events': 'unset',
            });
        } else {
            $('.floating-box').css({
                'opacity': '0',
                'pointer-events': 'none',
            });
            $('.sns-floating-box').css({
                'opacity': '0',
                'pointer-events': 'none',
            });
        }
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

    $nav_menu_wrap = $('nav.nav-menu-wrap');
    $hover_text = $('.hover-text');
    $hover_text.each(function(){
        $(this).attr('data-hover', $(this).text());
    });

    /* menu event */
    $menu_icon = $('.menu-box');
    $menu_icon.click(function(e){
        e.preventDefault();
        if(!$nav_menu_wrap.hasClass('open')){
            $nav_menu_wrap.addClass('open');
            // $('.logo-box > a > img').attr('src', '/theme/new_dnc/img/main/logo-white.svg');
            // $('.menu-box').addClass('nav-white');
            // $('.side-icon-box').addClass('nav-white');
            // $('.burger-box').addClass('active');
            $('.burger-box').addClass('active');
            $menu_texts = gsap.utils.toArray($hover_text);
            $menu_texts.forEach( (text, index) => {
                gsap.fromTo(text, 1, {
                    opacity: 0,
                    y: "100%",
                },{
                    opacity: 1,
                    y: "0%",
                    duration: .8,
                    delay: (index + 1) * .1,
                });
            })
        }else{
            setTimeout(()=>{
                // $('.logo-box > a > img').attr('src', logo_src);
                $nav_menu_wrap.removeClass('open');
                // $('.menu-box').removeClass('nav-white');
                // $('.side-icon-box').removeClass('nav-white');
                // $('.burger-box').removeClass('active');
                // $('.menu-box').removeClass('hide');
                $('.burger-box').removeClass('active');
            }, 2000);
            $menu_texts = gsap.utils.toArray($hover_text);
            $menu_texts.forEach( (text, index) => {
                gsap.fromTo(text, 1, {
                    opacity: 1,
                    y: "0%",
                },{
                    opacity: 0,
                    y: "-100%",
                    duration: .8,
                    delay: (index + 1) * .1,
                });
            })
        }
    });

    $hover_text.mouseenter(function(e){
        $hover_text.css({
            opacity: .4,
        });
        $(this).css({
            'transform': 'translateY(-100%)',
            'transform-origin': '0% 0%',
            'opacity': 1,
        });
    })
    .mouseleave(function(){
        $(this).css({
            'transform': 'translateY(0%)',
            'transform-origin': '0% 0%'
        });
        $hover_text.css({
            opacity: 1,
        });
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

    gsap.fromTo('.gsap-fadeup-01', {
        y: 20,
        opacity: 0,
    },{
        y: 0,
        opacity: 1,
        duration: .4,
        delay: .8,
    });

    gsap.fromTo('.gsap-fadeup-02', {
        y: 20,
        opacity: 0,
    },{
        y: 0,
        opacity: 1,
        duration: .4,
        delay: 1,
    });

    gsap.fromTo('.gsap-fadeup-03', {
        y: 20,
        opacity: 0,
    },{
        y: 0,
        opacity: 1,
        duration: .4,
        delay: 1.2,
    });

    gsap.fromTo('.gsap-opacity-01', {
        opacity: 0,
    },{
        opacity: 1,
        duration: 1,
        delay: 1.2,
    });
});
