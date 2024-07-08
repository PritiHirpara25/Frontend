/* Javascript String Method */

/* Javascript string.slice() Method */

// The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

// slice(indexStart)
// slice(indexStart , indexEnd)

{
    // let str = 'This is Javascript String Method!'
    //            012345678901234567890123456789012

    // let result = str.slice(3)
    // console.log(result);

    // let result1 = str.slice(10 , -10)
    // console.log(result1);
}

/* Javascript string.substring() Method */

// The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

// substring(indexStart)
// substring(indexStart, indexEnd)

{
    // let str = 'This is Javascript string method!'
    //            012345678901234657890123456789012

    // let result = str.substring(5)
    // console.log(result);

    // let result1 = str.substring(5 , 10);
    // console.log(result1);
}

/* Javascript string.concat() Method */

// The concat() method of String values concatenates the string arguments to this string and returns a new string.

// concat()
// concat(str1)
// concat(str1, str2)
// concat(str1, str2, /* …, */ strN)

{
    // let str1 = "this"
    // let str2 = "is Javascript"
    // let str3 = "string Method!"

    // let result = str1.concat(str2)
    // console.log(result)


    // let result1 = str1.concat(str2 , str3)
    // console.log(result1)
}

/* Javascript string.startsWith() / string.endsWith() */

// The startsWith() method of String values determines whether this string begins with the characters of a specified string, returning true or false as appropriate.

// The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.

// endsWith(searchString)
// endsWith(searchString, endPosition)

// startsWith(searchString)
// startsWith(searchString, position)

{
    // let str = ' This is Javascript string Method! '
    //           01234567890123456789012345678901234

    // let result = str.startsWith(' ')
    // console.log(result);

    // let result1 = str.startsWith(' ' , 20)
    // console.log(result1);

    // let result3 = str.endsWith(' ')
    // console.log(result3);

    // let result4 = str.endsWith(' ' , 33)
    // console.log(result4);
}

/* Javascript string.indexOf() / string.lastIndexOf()  */

// The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

// indexOf(searchString)
// indexOf(searchString, position)


// The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring. It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number.

// lastIndexOf(searchString)
// lastIndexOf(searchString, position)

{
    // let str = 'hi , I am Javascript am!'
    //            012345678901234567890123

    // let result1 = str.indexOf('am')
    // console.log(result1)

    // let result2 = str.indexOf('am' , 8)
    // console.log(result2)

    // let result1 = str.lastIndexOf('am')
    // console.log(result1)

    // let result2 = str.lastIndexOf('am' , 20)
    // console.log(result2)
}

/* Javascript string.padStart() / string.padEnd() */

// The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.

// padStart(targetLength)
// padStart(targetLength, padString)

// The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string.

// padEnd(targetLength)
// padEnd(targetLength, padString)

{
    // let str = 'this is padstart method'
    //            12345678901234567890123

    // let result1 = str.padStart(28 , '01');
    // console.log(result1)

    // let result2 = str.padEnd(28 , '01');
    // console.log(result2)
}

/* Javascript string.repeat() Method */

// The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.

// repeat(count)

{
    // let str = 'Hello'
    // let result = str.repeat(10)
    // console.log(result)
}

/* Javascript string.toUppercase() / string.toLowercase Method */

{
    // let str = 'Hello'

    // let result1 = str.toLocaleLowerCase()
    // let result11 = str.toLowerCase()
    // console.log(result1)
    // console.log(result11)

    // let result2 = str.toLocaleUpperCase()
    // let result22 = str.toUpperCase()
    // console.log(result2)
    // console.log(result22)
}

/* Javascript string.split() Method */

// The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

// split(separator)
// split(separator, limit)

{
    // let str = 'Hello'
    // let result = str.split('' , 2)
    // console.log(result)
}

/* Javascript str.valueOf() Method */

// The valueOf() method of String values returns this string value.

// valueOf()

{
    // let str1 = 'Hello'
    // let str2 = new String('Hello')

    // let result = str1.valueOf()
    // console.log(result)
    // console.log(typeof result)

    // let result2 = str2.valueOf()
    // console.log(result2)
    // console.log(typeof result2)

    // console.log(typeof str1)
    // console.log(typeof str2)
}



