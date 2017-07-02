/**
 * Created by Administrator on 2017/4/28.
 */
window.onload = function(){
    var
        oWet = document.getElementById('wet'),
        oCode = document.getElementById('code');
    oWet.onmouseenter = function(){
        oCode.style.display = 'block';
    }
    oWet.onmouseleave = function(){
        oCode.style.display = 'none';
    }
}
