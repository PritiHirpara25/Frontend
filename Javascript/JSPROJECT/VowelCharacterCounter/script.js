var input = document.querySelector("#text");

function vowell(){

var str = input.value.split("");
count = 0;
for( var i = 0; i < str.length; i++){
    if(str[i] == "A" || 
        str[i] == "E" || 
        str[i] == "I" || 
        str[i] == "O" || 
        str[i] == "U" || 
        str[i] == "a" || 
        str[i] == "e" || 
        str[i] == "i" || 
        str[i] == "o" || 
        str[i] == "u")
        count++;
    }
    document.querySelector('#wordcount').innerHTML = count;

}
