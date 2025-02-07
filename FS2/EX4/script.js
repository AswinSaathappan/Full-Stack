function showCurrentTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let currentTime = hours + ':' + minutes + ':' + seconds;
    alert("CurrentTime:"+ currentTime);
}
showCurrentTime();
/*setInterval(showCurrentTime, 1000);*/

function CurrentDate() {
    let now = new Date();
    let month = now.getMonth() + 1; 
    let day = now.getDate();
    let year = now.getFullYear();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    let currentDate = month + '/' + day + '/' + year;
    console.log("CurrentDate:"+currentDate);
}
CurrentDate();