/* Javascript Statemets */

/*

if statement
if ...else statement
if ...else if statement
Switch statement

*/

// The if...else statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.

// if (condition)
//     statement1
  
//   // With an else clause
//   if (condition)
//     statement1
//   else
//     statement2

// condition
// An expression that is considered to be either truthy or falsy.

// statement1
// Statement that is executed if condition is truthy. Can be any statement, including further nested if statements. To execute multiple statements, use a block statement ({ /* ... */ }) to group those statements. To execute no statements, use an empty statement.

// statement2
// Statement that is executed if condition is falsy and the else clause exists. Can be any statement, including block statements and further nested if statements.
  
/* Icecream Production */

// let RowMaterial = 'Milk'
// let Storage = false
// let Production = true
// let Blending = true
// let Pasteurization = true
// let Addingflavor = 'chocolate'
// let Freezing = true

// if(RowMaterial == 'Milk'){
//     console.log('Icecream Ready For Production !');
// }else{
//     console.log('Production Off');
// }

// if(RowMaterial == 'Milk'){
//     console.log('Icecream Ready For Production !');
// }else if(Production == true){
//     console.log('Icecream Production has been started');
// }else if(Blending == true){
//     console.log('Icecream Production Blending Mode has been started');
// }else if(Pasteurization == true){
//     console.log('Icecream Production Pasteurization Mode has been started');
// }else if(Addingflavor == 'Mango'){
//     console.log('Icecream Production Mango Flavor has been started');
// }else if(Freezing == true){
//     console.log('Icecream Production Frezzing Mode has been started');
// }


// if(RowMaterial == 'Milk'){
//     console.log('Icecream Ready For Production !');
//     if(Production == true){
//         console.log('Icecream Production has been started');
//         if(Blending == true){
//             console.log('Icecream Production Blending Mode has been started');
//             if(Pasteurization == true){
//                 console.log('Icecream Production Pasteurization Mode has been started');
//                 if(Addingflavor == 'chocolate'){
//                     console.log('Icecream Production Mango Flavor has been started');
//                     if(Freezing == true){
//                         console.log('Icecream Production Frezzing Mode has been started');
//                     }   
//                 }
//             }
//         }
//     }
// }


/* Switch Case Statement */

// The switch statement evaluates an expression, matching the expression's value against a series of case clauses, and executes statements after the first case clause with a matching value, until a break statement is encountered. The default clause of a switch statement will be jumped to if no case matches the expression's value.

// switch (expression) {
//     case caseExpression1:
//       statements
//     case caseExpression2:
//       statements
//     // …
//     case caseExpressionN:
//       statements
//     default:
//       statements
// }

// let Subject = 'chemistry'

// switch(Subject){
//     case 'physics' : console.log('Physics Books');
//     break;
//     case 'maths' : console.log('maths Books');
//     break;
//     case 'chemistry' : console.log('chemistry Books');
//     break;
//     case 'hostory' : console.log('history Books');
//     break;
//     case 'english' : console.log('english Books');
//     break;
//     default : console.log('No match Books');
// }


// let Subject = 'chemistry'

// switch(Subject){
//     case 'physics' :() => {
//         return console.log('Physics Books');
//     }
//     case 'maths' :() => {
//         return console.log('maths Books');
//     }
//     case 'chemistry' :() => {
//         return console.log('chemistry Books');
//     }
//     case 'hostory' :() => {
//         return console.log('history Books');
//     }
//     case 'english' :() => {
//         return console.log('english Books');
//     }
//     default :() => {
//         return console.log('No match Books');
//     }
// }


  
