// High Order Funtion

//function as object

// function text(a,b){
//     return arguments.length;
// }
// let test = text(1,2);


// function sumAll(){
//     let total = 0;
//     for (let i=0; i<arguments.length; i++)
//         total += arguments[i];
//     // return total;
//     return arguments[2];
// }

// console.log(sumAll(4,2,5))



// rest parameters(...)

// function hello(...args){
//     return args;
// }

// console.log(hello(1,2,3,4,5,6));


// Generator

// function* test(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield "test";
//     return "hello";
// }
// let data = test();
// console.log(data.next().value);
// console.log(data.next().value);
// console.log(data.next().value);
// console.log(data.next().value);
// console.log(data.next().value);

//this keyword

// let person ={
//     FirstName : 'Virat',
//     LastName : 'Kohli',
//     Age : 34 , 
//     Hobbies : ['Cricket', 'Music' , 'Dancing'],
//     test : function(){
//         console.log(`Player Info: ${this.FirstName} ${this.LastName}.
//                      He is ${this.Age} year old.
//                      His Hobbies are ${this.Hobbies} `); 
//     }
// }
// person.test()