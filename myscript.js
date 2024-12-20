var owl = $('.owl-carousel');
    owl.owlCarousel({
      items: 3,
      autoWidth:true,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
    });




$(document).ready(function() {

    $("#owl-demo").owlCarousel({
    
      autoPlay: 3000, //Set AutoPlay to 3 seconds
    
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 3]
    
    });
    }); 


  