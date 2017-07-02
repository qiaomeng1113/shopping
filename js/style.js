//tab切换
$(function(){
    var $tabA = $('.tabNav li');
    $tabA.mouseenter(function(){
        $(this).addClass('selected sel hua').siblings().removeClass('selected sel hua');
        var index = $tabA.index(this);
        $('.tabs>div').eq(index).show().siblings().hide();
    });
    $('#marquee6').kxbdSuperMarquee({
        isMarquee:true,
        isEqual:false,
        scrollDelay:20,
        controlBtn:{up:'#goUM',down:'#goDM'},
        direction:'up'
    });
// 热卖榜的
    var $serA = $('.ser_right a');
    $serA.click(function(){
        $(this).addClass('brsel').siblings().removeClass('brsel');
    });
//    详情页tab切换


});
