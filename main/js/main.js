$(()=>{
    // console.log('https://www.hewasborn.com/');



    /* =======================
        GSAP
    ======================= */
    /* 메인페이지 영상 패럴럭스 */
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




    /* =======================
        SWIPER
    ======================= */
    /* 블로그 포스팅 스와이퍼 */
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


    /* 블로그 포스팅 수정 될 때까지만 잠시 링크 기능 막아둠. */
    /* $('#recent-swiper .swiper-slide > a').click(function(e) {
        e.preventDefault();
    }); */
});



/* 스크롤 부드럽게 */
const lenis = new Lenis();
lenis.on('scroll', (e) => {
    // console.log(e);
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);