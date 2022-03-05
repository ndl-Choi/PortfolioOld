var homeSection = $('.home-section'),
            navbar      = $('.navbar-custom'),
            navHeight   = navbar.height() ; 

function navbarAnimation(navbar, homeSection, navHeight) {
    var topScroll = $(window).scrollTop();
    if (navbar.length > 0 && homeSection.length > 0) {
        if(topScroll >= navHeight) {
            navbar.removeClass('navbar-transparent');
        } else {
            navbar.addClass('navbar-transparent');
        }
    }
}