$(function() {
    
    wW = window.innerWidth,
    wH = window.innerHeight,

    $(window).on('load scroll', function() {
        //var value = $(this).scrollTop();
        //if ( value > wH ) {
            //cloneHeader.addClass(showClass);
            //cloneHeader.fadeIn(200, 'easeInQuart');
        //} else {
            //cloneHeader.removeClass(showClass);
            //cloneHeader.fadeOut(100, 'easeOutQuart');
        //}
    });
    
    $(window).on('load resize', function() {
        w = window.innerWidth,
        h = window.innerHeight;
        vcw = $('#is-home #visual-copy').width();
        vch = $('#is-home #visual-copy').height();
        if(w < 768) {
            $('#is-home #visual').css('height', ( (w/9)*16)*0.85+'px' );
            $('#is-home #visual-mask').css('height', ((w/9)*16)*0.85+'px');
            $('#is-home #visual-copy').css('top', (((((w/9)*16)*0.85)/2-(vch/2))-20)+'px' );
            $('#is-home #visual-copy').css( 'left', ((w/2)-(vcw/2))+'px' );
        } else {
            $('#is-home #visual').css('height', '576px' );
            $('#is-home #visual-mask').css('height', '576px');
            $('#is-home #visual-copy').css( 'top', '160px' );
            $('#is-home #visual-copy').css( 'left', '65px' );
        }
        
        hpvW = $('#is-home #ppp .visual').width();
        $('#is-home #ppp .visual').css('height', (hpvW * 0.48)+'px');
        
        stvW = $('.is-salon #title .visual').width();
        $('.is-salon #title .visual').css('height', (stvW * 0.48)+'px');
        
        pdW = $('#is-ppp #title .visual').width();
        btvW = $('#is-bridal #title .visual').width();
        
        if ( w < 768 ) {
            $('#is-bridal #title .visual').css('height', (btvW * 1.01)+'px');
            $('#instagram ul li').tile(2);
        } else if ( w >= 768 ) {
            
            $('#is-home #price dl dd').tile(3);
            
            $('#is-ppp #title .visual').css('height', '360px');
            $('#is-bridal #title .visual').css('height', '360px');
            $('#instagram ul li').tile(4);
        }
        
        if ( w < 375 ) {
            iW = $('.is-salon address iframe').width();
            $('.is-salon address iframe').css('height', (iW)+'px');
        }
    });
    
    $('#nav-button').on('click', function() {
        $('header nav').toggleClass('is-open');
        return false;
    });
    
    $('a[href^="#"]').click(function() {
        var speed = 400; // ミリ秒
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        if(navigator.userAgent.match(/(iPhone|iPod|Android)/)) {
            var position = target.offset().top - 50;
        } else {
            var position = target.offset().top - 70;
        }
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
    
    $('#is-ppp #ppp .slide-button').on('click', function() {
        $(this).next().fadeToggle(200);
        $(this).children('.slide').slideToggle();
        $(this).children('img').toggleClass('is-open');
    });

});