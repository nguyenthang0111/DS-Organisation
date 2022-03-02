$( document ).ready(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.btt').fadeIn();
        } else {
            $('.btt').fadeOut();
        }
    });

    $('.btt').click(function(){
        $("html").animate({ scrollTop: 0 }, 500);
        return false;
    });
 
  });
 
 
 
 