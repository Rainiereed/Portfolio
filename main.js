function loadContent(divName,pageURL) {
    $("#" + divName).load(pageURL);
}

$(function(){

    function animateCSS(element, animationName, callback) {
        const node = document.querySelector(element)
        node.classList.add('animated', animationName)
    
        function handleAnimationEnd() {
            node.classList.remove('animated', animationName)
            node.removeEventListener('animationend', handleAnimationEnd)
    
            if (typeof callback === 'function') callback()
        }
    
        node.addEventListener('animationend', handleAnimationEnd)
    }

    //Yo text width calculator
    var yowid = $('#yoFake').outerWidth()*10;

    //note1 animation
    $('#note1').removeClass('hide');
    animateCSS('#note1', 'fadeInUp');

    //variables
    var letters = document.getElementById('hello').children;
    var yes = document.getElementById('yes').children;
    var letwid = [];
    var yeswid = [];
    var flag = 0;
    var wid = $(window).width();
    var hei = $(window).height();
    var pos = 0;
    var qos = 0;
    var p = 0;
    var q = 0;

    // $('#hello').children('span').each(function() { 
    //     letwid [i] = $(this).outerWidth(true);   
    //     i++;  
    // });

    //type width calculator
    for (var i = 0; i < letters.length; i++) {
        letwid [i] = letters[i].offsetWidth;   
    }

    for (var j = 0; j < yes.length; j++) {
        yeswid [j] = yes[j].offsetWidth;   
    }

    //keypress
    $(document).keypress(function(event){
        // var keycode = (event.keyCode ? event.keyCode : event.which);
        // if(keycode == '32'){
            if( p < letters.length-1 ){
                pos = pos - letwid[p];
                $('#hello').css('transform', 'translateX('+ pos +'px)');
                $('#hello').children().eq(p).css('color', '#0080ff');
                p++; 
            }  else if( p == letters.length-1 ) {
                $('#hello').children().eq(p).css('color', '#0080ff');
                p++;
                $('#hello').css('transition-duration', '3s');
                $('#hello').css('transform', 'translateX(-100%)');
                $('.line').fadeOut();

                //Round II
                animateCSS('#note1', 'fadeOutDown', function() {
                    $('#note1').addClass('hide');
                });
                setTimeout(function(){
                    $('.typing').removeClass('hide');
                    animateCSS('.typing', 'fadeInUp', function() {
                        $('#note2').removeClass('hide');
                        animateCSS('#note2', 'fadeInUp');
                    });
                },500);
                setTimeout(function(){
                    animateCSS('.typing', 'fadeOutUp', function() {
                        $('.typing').addClass('hide');
                        $('#bio').css('left', (-1*yowid) + wid/2 - 50 + 'px');
                    });
                },2000);
                setTimeout(function(){
                    animateCSS('#note2', 'fadeOutDown', function() {
                        $('#note2').addClass('hide');
                        $('#note3').removeClass('hide');
                        animateCSS('#note3', 'fadeInUp');
                    });
                },7000);
                setTimeout(function(){
                        $('#yes').css('left', '50%');    
                },7000);
                setTimeout(function(){
                    $('.line').fadeIn();
                    p++;   
                },9000);
            } else if ( p == letters.length ){

            } else if ( p > letters.length && q < yes.length -1 ){
                $('#yes').css('transition-duration', '0s');
                $('#bio').css('transition-duration', '0s');
                qos = qos - yeswid[q];
                $('#yes').css('transform', 'translateX('+ qos +'px)');
                $('#bio').css('transform', 'translateX('+ qos +'px)');
                $('#yes').children().eq(q).css('color', '#0080ff');
                q++; 

            } else if ( q == yes.length -1 ){
                $('#yes').children().eq(q).css('color', '#0080ff');
                q++;
                $('#yes').css('transition-duration', '3s');
                $('#bio').css('transition-duration', '3s');
                $('#yes').css('transform', 'translateX(-100%)');
                $('#bio').css('transition-timing-function', 'ease-in');
                $('#bio').css('transition-duration', '2s');
                $('#bio').css('transform', 'translateX(-100%)');
                $('.line').fadeOut();
                animateCSS('#note3', 'fadeOutDown', function() {
                    $('#note3').addClass('hide');
                    setTimeout(function(){
                        window.location.replace("https://github.com/Rainiereed");
                        // $('#container').load(
                        //     'folio.html',
                        //     function () {
                        //         // animateCSS('body', 'fadeInUp', function(){
                                    
                        //         // });
                        //     }
                        // );
                    },1000);
                });
            }
            
        // }
    });
  
});
