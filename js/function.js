$(function(){
    let idx=0;
    const $mnb = $('header > nav > .mnb-bg > .mnb');
    const $mnbA = $('header > nav > .mnb-bg > .mnb > li');

    const $lnb = $('header > nav > .mnb-bg > .mnb > li >.lnb');
    const $lnbBgG = $('header >.lnb-bg');
    const $lnbBgW = $('header >.lnb-bg > .blur');
    const $hamburger =$('header > nav > .mnb-bg > .nav-right > .hamburger');

    $('a').on('click',function(evt){
        evt.preventDefault();
    });

    $mnb.width($('.mnb-bg > .mnb > li>a').width()*5-95);

    $mnb.css({
        marginLeft:-$mnb.width()/2
    });

    $lnb.css({
        marginLeft: -400,
        display:'none'
    })
    $lnbBgG.height($(window).height());

    $('.sub-mnb').width($(window).width());
    $('.sub-mnb').height($(window).height());



    let lock = false;

    if($(window).width()>640){

        $mnbA.on('mouseover',function(evt){
            evt.preventDefault();
            $lnbBgG.on().slideDown();
            $mnb.on('mouseover',function(){
                $lnbBgG.show();
            })
            let ml = $($mnbA).children('.lnb').width() / -2;
            $(this).find('.lnb').stop().slideDown();

            $lnbBgW.height($(this).find($('.lnb-sub')).height()+250);

            console.log($(this).children('.lnb').width()/-2)

        });

        $mnbA.on('mouseout',function(evt){
            evt.preventDefault();

            $(this).find('.lnb').stop().slideUp(100);
            $(this).parent().on('mouseleave',function(){
                $lnbBgG.slideUp();
            })

        });
    }else{
        $lnb.css({display:'none'})
    }
    
    //서브메뉴

    $('.sub-mnb-con').css({
        right : -$(this).width()
    });
    $hamburger.on('click',function(evt){
        evt.preventDefault();
        $('.sub-mnb').show();
        $('.sub-mnb-con').stop().animate({
            right:0
        },400);
    })
    $('.sub-mnb-con>span>a').on('click',function(){
        $('.sub-mnb-con').stop().animate({
            right:-500
        },400);
        $('.sub-mnb').delay(450).hide(1);
    });
});