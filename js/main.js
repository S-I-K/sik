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
  function getTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const sec = String(date.getSeconds()).padStart(2, '0');
    timer.text(`${hours}:${min}:${sec}`);
  }
  getTime();
  setInterval(getTime, 1000);
});

/**************** javascript ****************/
var swiper = new Swiper("#time-weather-slider", {
    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    direction: 'vertical',
});