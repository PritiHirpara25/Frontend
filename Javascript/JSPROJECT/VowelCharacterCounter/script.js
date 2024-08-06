
var input = document.querySelectorAll("input");
function vowell(){
var str = input.value.split("");

// var str = input.value;
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
    // let para = document.getElementById('text').count;
    // document.getElementById('demo').innerHTML = "vowels:" + para;
    document.querySelector('#wordcount').innerHTML = count;

    // wordcount.innerHTML = count;
}

// let str = "Hello World! AeiOu"
    // let i = 0;

    // for(i ; i < str.length ; i++){
    //     if(str[i] == 'A'  || str[i] == 'E'  || str[i] == 'I'  || str[i] == 'O'  || str[i] == 'U'  || str[i] == 'a'  || str[i] == 'e'  || str[i] == 'i'  || str[i] == 'o' || str[i] == 'u'){
    //         console.log(`i = ${str[i]}`);
    //     }
    // }