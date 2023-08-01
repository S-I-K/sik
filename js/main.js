console.log(' 2023.07.11 ');

/**************** jquery ****************/
$(()=>{
  /* fullpage.js */
  $('#fullpage').fullpage({
    autoScrolling:true,
		scrollHorizontally: true,
    navigation: true,
    'afterLoad': function (anchorLink, index) {
			if (index !== 1){
				$('header').css({
          top: '0px',
          transform: 'translateY(0%)',
        });
        $('header > .logo-area').css({
          fontSize: '40px',
        });
			}else{
        $('header').css({
          top: '50%',
          transform: 'translateY(-50%)',
        });
        $('header > .logo-area').css({
          fontSize: '68px',
        });
      }
		},
	});

  /* real timer */
  let timer = $('#timer');
  let day_txt = $('#day-txt');
  let month_txt = $('#month-txt');
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  function getTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const sec = String(date.getSeconds()).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.getMonth();

    timer.text(`${hours}:${min}:${sec}`);
    day_txt.text(`${day}`);
    month_txt.text(`${months[month]}`);
  }
  getTime();
  setInterval(getTime, 1000);
});

/**************** javascript ****************/
var time_weather_swiper = new Swiper("#time-weather-slider", {
  direction: 'vertical',
  autoplay: {
    delay: 6000,
  },
  pagination: {
    el: ".swiper-pagination.time-weather-pagination",
  },
});

var info_swiper = new Swiper("#info-slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next.info-pagination",
    prevEl: ".swiper-button-prev.info-pagination",
  },
});

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

var swiper = new Swiper("#web-slider", {
    slidesPerView: 'auto',
    spaceBetween: 40,
});