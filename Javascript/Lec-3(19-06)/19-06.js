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


/* Javascript Opeartors */

/* arithmetic operator */
/* conditional operator */
/* assignment operator */
/* bitwise operator */
/* logical operator */
/* ternory opearator */

/* arithmetic operator */

/* Addition */

// {
//     let x = 10
//     let y = 20
//     let z = x + y

//     console.log(z)
// }

/* substraction */

// {
//     let x = 10
//     let y = 20
//     let z = x - y
    
//     console.log(z)
// }

/* multiplication */

// {
//     let x = 10
//     let y = 20
//     let z = x * y
    
//     console.log(z)
// }

/* divison */

// {
//     let x = 10
//     let y = 20
//     let z = x / y
    
//     console.log(z)
// }

/* modulus */

// {
//     let x = 10
//     let y = 20
//     let z = x % y
    
//     console.log(z)
// }

/* Expontiation */

// {
//     let x = 4
//     let y = 2      
//     let z = x ** y   //4 x 4 = 16
    
//     console.log(z)
// }


/* conditional operator */

/* Equal to */

// {
//     let x = 10
//     let y = 20
//     let z = x = y

//     console.log(z)
// }

/* Equality operator */  /* compare of value */

// {
//     let x = 10
//     let y = '20'
//     let z = x == y

//     console.log(z)
// }

// {
//     let xx = true
//     let yy = 'false'
//     let zz = xx == yy

//     console.log(zz)
// }

/* strict equality operator */   /* compare value and datatype */

// {
//     let x = 10
//     let y = 10
//     let z = x == y

//     console.log(z)
// }

/* Not eqaul operator */

// {
//     let x = 10
//     let y = 20
//     let z = x != y

//     console.log(z)
// }

/* Not strict eqaulity operator */

// {
//     let x = '10'
//     let y = 10
//     let z = x !== y

//     console.log(z)
// }

/* Less than */

// {
//     let x = 10
//     let y = 20
//     let z = x < y

//     console.log(z)
// }

/* Less than or eqaul to */

// {
//     let x = 20
//     let y = 20
//     let z = x <= y

//     console.log(z)
// }

/* Grether than */

// {
//     let x = 20
//     let y = 20
//     let z = x > y

//     console.log(z)
// }

/* Grether than or equal to*/

// {
//     let x = 20
//     let y = 20
//     let z = x >= y

//     console.log(z)
// }