$(()=>{
    console.log($);
    console.log('https://www.hewasborn.com/');

    /***********************
     * GSAP *
    ***********************/
    $screen = $('.screen-box');
    gsap.to($screen, {
        'opacity': 0.7,

        scrollTrigger: {
            trigger: $('#wrap'),
            // markers: true,
            start: '960px 100%',
            end: '1920px 100%',
            scrub: 2,
        }
    });

    gsap.to($('.video-box'), {
        duration: 2,
        y: '0',

        scrollTrigger: {
            trigger: $('.video-wrap'),
            start: '0 0',
            end: '100% 100%',
            scrub: 2,
            pin: true,
        }
    });

    /***********************
     * SWIPER *
    ***********************/
    var swiper = new Swiper("#recent-swiper", {
        slidesPerView: 'auto',
        spaceBetween: 24,
        centeredSlides: true,
        loop: true,
        speed: 1200,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        }
    });
});

const lenis = new Lenis();
lenis.on('scroll', (e) => {
    // console.log(e);
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);