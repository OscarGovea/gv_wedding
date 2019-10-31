

$(document).ready(function(){
    setInterval(getTimeRemain, 1000);
});

function getTimeRemain(){
    var deadLine = 'Jul 18 2020 20:00:0 GMT-0600';
    let now = new Date(),
        remainTime = (new Date(deadLine) - now + 1000)/1000,
        remainSecond = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60  % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600  % 24)).slice(-2),
        remainDays = (Math.floor(remainTime / (3600  * 24)));
        
    $("#sSeconds").text(remainSecond); 
    $("#sMinutes").text(remainMinutes); 
    $("#sHours").text(remainHours); 
    $("#sDays").text(remainDays); 
}