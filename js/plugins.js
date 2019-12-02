$(document).ready(function() {
    'use strict';    
    //Scroll when click on link in menu Or in footer
    $('nav .collapse ul a, .footer #footer_links li span, .navbar-header span.navbar-brand').on('click', function(){
        var conID = $(this).data('value');
        //console.log(conID);
        if(conID == '#about'){
            $('html,body').animate({
                scrollTop: $(conID).offset().top + 150
            },1100);
        }else{
            $('html,body').animate({
                scrollTop: $(conID).offset().top
            },1100);
        }
    });
    // Scroll_top
    $(window).on('scroll', function(){
        var win_scroll = $(this).scrollTop();
        if(win_scroll > 0){
            $('nav .navbar-brand').css({
                'position':'fixed',
                'padding':'10px 15px',
                'border-radius':'0px 0px 5px 5px'
            });
        }else{
            $('nav .navbar-brand').css({
                'position':'block',
                'padding':'28px 15px',
                'border-radius':'0px'
            });
        }
    });
    // Action When Focus on Search_Input
    $('.about form .form-control').focus(function(){
        $('.about form .form-group').css('width','100%');
    }).blur(function(){
        var input_val = $(this).val();
        if(input_val == ''){
            $('.about form .form-group').css('width','40%');
        }else{
            $('.about form .form-group').css('width','100%');
        }
    });
    // now we will [Hide] placeholder when -focus- and [Restore] when -blur-
    var placeAttr = '';
    $('[placeholder]').focus(function(){
       placeAttr = $(this).attr('placeholder');
       $(this).attr('placeholder', '');
    }).blur(function(){
        $(this).attr('placeholder',placeAttr);
    });
    // Animate Website
    $(window).on('scroll', function(){
        var window_scroll = $(this).scrollTop();
        var about = $('#about').offset().top,
            more = $('#more_about').offset().top,
            who = $('#who').offset().top,
            remember = $('#remember').offset().top,
            servicesRow1 = $('#services #row1').offset().top,
            servicesRow2 = $('#services #row2').offset().top,
            servicesRow3 = $('#services #row3').offset().top,
            contact = $('#contact').offset().top;
        // About_section
        if(window_scroll >= about - 20){
            $('#about .about_info img').css({'transform':'scale(1)'})
            $('#about .about_info h3').css({
                'transform':'translateX(0px)',
                'opacity':'1'
            });
            $('#about .about_info p').css({
                'transform':'translateX(0px)',
                'opacity':'1'
            });
            $('#about .about_info form').css({
                'transform':'translateY(0px)',
                'opacity':'1'
            });
        }else{
            $('#about .about_info img').css({'transform':'scale(0)'})
            $('#about .about_info h3').css({
                'transform':'translateX(50px)',
                'opacity':'0'
            });
            $('#about .about_info p').css({
                'transform':'translateX(-50px)',
                'opacity':'0'
            });
            $('#about .about_info form').css({
                'transform':'translateY(50px)',
                'opacity':'0'
            });
        }
        // More_Section
        if(window_scroll >= more){
            $('#more_about .col-md-4 h3').css({
                'transform':'translateX(0px)',
                'opacity':'1'
            });
            $('#more_about .col-md-4 p').css({
                'transform':'scale(1) rotate(0deg)',
                'opacity':'1'
            });
        }else{
            $('#more_about .col-md-4 h3').css({
                'transform':'translateX(200px)',
                'opacity':'0'
            });
            $('#more_about .col-md-4 p').css({
                'transform':'scale(.5) rotate(70deg)',
                'opacity':'0'
            });
        }
        // Who_Section
        if(window_scroll >= who){
            $('#who .col-md-12 h3').css({
                'transform':'translateX(0px)',
                'opacity':'1'
            });
            $('#who .col-md-12 p').css({
                'transform':'scale(1) rotate(0deg)',
                'opacity':'1'
            });
            $('#who .col-md-12 button').css({
                'transform':'translateY(0px)',
                'opacity':'1',
                'transition': 'all .8s ease-in-out'
            });
        }else{
            $('#who .col-md-12 h3').css({
                'transform':'translateX(-200px)',
                'opacity':'0'
            });
            $('#who .col-md-12 p').css({
                'transform':'scale(.5) rotate(-70deg)',
                'opacity':'0'
            });
            $('#who .col-md-12 button').css({
                'transform':'translateY(10px)',
                'opacity':'0',
                'transition':'all .8s ease-in-out'
            });
        }
        // remember_Section
        if(window_scroll >= remember){
            $('#remember .remember_info h2').css({
                'transform':'translateX(0px)',
                'opacity':'1'
            });
        }else{
            $('#remember .remember_info h2').css({
                'transform':'translateX(-50px)',
                'opacity':'0'
            });
        }
        // ServiceRow1_Section
        if(window_scroll >= servicesRow1 - 360){
            $('#services #row1 .content').css({
                'transform':'translateX(0px)'
            });
            $('#services #row1 .icon img').css({
                'transform':'scale(1)'
            });
        }else{
            $('#services #row1 .content').css({
                'transform':'translateX(-1000px)'
            });
            $('#services #row1 .icon img').css({
                'transform':'scale(0)'
            });
        }
        // ServiceRow2_Section
        var window_height = $(window).height();
            //console.log(window_height);
            if(window_scroll == window_height){
                if(window_scroll >= servicesRow2 - 1400){
                    $('#services #row2 .content').css({
                        'transform':'translateX(0px)'
                    });
                    $('#services #row2 .icon img').css({
                        'transform':'scale(1)'
                    });
                }else{
                    $('#services #row2 .content').css({
                        'transform':'translateX(1000px)'
                    });
                    $('#services #row2 .icon img').css({
                        'transform':'scale(0)'
                    });
                }
            }else{
                if(window_scroll >= servicesRow2 - 200){
                    $('#services #row2 .content').css({
                        'transform':'translateX(0px)'
                    });
                    $('#services #row2 .icon img').css({
                        'transform':'scale(1)'
                    });
                }else{
                    $('#services #row2 .content').css({
                        'transform':'translateX(1000px)'
                    });
                    $('#services #row2 .icon img').css({
                        'transform':'scale(0)'
                    });
                }
            }
        // ServiceRow3_Section
        if(window_scroll >= window_height){
            if(window_scroll >= servicesRow3 - 1700){
                $('#services #row3 .content').css({
                    'transform':'translateX(0px)'
                });
                $('#services #row3 .icon img').css({
                    'transform':'scale(1)'
                });
            }else{
                $('#services #row3 .content').css({
                    'transform':'translateX(-1000px)'
                });
                $('#services #row3 .icon img').css({
                    'transform':'scale(0)'
                });
            }
        }else{
            if(window_scroll >= servicesRow3 - 200){
                $('#services #row3 .content').css({
                    'transform':'translateX(0px)'
                });
                $('#services #row3 .icon img').css({
                    'transform':'scale(1)'
                });
            }else{
                $('#services #row3 .content').css({
                    'transform':'translateX(-1000px)'
                });
                $('#services #row3 .icon img').css({
                    'transform':'scale(0)'
                });
            }
        }
        //Contact_Section
        if(window_scroll >= window_height){
            if(window_scroll >= contact - 1800){
                $('#contact .col-md-4').css({
                    'transform':'translateY(0px)',
                    'opacity':'1'
                });
                $('#contact #footer_links li').css({
                    'transform':'translateX(0)',
                    'opacity':'1'
                });
                $('#contact .col-md-12 a i').css({'transform':'scale(1)'});
    
                $('#contact .col-md-12 a i.facebook').hover(function(){$(this).css({'transition-delay':'0s','background':'#3b5998'});}, function(){$(this).css({'transition-delay':'0s','background':'#46084e'});
                });
                $('#contact .col-md-12 a i.twitter').hover(function(){$(this).css({'transition-delay':'0s','background':'#1da1f2'});}, function(){$(this).css({'transition-delay':'0s','background':'#46084e'});
                });
                $('#contact .col-md-12 a i.whats').hover(function(){$(this).css({'transition-delay':'0s','background':'#075e54'});}, function(){$(this).css({'transition-delay':'0s','background':'#46084e'});
                });
                $('#contact .col-md-12 a i.google').hover(function(){$(this).css({'transition-delay':'0s','background':'#dd4b39'});}, function(){$(this).css({'transition-delay':'0s','background':'#46084e'});
                });
            }else{
                $('#contact .col-md-4').css({
                    'transform':'translateY(30px)',
                    'opacity':'0'
                });
                $('#contact #footer_links li').css({
                    'transform':'translateX(-15px)',
                    'opacity':'0'
                });
                $('#contact .col-md-12 a i').css({'transform':'scale(0)',});
                $('#contact .col-md-12 a i.facebook').css({'transition-delay':'1.2s'});
                $('#contact .col-md-12 a i.twitter').css({'transition-delay':'1.4s'});
                $('#contact .col-md-12 a i.whats').css({'transition-delay':'1.6s'});
                $('#contact .col-md-12 a i.google').css({'transition-delay':'1.8s'});
            }
        }else{
            if(window_scroll >= contact - 800){
                $('#contact .col-md-4').css({
                    'transform':'translateY(0px)',
                    'opacity':'1'
                });
                $('#contact #footer_links li').css({
                    'transform':'translateX(0)',
                    'opacity':'1'
                });
                $('#contact .col-md-12 a i').css({'transform':'scale(1)'});
    
                $('#contact .col-md-12 a i.facebook').hover(function(){$(this).css({'transition-delay':'0s','background':'#3b5998'});}, function(){$(this).css({'transition-delay':'0s','background':'#46084e'});
                });
                $('#contact .col-md-12 a i.twitter').hover(function(){$(this).css({'transition-delay':'0s','background':'#1da1f2'});}, function(){$(this).css({'transition-delay':'0s','background':'#46084e'});
                });
                $('#contact .col-md-12 a i.whats').hover(function(){$(this).css({'transition-delay':'0s','background':'#075e54'});}, function(){$(this).css({'transition-delay':'0s','background':'#46084e'});
                });
                $('#contact .col-md-12 a i.google').hover(function(){$(this).css({'transition-delay':'0s','background':'#dd4b39'});}, function(){$(this).css({'transition-delay':'0s','background':'#46084e'});
                });
            }else{
                $('#contact .col-md-4').css({
                    'transform':'translateY(30px)',
                    'opacity':'0'
                });
                $('#contact #footer_links li').css({
                    'transform':'translateX(-15px)',
                    'opacity':'0'
                });
                $('#contact .col-md-12 a i').css({'transform':'scale(0)',});
                $('#contact .col-md-12 a i.facebook').css({'transition-delay':'1.2s'});
                $('#contact .col-md-12 a i.twitter').css({'transition-delay':'1.4s'});
                $('#contact .col-md-12 a i.whats').css({'transition-delay':'1.6s'});
                $('#contact .col-md-12 a i.google').css({'transition-delay':'1.8s'});
            }
        }
    });
});