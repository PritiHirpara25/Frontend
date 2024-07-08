// Javascript var , let and const keyword Difference

//let and const keyword Introduce (Es5 / Es6)(2015)

//var Keyword(Global Variable)

// var name = "skillqode"
// {
//     console.log(name);
// }

//var Declaration  /  var Hoisting Method

// var a , b , c , d;

// a = 10;
// b = 20;
// c = 30;
// d = 40;

// console.log(c);
// console.log(a+b);
// console.log(a-a);
// console.log(c*a);
// console.log(c + d * a - a);

// a , b , c , d;

// var a = 10;
// var b = 20;
// var c = 30;
// var d = 40;

// console.log(c);
// console.log(a+b);
// console.log(a-a);
// console.log(c*a);
// console.log(c + d * a - a);


// Es6 let Keyword / let Hoisting / Blockscope Variables

// a , b;

// let a = 10
// let b = 20

// console.log(a)
// console.log(b)

// let a , b;

// a = 10
// b = 20

// console.log(a)
// console.log(b)           

// {
//     let gift = "toys"
//     gift = "car"
//     console.log(gift);
// }

// {
//     let gift = "car"
//     console.log(gift)
// }

// Es6 const Keyword / const Hoisting / BlockScope Variables

// const name = "This is Javascript!"
// console.log(name);

// const data;
// const data = "This is Javascript!";
// console.log(data);

// {
//     const prints = 'This is printer!';
//     console.log(prints);
// }

/* Javascript  String */

// let string1 ="This is String Data"
// let string2 = 'this is string data'
// let string3 = `this is string data`
// // let string4 ="This is "String" Data"
// let string5 = "This is \"string\" data"
// // let string6 = 'this is 'string' data'
// let string7 = 'this is \'string\' data'
// // let string8 = `this is `string` data`
// let string9 = `this is \`string\` data`

// Javascipt Template Literals (`Back-tik`)

// console.log(string1)
// console.log(string2)
// console.log(string3)
// // console.log(string4)
// console.log(string5)
// // console.log(string6)
// console.log(string7)
// // console.log(string8)
// console.log(string9)

// //typeof operator (typeof is inbuilt function)

// console.log(typeof string1)
// console.log(typeof string2)
// console.log(typeof string3)
// console.log(typeof string5)
// console.log(typeof string7)
// console.log(typeof string9)

/* Javascript String Variables */

// let UserName = "Ronak"

// let string1 = "${UserName} is a very clever boy!"      //(this will not  show)
// let string2 = '${UserName} is a very clever boy!'      //(this will not show)
// let string3 = `${UserName} is a very clever boy!`      //(this will show)

// console.log(string1)
// console.log(string2)
// console.log(string3)

/* string And number */

// {
//     let str1 = "10"    //(string)
//     let str2 = "20"    //(string)
    
//     let str3 = str1 + str2
    
//     console.log(str3)
    
//     console.log(typeof str3)
// }

// {
//     let str1 = 10   //(number)
//     let str2 = "20"   //(string)
    
//     let str3 = str1 + str2
    
//     console.log(str3)
    
//     console.log(typeof str3)    //(it convert number datatype to string datatype)
// }

// {
//     let str1 = 10   //(number)
//     let str2 = 20   //(number)
    
//     let str3 = str1 + str2
    
//     console.log(str3)
    
//     console.log(typeof str3)    
// }

// {
//     let str1 = 10   //(number)
//     let str2 = "20"   //(string)
    
//     let str3 = str1 + str2 + str2
    
//     console.log(str3)
    
//     console.log(typeof str3)    
// }

// {
//     let str1 = 10   //(number)
//     let str2 = "20"   //(string)
    
//     let str3 = str1 + str2 + str2 * str1
//                // 10 + 20 + 200 = 1020200
    
//     console.log(str3)
    
//     console.log(typeof str3)    
// }

// {
//     let str1 = 10   //(number)
//     let str2 = "20"   //(string)
    
//     let str3 = str1 + str1 + str2 + str2 * str1
//              // 10 + 10 + 20 + 20 * 10
//              // 20 + 20 + 200
//              //2020200
    
//     console.log(str3)
    
//     console.log(typeof str3)    
// }

/* Null , Undefined , NAN-(Not A Number) */

// var a;
// console.log(a);

// console.log(undefined);

// let x = undefined;

// console.log(x);

// console.log(typeof x);

// let y = null == undefined

// console.log(y);

// console.log(typeof y);



/* Type Conversion */

// let str = "100"
// console.log(str);

// console.log(typeof str)

// let num=Number(str)  //convert string to number
// console.log(typeof num)
// console.log(num);

// let str1 = String(num)    //convert number to string
// console.log(typeof str1)
// console.log(str1)

// let bool1 = true
// let bool2 = false

// let num1 = Number(bool1)
// console.log(typeof num1)
// console.log(num1)   

// let num2 = Number(bool2)
// console.log(typeof num2)
// console.log(num2)


//Javascript Datatypes

//Primitive Data //immutable

/*

string
number
Boolean
Undefined
null
BigInt
symbol

*/

// {
//     let name = "Javascript Datatypes"
//     console.log(name);

//     name[10] = "y"
//     console.log(name);
// }

//non-primitive Data //mutable

/*

object 
array 

*/

// {
//     let array = [10, 20 , 30]
//     console.log(array);
//     array[2]=50
//     console.log(array);
// }

// {
//     let obj = {name1:"firstname" , name2:"lastname"}
//     console.log(obj);
//     obj.name1 = "lastname"
//     console.log(obj);
// }





