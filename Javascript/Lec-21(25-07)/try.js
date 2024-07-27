// JavaScript try...catch...finally Statement

// The try, catch and finally blocks are used to handle exceptions (a type of an error).

// Types of Errors

// Syntax Error: Error in the syntax. For example, if you write consol.log('your result');, the above program throws a syntax error. The spelling of console is a mistake in the above code.

// Runtime Error: This type of error occurs during the execution of the program. For example,
// calling an invalid function or a variable.

// JavaScript try...catch Statement

{
    // // The try...catch statement is used to handle the exceptions. 
    // try {
    //     // body of try
    // } 
    // catch(error) {
    //     // body of catch  
    // }

    // // The main code is inside the try block. While executing the try block, if any error occurs, it goes to the catch block. The catch block handles the errors as per the catch statements.
}

// Display Undeclared Variable

{
    // // program to show try...catch in a program

    // const numerator= 100, denominator = 'a';

    // try {
    //     console.log(numerator/denominator);
    //     let a  = 1111;
    //     // forgot to define variable a      
    //     console.log(a);
    // }
    // catch(error) {
    //     console.log('An error caught'); 
    //     console.log('Error message: ' + error);  
    // }
}

// JavaScript try...catch...finally Statement

// You can also use the try...catch...finally statement to handle exceptions. The finally block executes both when the code runs successfully or if an error occurs.

{
    // try {
    //     // try_statements
    // } 
    // catch(error) {
    //     // catch_statements  
    // }
    // finally() {
    //     // codes that gets executed anyway
    // }
}

// try...catch...finally Example

{
    // const numerator= 100, denominator = 'a';

    // try {
    //     console.log(numerator/denominator);
    //     console.log(a);
    // }
    // catch(error) {
    //     console.log('An error caught'); 
    //     console.log('Error message: ' + error);  
    // }
    // finally {
    //     console.log('Finally will execute every time');
    // }

    // // You need to use catch or finally statement after try statement. Otherwise, the program will throw an error Uncaught SyntaxError: Missing catch or finally after try.
}

// JavaScript throw Statement

// The syntax of throw statement is

{
    // throw expression;
}

{
    // const number = 5;
    // throw number/0; // generate an exception when divided by 0
}

// JavaScript throw with try...catch

{
    // try {
    //     // body of try
    //     throw exception;
    // } 
    // catch(error) {
    //     // body of catch  
    // }
}

// try...catch...throw Example

{
    // const number = 10;
    // try {
    //     if(number > 50) {
    //         console.log('Success');
    //     }
    //     else {

    //         // user-defined throw statement
    //         throw new Error('The number is low');
    //     }

    //     // if throw executes, the below code does not execute
    //     console.log('hello');
    // }
    // catch(error) {
    //     console.log('An error caught'); 
    //     console.log('Error message: ' + error);  
    // }
}

// Rethrow an Exception

{
    // // You can also use throw statement inside the catch block to rethrow an exception.

    // const number = 5;
    // try {
    //     // user-defined throw statement
    //     throw new Error('This is the throw');

    // }
    // catch(error) {
    //     console.log('An error caught');
    //     if( number + 8 > 10) {

    //         // statements to handle exceptions
    //         console.log('Error message: ' + error); 
    //         console.log('Error resolved');
    //     }
    //     else {
    //         // cannot handle the exception
    //         // rethrow the exception
    //         throw new Error('The value is low');
    //     }
    // }
}