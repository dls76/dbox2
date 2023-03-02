function showTimer() {
    var time=new Date();
    var hour=time.getHours();
    var minute=time.getMinutes();
    var second=time.getSeconds();
    if(hour<10)   hour  ="0"+hour;
    if(minute<10) minute="0"+minute;
    if(second<10) second="0"+second;
    var st=hour+":"+minute+":"+second;
    document.getElementById("timecal").innerHTML=st; 
}

function initTimer() {
    // O metodo nativo setInterval executa uma determinada funcao em um determinado tempo  
    // setInterval(showTimer,1000);
}