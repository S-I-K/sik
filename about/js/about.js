$(()=>{
    console.log($);
    // console.log('https://www.hewasborn.com/');

    /* 소개 페이지 딤드 */
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