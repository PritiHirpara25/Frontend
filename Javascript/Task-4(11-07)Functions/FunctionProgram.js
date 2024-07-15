/* 1. Write a program to convert temperatures between Celsius and Fahrenheit. */

// let celcius = parseFloat(prompt("Enter a Celcius:"));
// let fahrenheit;
// function hello() {
//     fahrenheit = (1.8 * celcius) + 32;
//     console.log(fahrenheit);
// }
// hello();

/* 2. Write a program that acts as a simple calculator performing addition, subtraction, multiplication, and division. */

// console.log("This is a Calculater You can Addtion , Substraction , Multiplication , Division.");
// let operator = prompt('Enter operation to perform: ')
// let a = parseFloat(prompt("Enter First Number"));
// let b = parseFloat(prompt("Enter Second Number"));
// function Addition(){
//     console.log(a + b);
// }
// function Substraction(){
//     console.log(a - b);
// }
// function Multiplication(){
//     console.log(a * b);
// }
// function Division(){
//     console.log(a / b);
// }
// switch(operator){
//     case '+' : Addition();
//     break;
//     case '-' : Substraction();
//     break;
//     case '*' : Multiplication();
//     break;
//     case '/' : Division();
//     break;
//     default : console.log("Invalid");
// }


/* 3. Write a program to find the largest of three numbers. */

// (function largest(a,b,c){
//     if(a > b && a > c){
//         console.log("A is Large");
//     }
//     else if(b > a && b > c){
//         console.log("B is Large");
//     }
//     else{
//         console.log("C is Large");
//     }
// })(20,30,10)


/* 4. Write a program to find the factorial of a given number. */

// function factorial(n,i,fact){
// do{
//     fact = fact * i;
//     i++;
// }while(i <= n);
// console.log(`the Factorial Number of ${n} is`,fact);
// }
// factorial(6,1,1);


/* 5. Write a program to print the first n terms of the Fibonacci sequence. */

// (function fibbonacci(i,n,a,b,p){
// for(i ; i <= n; i++){
//     p = a + b;
//     a = b;
//     b = p;
//     console.log(p)
// }
// })(0,10,0,1)

/* 6. Write a program to reverse a given string. */ 

// function reversestr(current,reverse,i){
// for(i = current.length - 1; i >= 0 ; i--){
//     reverse += current[i];
// }
// console.log(`${reverse}`);
// }
// reversestr("Hello World!",'')

/* 7. Write a program to check if a string is a palindrome. */

// let palindrome = (str) =>{
//     for(let i = 0;i<str.length/2 ; i++)
//     {
//         if(str[i]!==str[str.length-1-i]){
//             console.log("not palindrome")
//         }
//         else{
//             console.log("palindrome");
//         }
//     }
// }

// palindrome("syu");


/* 8. Write a program to find the sum of the first n natural numbers. */

// let x = 1;
// let sum = 0;
// function sumnumber(x,sum){
// for(x ; x <= 10 ; x++){
//     sum += x;
// }return sum
// }
// let c = sumnumber(1,0)
// console.log(c)

/* 9. Write a simple guessing game where the user has to guess a number between 1 and 10. */

// let number = prompt("Select Number:");
// function game(){
// switch(number){
//     case '1' : console.log("1");
//     break;
//     case '2' : console.log("2");
//     break;
//     case '3' : console.log("3");
//     break;
//     case '4' : console.log("4");
//     break;
//     case '5' : console.log("5");
//     break;
//     case '6' : console.log("6");
//     break;
//     case '7' : console.log("7");
//     break;
//     case '8' : console.log("8");
//     break;
//     case '9' : console.log("9");
//     break;
//     case '10' : console.log("10");
//     break;
//     default : console.log("Invalid..")
// }
// }
// game()

/* 10. Write a program to count the number of vowels and consonants in a given string. */

// let vowel = (str,i) =>{
//     for(i ; i < str.length ; i++){
//         if(str[i] == 'A'  || str[i] == 'E'  || str[i] == 'I'  || str[i] == 'O'  || str[i] == 'U'  || str[i] == 'a'  || str[i] == 'e'  || str[i] == 'i'  || str[i] == 'o' || str[i] == 'u'){
//             console.log(`i = ${str[i]}`);
//         }
//     }
// }
// vowel("Hello World",0);



/* 11. Write a program to check if a year is a leap year or not. */

// (function leapyear(year)
// {
//     if(year %4 == 0){
//         console.log("Leap year")
//     }
//         else{
//             console.log("Not Leap year");
//         }
// })(2023)

