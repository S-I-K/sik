$(()=>{
    console.log($);
    console.log('https://www.hewasborn.com/');

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

const lenis = new Lenis();
lenis.on('scroll', (e) => {
    // console.log(e);
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);