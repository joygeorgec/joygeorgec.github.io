$(document).ready(function () {

    /*Sticky navigation*/
    $('.js--section-profile').waypoint(function(direction) {
        if (direction == "down") 
        {
            $('nav').addClass('sticky');    
        } else 
        {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '100px'
    });

    
    /*Scrolling buttons*/
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);    
    });
    

    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 500);    
    });
    

    /*Scroll with menu*/ 
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });    


    /*Animation on scroll*/
    $('.js--wp-1').waypoint(function(direction) {
       $('.js--wp-1').addClass('animated fadein') 
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
       $('.js--wp-2').addClass('animated fadeInUp') 
    }, {
        offset: '50%'
    });
      
    
    $('.js--wp-3').waypoint(function(direction) {
       $('.js--wp-3').addClass('animated fadeIn') 
    }, {
        offset: '50%'
    });
      
    
    $('.js--wp-4').waypoint(function(direction) {
       $('.js--wp-4').addClass('animated pulse') 
    }, {
        offset: '50%'
    });
      
    
    /*Toogle navigation*/
    
    $('.js--mobile-nav').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--mobile-nav i');
        
        nav.slideToggle(200);
 
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        };
      
        
    });
    
    
    var waypoints = $('#handler-first').waypoint(function(direction) {
      notify(this.element.id + ' hit 25% from top of window') 
    }, {
      offset: '25%'
    })    
    
        
    $("#select1").change(function() {
      if ($(this).data('options') === undefined) {
        /*Taking an array of all options-2 and kind of embedding it on the select1*/
        $(this).data('options', $('#select2 option').clone());
      }
      var id = $(this).val();
      var options = $(this).data('options').filter('[value=' + id + ']');
      $('#select2').html(options);
    });

});