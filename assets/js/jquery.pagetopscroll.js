$(function() {
	var btnPagetop = $('#page-top');
    btnPagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});