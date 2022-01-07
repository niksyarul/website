(function($) {
  "use strict";

    $.fn.andSelf = function() {
      return this.addBack.apply(this, arguments);
    }




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

                           

  var $jscomp = $jscomp || {};
  $jscomp.scope = {};
  $jscomp.createTemplateTagFirstArg = function(a) {
      return a.raw = a
  };
  $jscomp.createTemplateTagFirstArgWithRaw = function(a, b) {
      a.raw = b;
      return a
  };
  var handleMousePos = function(a) {
      var b = document.querySelector("#mouse-cursor"),
          d = document.querySelectorAll(".cursor-hover"),
          e = a.pageX;
      a = a.pageY;
      var f = function() {
          b.style.transform = "scale(4)";
          b.style.background = "#FF1744"
      };
      d.forEach(function(c) {
          return c.addEventListener("mouseenter", f)
      });
      var g = function() {
          b.style.transform = "";
          b.style.background = ""
      };
      d.forEach(function(c) {
          return c.addEventListener("mouseleave", g)
      });
      return b.style.left = e - 10 + "px", b.style.top = a - 10 + "px"
  };
  document.addEventListener("mousemove", handleMousePos);
  
  
  document.getElementsByTagName("body")[0].addEventListener("mousemove", function(b) {
      t.style.left = b.clientX + "px";
      t.style.top = b.clientY + "px";
      e.style.left = b.clientX + "px";
      e.style.top = b.clientY + "px";
      i.style.left = b.clientX + "px";
      i.style.top = b.clientY + "px"
  });
  var t = document.getElementById("cursor"),
      e = document.getElementById("cursor2"),
      i = document.getElementById("cursor3");
  
  function n(b) {
      e.classList.add("hover", "hover-2");
      i.classList.add("hover", "hover-2")
  }
  
  function s(b) {
      e.classList.remove("hover", "hover-2");
      i.classList.remove("hover", "hover-2")
  }
  s();
  for (var r = document.querySelectorAll(".hover-target, .hover-target-2"), a = r.length - 1; 0 <= a; a--) o(r[a]);
  
  function o(b) {
      b.addEventListener("mouseover", n);
      b.addEventListener("mouseout", s)
  }
  


}(jQuery));




