/* Javascript DOM  */

// getElementById() – select an element by id.
// getElementsByTagName()  – select elements by a tag name.
// getElementsByClassName() – select elements by one or more class names.
// querySelector()  – select elements by CSS selectors.

/* getElementById() */

{
    // function hello(){
    //     let dom1 = document.getElementById('heading')
    //     dom1.style.backgroundColor="blue"
    // }
}

/* getElementsByTagName() */

// let dom = document.getElementsByTagName('p');
// function para(){
//     for(let i = 0; i < dom.length; i++){
//         if(i == 3)
//             dom[i].style.color='Blue'
//         else
//             dom[i].style.color='purple'
//     }
// }

/* getElementsByClassName() */

// const dom = document.getElementsByClassName('text')
// console.log(dom)

// function changeColor(){
//     for(let i=0; i<dom.length; i++){
//         dom[i].style.color = 'green';
//     }
// }

/* querySelector() */

// let dom = document.querySelector(".demo")
// console.log(dom)

// function none(){
//     dom.style.color='red';
// }












function message(){
    alert("Yes, I Am Heading Tag")
}

function dateshow(){
    let date = new Date();
    document.getElementById("date").innerHTML = date.toLocaleString();
}

function uppercase(){
    const change = document.getElementById("emails"); 
    change.value = change.value.toUpperCase();
}
function red(one){
    one.style.color= "red";
}
{
    function Down(obj) {
        obj.style.backgroundColor = "#1ec5e5";
        obj.innerHTML = "Release Me";
      }
      
      function Up(obj) {
        obj.style.backgroundColor="#D94A38";
        obj.innerHTML="Thank You";
      }
}
