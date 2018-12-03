$(document).ready(function() {
    let element = $('#top');
    let menuBtn = $('#menu-btn');
    let main = $('main');
    let leftNav = $('.left-nav');
    let rightNav = $('.right-nav');
    let call = $('#call');
    let aIcon = $('#about-icon');
    let pIcon = $('#price-icon');
    let cIcon = $('#contact-icon');

    function ready() {
        element.click(upMe)
        menuBtn.click(show)

        //setTimeout(steady, 5000)
    }

    ready();

    function upMe() {
        if(element.hasClass('upMe')) {
            element.removeClass('upMe');
            main.removeClass('main-height')
        } else {
            element.addClass('upMe');
            main.addClass('main-height')
        }
    };

    function show() {
        if(menuBtn.hasClass('close')) {
            menuBtn.removeClass('close');
            leftNav.removeClass('show');
            rightNav.removeClass('show');
            call.removeClass('show')
        } else {
            menuBtn.addClass('close');
            leftNav.addClass('show');
            rightNav.addClass('show');
            call.addClass('show')
        }
    }

    $(function() {

    //caches a jQuery object containing the class .clos (for hiding navigation on scrollin the window)
    $(window).scroll(function() {
        let windowTop = $(window).scrollTop();
        let docHeight = $(document).height();
        let screen = $(window).innerHeight();

        if(menuBtn.hasClass('close')) {
            show();
        };

        //adding class .active to icons if top of window riches the category place
        
        if(windowTop < screen) {
            aIcon.removeClass('active');
            pIcon.removeClass('active');
            cIcon.removeClass('active')
        }else if(windowTop > screen - 1 && !aIcon.hasClass('active') && windowTop < screen * 2) {
            aIcon.addClass('active');
            pIcon.removeClass('active')
        } else if (windowTop > screen * 2 - 1 && !pIcon.hasClass('active') && windowTop < docHeight-screen-1) {
            aIcon.removeClass('active');
            pIcon.addClass('active');
            cIcon.removeClass('active')
        } else if (windowTop > docHeight-screen-1 && !cIcon.hasClass('active')) {
            pIcon.removeClass('active');
            cIcon.addClass('active')
        }
    });
});

});
