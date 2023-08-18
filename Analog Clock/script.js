 let hr = document.getElementById("hour");
 let min = document.getElementById("min");
 let sec = document.getElementById("sec");

 function displayTime(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    
    let hrotate = 30*hh + mm/2;
    let mrotate = 6*mm ;
    let sroatate = 6*ss;

    hr.style.transform = `rotate(${hrotate}deg)`;
    min.style.transform = `rotate(${mrotate}deg)`;
    sec.style.transform = `rotate(${sroatate}deg)`;
 }

 setInterval(displayTime, 1000);