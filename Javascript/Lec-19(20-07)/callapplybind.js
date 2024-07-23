// call method

// let person = {
//     sayHello: function(city){
//         return `${this.name} and ${this.age} 
//         city is: ${city}`
//     }
// }

// let data = {
//     name : 'Virat',
//     age : 34
// };

// let data1 = {
//     name : 'Rohit',
//     age : 36
// };

// console.log(person.sayHello.call(data1,'Bombay'))

// apply method

// let person = {
//     sayHello: function(city){
//         return `${this.name} and ${this.age}, 
//         city is: ${city}`
//     }
// }

// let data = {
//     name : 'Virat',
//     age : 34
// };

// let data1 = {
//     name : 'Rohit',
//     age : 36
// };

// console.log(person.sayHello.apply(data1,['Bombay']));

// bind method

// let person = {
//     name : 'Rohit',
//     age : 36,
//     sayHello: function(city){
//         return `${this.name} and ${this.age}, 
//         city is: ${city}`
//     }
// }

// let data = {
//     name : 'Virat',
//     age : 34
// };

// console.log(person.sayHello.bind(data,'Bombay')());