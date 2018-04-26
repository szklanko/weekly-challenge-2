$(document).ready(function(){

    var headerHeight = $('#bg-gradient').outerHeight();


    $('.nav-link, .navbar-brand').click(function(e){
        e.preventDefault();
        var linkHref = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - (headerHeight * 0.5)
        })
        
    });

});