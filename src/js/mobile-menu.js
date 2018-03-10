function mobileToggle() {
    $('.mobile-menu').toggleClass('toggle');
    $('.row-nav').toggle('slow');
}

$('.mobile-menu').click(mobileToggle);