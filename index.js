
function countDownClock() {
    const  endDate = Date.parse(" dec 25, 2021 00:00:00");
    const startDate = new Date();
    const timeFrame = endDate - startDate;
 
    const days = Math.floor(timeFrame / (1000*60*60*24));
    const hours = Math.floor(timeFrame / (1000*60*60));
    const mins = Math.floor(timeFrame /(1000*60));
    const secs = Math.floor(timeFrame / 1000);
 
    const d = days;
    const h = hours - days * 24;
    const m = mins - hours * 60;
    const s = secs - mins * 60;

  
 
    document.getElementById("clock").innerHTML=
    '<div>' + d.toString().padStart(2, "0") + '<span>Days</span></div>'+
    '<div>' + h.toString().padStart(2, "0") +  '<span>Hours</span></div>' +
    '<div>' + m.toString().padStart(2, "0") + '<span>Minutes</span></div>' +
    '<div>' + s.toString().padStart(2, "0") + '<span>Seconds</span></div>';
}

 setInterval('countDownClock()', 1000);