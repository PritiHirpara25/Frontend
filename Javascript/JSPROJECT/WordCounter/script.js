// function WordCount(str) { 
//     return str.split(" ").length;
//   }
  
//   console.log(WordCount("hello"));

// var str = "Hello"
//   function word(str){
//     var str1 = str.split(" ").length;
//     document.getElementById('btn').innerHTML = str1;
//     document.getElementById('show').innerHTML =str1;
//   }

var input = documnet.querySelectorAll('input');

function data1(){
documnet.querySelector('#char').innerHTML = input.value.length;

var words = input.value.split(" ");
console.log(words);
if(words){
  document.querySelector('#word').innerHTML = words.length;
}else{
  document.querySelector('#word').innerHTML = 0;
}
}



