function navbarBg() {
    if ($(document).scrollTop() > 1) {
        $('.navbar').addClass('scrolled');
        $('.menu-button').addClass('scrolled');
        $('.static-cta').addClass('scrolled');
        $('.mega-menu__nav').addClass('scrolled');
    } else {
        if ($('.navbar').hasClass('scrolled')) {
            $('.mega-menu__nav').removeClass('scrolled');
            $('.navbar').removeClass('scrolled');
            $('.menu-button').removeClass('scrolled');
            $('.static-cta').removeClass('scrolled');
        }
    }
}
$(document).keyup(function (e) {
    if (e.keyCode === 27) {
        if ($('.menu-button').hasClass('open')) {
            $('html').toggleClass('open');
            $('.menu-button').toggleClass('open');
            $('.mobile-menu').toggleClass('open');
            $('.overlay').toggleClass('open');
            $('.static-cta').toggleClass('open');
            currentMenuLevel = 0;
            $('.mobile-menu__back').removeClass('sub-level');
            $('.mega-menu').toggleClass('open');
        }
    }
});
$('.menu-button').click(function () {
    $('.menu-button').toggleClass('open');
    $('.mobile-menu').toggleClass('open');
    $('.mega-menu').toggleClass('open');
    $('.overlay').toggleClass('open');
    $('html').toggleClass('open');
    $('.static-cta').toggleClass('open');
    $('.mega-menu .column').animateCss('fadeIn');
    if ($(this).hasClass('open')) {
        $('.mobile-menu li').removeClass(
            'fadeInRight fadeInLeft fadeOutLeft fadeOutRight'
        );
        $('.mobile-menu')
            .children('ul')
            .children('li')
            .addClass('fadeInRight faster animated');
    } else {
        currentMenuLevel = 0;
        $('.mobile-menu__back').removeClass('sub-level');
    }
    return false;
});

$('.overlay').click(function () {
    if ($(this).hasClass('open')) {
        $('html').toggleClass('open');
        $('.menu-button').toggleClass('open');
        $('.mobile-menu').toggleClass('open');
        $('.overlay').toggleClass('open');
        $('.static-cta').toggleClass('open');
        currentMenuLevel = 0;
        $('.mobile-menu__back').removeClass('sub-level');
        $('.mega-menu').toggleClass('open');
    }
});

$('.mega-menu > ul > li > a').click(function (e) {
    if ($(this).parent('li').next().is('.mega-menu__sub')) {
        e.preventDefault();
        $('.mega-menu > ul > li').removeClass('active');
        $(this).parent('li').addClass('active');
        $('.mega-menu__sub').removeClass('open');
        $(this).parent('li').next('.mega-menu__sub').addClass('open');
        $('.mega-menu .column').animateCss('fadeIn');
    }
});
