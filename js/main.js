console.log(' 2023.07.11 ');

/* jquery */
$(()=>{
    /* fullpage.js */
    $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
        navigation: true,
	});
});

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
});