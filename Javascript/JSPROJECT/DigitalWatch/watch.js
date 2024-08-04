function showTime() {
    let dateTime= new Date();
    let time = dateTime.toLocaleTimeString();
    document.getElementById("digital").innerHTML = time;
}
setInterval(showTime);