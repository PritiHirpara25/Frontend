/* 1. Write a JS function that reverse a number. 
Example x = 15438;
Expected Output : 83451 */ 

{
    // function reverseNum(num){
    //     // convert number into string
    //    let numStr = num.toString();
    //    // convert string into array
    //    // reverse the  array
    //    // all element of array join like string
    //    let reverseStr = numStr.split('').reverse().join('');
    //     // convert string into interger
    //    let reverseNumber = parseInt(reverseStr,10);
    //    return reverseNumber;
    // }
    // console.log(reverseNum(15438));
}

/* 2. Write a JS function that returns a passed string with letters in alphabetical order. 
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string. */

{
//     function sortStr(str){
//         str = str.toLowerCase();

//        let charArray = str.split('').sort().join('');
    
//        return charArray;
//     }

//     console.log(sortStr("Priti"));
}


/* 3. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox' */

{
    // function firstCharCapitalize(str){
    //     wordArray = str.split(' ');
    //     for(let i = 0; i < wordArray.length; i++){
    //         wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
    //     }

    //     capitalStr = wordArray.join(' ');

    //     return capitalStr;
        
    // }
    // console.log(firstCharCapitalize('javascript with a happiness'));
}
  

/* 4. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development' */

{
    // function longStr(str){
    //     let charArray = str.split(' ');
    //     let newArray = [];
    //     for(let i = 0; i < charArray.length; i++){
    //         newArray[i] = charArray[i].length;
    //     }

    //     let count = 0;
    //     for(let i = 0; i < newArray.length; i++){
    //         if(count < newArray[i]){
    //             count = newArray[i];
    //         }
    //     }

    //     for(let i = 0; i < newArray.length; i++){
    //         if(charArray[i].length == count){
    //             return charArray[i];
    //         }
    //     }
    // }
    // console.log(longStr('Hello Javascript'));
}
  

/* 5. Write a JavaScript function that checks whether a number is perfect. */

{
    // function perfectNumber(num){
    //     if(num <= 1){
    //         return false;
    //     }
    //     let sum = 0;
    //     for(let i = 1; i <= num / 2; i++){
    //         if(num % i == 0){
    //             sum += i;
    //         } 
    //     }
    //     return sum == num;
    // }
    // console.log(perfectNumber(8128));
}
