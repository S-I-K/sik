console.log(' 2023.07.11 ');

/* jquery */
$(()=>{
  /* fullpage.js */
  $('#fullpage').fullpage({

    autoScrolling:true,
		scrollHorizontally: true,
    navigation: true,
    'afterLoad': function (anchorLink, index) {
			if (index == 2){
				$('header').css({
          height: '89px',
        });
        $('header > .logo-area').css({
          fontSize: '40px', 
        });
			}else{
        $('header').css({
          height: '100vh',
        });
        $('header > .logo-area').css({
          fontSize: '68px',
        });
      }
		},

	});
});

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
});