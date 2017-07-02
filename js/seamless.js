/**
 * Created by Administrator on 2017/4/27.
 */
$(function(){

    var i=0;
    var timer=null;
    for (var j = 0; j < $('.hotre li').length; j++) { //创建圆点
        $('.num').append('<li></li>')
    }
    $('.num li').first().addClass('active'); //给第一个圆点添加样式

    var firstimg=$('.hotre li').first().clone(); //复制第个li
    $('.img').append(firstimg).width($('.hotre li').length*($('.hotre img').width())); //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度


    // 下一个按钮
    $('.next').click(function(){
        i++;
        if (i==$('.hotre li').length) {
            i=1; //这里不是i=0
            $('.img').css({left:0}); //保证无缝轮播，设置left值
        };

        $('.hotre').stop().animate({left:-i*600},300);
        if (i==$('.hotre li').length-1) {  //设置小圆点指示
            $('.num li').eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $('.num li').eq(i).addClass('active').siblings().removeClass('active');
        }

    })

    // 上一个按钮
    $('.prev').click(function(){
        i--;
        if (i==-1) {
            i=$('.hotre li').length-2;
            $('.img').css({left:-($('.hotre li').length-1)*600});
        }
        $('.hotre').stop().animate({left:-i*600},300);
        $('.num li').eq(i).addClass('active').siblings().removeClass('active');
    })

    //设置按钮的显示和隐藏
    $('.banner').hover(function(){
        $('.btn').show();
    },function(){
        $('.btn').hide();
    })

    //鼠标划入圆点
    $('.num li').mouseover(function(){
        var _index=$(this).index();
        $('.img').stop().animate({left:-_index*600},150);
        $('.num li').eq(_index).addClass('active').siblings().removeClass('active');
    })

    //定时器自动播放
    timer=setInterval(function(){
        i++;
        if (i==$('.hotre li').length) {
            i=1;
            $('.img').css({left:0});
        };

        $('.hotre').stop().animate({left:-i*600},300);
        if (i==$('.hotre li').length-1) {
            $('.num li').eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $('.num li').eq(i).addClass('active').siblings().removeClass('active');
        }
    },1000)

    //鼠标移入，暂停自动播放，移出，开始自动播放
    $('.banner').hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(function(){
            i++;
            if (i==$('.img li').length) {
                i=1;
                $('.hotre').css({left:0});
            };

            $('.hotre').stop().animate({left:-i*600},300);
            if (i==$('.hotre li').length-1) {
                $('.num li').eq(0).addClass('active').siblings().removeClass('active');
            }else{
                $('.num li').eq(i).addClass('active').siblings().removeClass('active');
            }
        },1000)
    })

})