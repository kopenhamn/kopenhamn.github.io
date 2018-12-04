$(document).ready(function() {
    let element = $('#top');
    let menuBtn = $('#menu-btn');
    let main = $('main');
    let leftNav = $('.left-nav');
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
            call.removeClass('show')
        } else {
            menuBtn.addClass('close');
            leftNav.addClass('show');
            call.addClass('show')
        }
    }

    $(function() {

    //caches a jQuery object containing the class .clos (for hiding navigation on scrollin the window)
    $(window).scroll(function() {
        let windowTop = $(window).scrollTop();
        let docHeight = $(document).height();
        let screen = $(window).innerHeight();
        let aboutDiv = screen - 10;
        let priceDiv = screen * 2 - 10;
        let contactDiv = docHeight - screen - 10;

        if(menuBtn.hasClass('close')) {
            show();
        };

        //adding class .active to icons if top of window riches the category place

        if(windowTop < aboutDiv) {
            aIcon.removeClass('active');
            pIcon.removeClass('active');
            cIcon.removeClass('active')
        }else if(windowTop > aboutDiv && !aIcon.hasClass('active') && windowTop < priceDiv) {
            aIcon.addClass('active');
            pIcon.removeClass('active')
        } else if (windowTop > priceDiv && !pIcon.hasClass('active') && windowTop < contactDiv) {
            aIcon.removeClass('active');
            pIcon.addClass('active');
            cIcon.removeClass('active')
        } else if (windowTop > contactDiv && !cIcon.hasClass('active')) {
            pIcon.removeClass('active');
            cIcon.addClass('active')
        }
    });
});

});
