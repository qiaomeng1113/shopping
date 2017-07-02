/**
 * Created by Administrator on 2017/5/3.
 */
$(function(){
//    手机号验证
    function checkSubmitMobil() {
        if ($(".mobile").val() == "") {
            alert("手机号码不能为空！");
//$("#moileMsg").html("<font color='red'>手机号码不能为空！</font>");
            $(".mobile").focus();
            return false;
        }
        if (!$(".mobile").val().match(/^(((13[0-9]{1})|159|153)+\d{8})$/)) {
            alert("手机号码格式不正确！");
//$("#moileMsg").html("<font color='red'>手机号码格式不正确！请重新输入！</font>");
            $(".mobile").focus();
            return false;
        }
        return true;
    }
});