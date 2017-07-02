/**
 * Created by Administrator on 2017/5/3.
 */
$(function(){
    var $ctLi = $('.ct_nav li');
    $ctLi.mouseenter(function(){
        $(this).addClass('changel').siblings().removeClass('changel');
        var index = $ctLi.index(this);
        $('.cout>.key').eq(index).show().siblings().hide();
    });
});