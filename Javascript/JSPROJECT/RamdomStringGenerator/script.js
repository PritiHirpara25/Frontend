let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let length = str.length;
document.getElementById('generator').innerHTML = str.charAt(Math.floor(Math.random()*length));