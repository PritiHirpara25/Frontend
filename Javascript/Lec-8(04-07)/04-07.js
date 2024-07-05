/* Javascript Break and Continue Statement */

/* Break statement */

{
    // for(i = 0 ; i <= 10 ; i++)
    // {
    //     if(i == 6){
    //         break;
    //     }
    //     console.log('Break Loops');
    // }
}

/* Continue Statement */

{
    // for(i =0; i < 10; i++){
    //     if(i == 6){
    //         continue;
    //     }
    //     console.log('Break Loops')
    // }
}

/* Nested Loop */

{
    demo:for(i = 0 ; i < 10 ; i++){
        if(i == 5){
            break demo;
        }
        console.log('Main Loop');
        for(i = 0 ; i < 4 ; i++){
            if(i < 2){
                continue;
            }
            console.log('Child Loop')
        }
    }
}

/* CallBack Function */

// {
//     function sum(a,b,Callback){
//         Callback()
//         return a + b;
//     }
    
//     function Callback(){
//         console.log('This is callBack Function');
//     }

//     console.log(sum(20 , 30 , Callback));
// }

{
    // function sum(a,b){
    //     function Callback(){
    //         console.log('This is callBack Function');
    //     }
    //     Callback()
    //     // a + b;
    // }
    

    // console.log(sum(20 , 30));
}

/* IIFE */ /* Immediately Invoke Function Expression */

// {
//     (function(){
//         console.log("Hello IIFE");
//     })()
// }

// const fun = (() => console.log('IIFE'))()

// (function(name){
//     console.log(name)
// })('Hello World!')

/* Javascript String Methods */

/* String Prototypes */

/* Javascript String.trim() */

/*

trim() / trimStart() / trimEnd()

The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

//trim()

The trimStart() method of String values removes whitespace from the beginning of this string and returns a new string, without modifying the original string. trimLeft() is an alias of this method.

//trimStart()

The trimEnd() method of String values removes whitespace from the end of this string and returns a new string, without modifying the original string. trimRight() is an alias of this method.

//trimEnd()

*/

// {
//     let str = '   This is Javascript String Methods!   '
//                1234567890123456789012345678901234567890
//                0123456789012345678901234567890123456789  

//     console.log(str.length);

//     let str1 = str.trim()
//     console.log(str1);
//     console.log(str1.length);

//     let str2 = str.trimStart()
//     console.log(str2);
//     console.log(str2.length);

//     let str3 = str.trimEnd()
//     console.log(str3);
//     console.log(str3.length);

// }

/* Javascript String.chatAt() / String.charcodeAt() Method */

/*

The charAt() method of String values returns a new string consisting of the single UTF-16 code unit at the given index.

The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

charAt(index)
charCodeAt(index)

*/

// {
//     let str = '   This is Javascript String Methods!   '
//                1234567890123456789012345678901234567890
//                0123456789012345678901234567890123456789  

//     let char1 = str.charAt(11)
//     console.log(char1);

//     let char2 = str.charCodeAt(12)
//     console.log(char2)
// }

/* Javascript String.at() Method */

// The at() method of String values takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset. This method allows for positive and negative integers. Negative integers count back from the last string character.

// at(index)

{
    // let str = 'hello Javascript!'
    //            01234567890123456
    //            76543210987654321

    // let At = str.at(-5)
    // console.log(At)
}


/* Javascript String.includes() Method */

// The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.

// includes(searchString)
// includes(searchString, position)

// {
//     let str = 'Javascript string include!'
//                01234567890123456789012345

//     let Include = str.includes('a');
//     console.log(Include);

//     let Include1 = str.includes('s' , 10)
//     console.log(Include1);
// }

