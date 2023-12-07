/**** jquery ****/
$(()=>{

  /* wrap swiper */
  var swiper = new Swiper("#wrap-slide", {
    direction: "vertical",
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    on: {
      transitionEnd: ()=>{
        if(swiper.realIndex != 0){
          $('header').css({
            top: '0%',
            transform: 'translateY(0%)',
          });
          $('header .logo').css({
            height: '60px',
          });
        }else{
          $('header').css({
            top: '50%',
            transform: 'translateY(-50%)',
          });
          $('header .logo').css({
            height: '260px',
          });
        }
      },
    },
  });


  /* real timer */
  let timer = $('#timer');
  let year_txt = $('#year-txt');
  let day_txt = $('#day-txt');
  let month_txt = $('#month-txt');
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  function getTime() {
    const date = new Date();
    const year = String(date.getFullYear()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const sec = String(date.getSeconds()).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.getMonth();

    timer.text(`${hours}:${min}:${sec}`);
    year_txt.text(`${year}`);
    day_txt.text(`${day}`);
    month_txt.text(`${months[month]}`);
  }
  getTime();
  setInterval(getTime, 1000);


  /* start slide index */
  // swiper.slideTo(1)

});



/* swiper */
var time_weather_swiper = new Swiper("#time-weather-slider", {
  direction: 'vertical',
  autoplay: {
    delay: 6000,
  },
  pagination: {
    el: ".swiper-pagination.time-weather-pagination",
  },
});

/* info swiper */
var info_swiper = new Swiper("#info-slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next.info-pagination",
    prevEl: ".swiper-button-prev.info-pagination",
  },
});

/* hobby swiper */
var hobby_swiper = new Swiper("#hobby-slider", {
  loop: true,
  autoplay: {
    delay: 6000,
  },
  pagination: {
    el: ".swiper-pagination.hobby-pagination",
    dynamicBullets: true,
  },
});

/* work swiper */
var work_swiper = new Swiper("#work-slider", {
  
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,

  pagination: {
    el: ".swiper-pagination.work-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});