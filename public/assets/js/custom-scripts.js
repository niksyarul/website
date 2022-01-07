(function($) {
  "use strict";

    $.fn.andSelf = function() {
      return this.addBack.apply(this, arguments);
    }

    /* Loader Code Start */
       $(window).on("load", function() { 
        $(".section-loader").fadeOut("slow");

        });


    /* Loader Code End */

    /*
    |====================
    | Mobile NAv trigger
    |=====================
    */

    /*
    |=================
    | Onepage Nav
    |================
    */
        
      $('#zb-header').onePageNav({
          currentClass: 'active', 
          changeHash: false,
          scrollSpeed: 750,
          scrollThreshold: 0.5,
      });


    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".nav-scroll").addClass("nav-strict");
        } else {
            $(".nav-scroll").removeClass("nav-strict");
        }
    });

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".nav-scroll").addClass("nav-strict");
        } else {
            $(".nav-scroll").removeClass("nav-strict");
        }
    });
 

    /*
    |=============================
    | ALL OWL CAROUSEL SLIDER
    |============================
    */   
   
   $('#mh-client-review').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: false,
        autoplay: false,
        smartSpeed: 450,
        // navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        margin: 10,
        stopOnHover : true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 1,
        },
        1170: {
            items: 1,
        }
        }
    }); 

  //advice section for student

  $('#advice_section_std').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: true,
    navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
    autoplay: true,
    smartSpeed: 450,
    margin: 20,
    autoWidth: true,
    stopOnHover : true,
    autoplay: false,
    autoplayHoverPause: true,
    responsive: {
    0: {
        items: 1,
    },
    768: {
        items: 2,
    },
    1170: {
        items: 2,
    }
    }

  });  

  $(".advice_slider .owl-next").on("click", function(){
    $(".advice_slider .owl-prev").addClass("op_1");
  });    


  $('#advice_section').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: false,
    // navText: ["<i class='fa fa-long-arrow-left' ></i>", "<i class='fa fa-long-arrow-right' ></i>"],
    autoplay: true,
    smartSpeed: 2500,
    margin: 20,
    autoWidth: true,
    stopOnHover : true,
    autoplay: true,
    autoplayTimeout:100,
    stagePadding: 100,
    autoplayHoverPause: true,
    responsive: {
    0: {
        items: 1,
    },
    768: {
        items: 2,
    },
    1170: {
        items: 3,
    }
    }

  }); 
                           

 
        	/*
	* We need to turn it into a function.
	* To apply the changes both on document ready and when we resize the browser.
	*/
	
    function mediaSize() { 
        /* Set the matchMedia */
        if (window.matchMedia('(min-width: 768px)').matches) {
        /* Changes when we reach the min-width  */
          //parallax
          var image = document.getElementsByClassName('ione');
          new simpleParallax(image, {
            overflow: true,
            scale: 1.3,
            breakpoints: 420,
          });
          
          var image = document.getElementsByClassName('itwo');
          new simpleParallax(image, {
            overflow: true,
            scale: 1.2,
            orientation: 'right',
            breakpoints: 420,
          });
  
          var image = document.getElementsByClassName('ithree');
          new simpleParallax(image, {
            overflow: true,
            scale: 1.4,
            breakpoints: 420,
          });
          var image4 = document.getElementsByClassName('ifour');
          new simpleParallax(image4, {
            overflow: true,
            scale: 5.5,
            orientation: 'left',
            delay: .7,
            transition: 'cubic-bezier(0,0,0,100)',
            breakpoints: 420,
            
          });
  
        } else {
  
          var image = document.getElementsByClassName('ione');
          new simpleParallax(image, {
            overflow: true,
            scale: 1.0,
            breakpoints: 420,
          });
          
          var image = document.getElementsByClassName('itwo');
          new simpleParallax(image, {
            overflow: true,
            scale: 1.0,
            orientation: 'none',
            breakpoints: 420,
          });
  
          var image = document.getElementsByClassName('ithree');
          new simpleParallax(image, {
            overflow: true,
            scale: 1.0,
            breakpoints: 420,
          });

          var image4 = document.getElementsByClassName('ifour');
          new simpleParallax(image4, {
            overflow: true,
            scale: 1.0,
            orientation: 'left',
            // delay: .7,
            breakpoints: 420,
            // transition: 'cubic-bezier(0,0,0,100)',
            
          });
  
        }
      };
      
      /* Call the function */
      mediaSize();
      /* Attach the function to the resize event listener */
      // window.addEventListener('resize', mediaSize, false);  


}(jQuery));




