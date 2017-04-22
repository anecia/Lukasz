$(function() {
    
   var okno = $(window);
    var menu = $('#mainmenu');
    
    if(okno.scrollTop() >= 100 ) {
         menu.addClass('scroll');
        
    }
    
    okno.scroll(function(){
    
        console.log(okno.scrollTop());
        if(okno.scrollTop() >= 100) {
            menu.addClass('scroll');
           
        } else {
            menu.removeClass('scroll');
            
        }
});
    
    //smooth scrollTop
    $(document).on('click', 'a[href^="#"]', function(event){
                event.preventDefault();
    var menuHeight = $('mainmenu').height();
    
       $('html, body').animate({
           scrollTop: $( $.attr(this,'href') ).offset().top - 101 }, 500);
           
    
    
                });

});
