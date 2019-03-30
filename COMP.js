
time();
    function time(){
        var now = new Date();
        document.getElementById("time").innerHTML = now.toLocaleTimeString();
    }
    setInterval('time()',1000);
$(window).scroll(function(){
    var WTH = $('#WTH');
    if ($(this).scrollTop() > 500){
        WTH.hide();
    }else{
        WTH.fadeIn();
    }
})

