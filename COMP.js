
time();
    function time(){
        var now = new Date();
        document.getElementById("time").innerHTML = now.toLocaleTimeString();
    }
    setInterval('time()',1000);
jQuery(function($) {
        $.ajax({
            url: "http://weather.livedoor.com/forecast/webservice/json/v1?city=340010",
            dataType : 'jsonp',
        }).done(function(data){
            console.log(data);
    }).fail(function(data) {
            console.log("ERR");          
  });
});
