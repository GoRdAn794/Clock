setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
   
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    document.getElementById("hour1").innerHTML=htime+"h:";
    document.getElementById("min").innerHTML=mtime+"m:";
    document.getElementById("sec").innerHTML=stime+"s";
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

