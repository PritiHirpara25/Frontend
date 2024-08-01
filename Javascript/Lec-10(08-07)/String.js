 /* Javascript String Method */

 /* javascript string.replace() / string.replaceAll() Method */

//  The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

// replace(pattern, replacement)

{
    // let str= 'This is a Dog and dog are very cute but Dog Sometimes Danger! and This is cat but cat is danger!'

    // console.log(str);

    // let regex1 = /dog/i;
    // let regex2 = /dog/g;

    // let Replace1 =str.replace(regex1 , 'cat')
    // let Replace2 =str.replace(regex2 , 'cat')

    // console.log(Replace1);   
    // console.log(Replace2);   
}

/* javascript string.replaceAll() Method */

// The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.

// replaceAll(pattern, replacement)

{
    // let str = 'This is a Dog and dog are very cute but Dog Sometimes Danger! and This is cat but cat is danger!'

    // let ReplaceAll = str.replaceAll('Dog' , 'cat')

    // console.log(ReplaceAll);
}

/* Javascript string.search() Method */

// The search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string.

// search(regexp)

{
    // let str = 'This is string Search Method!'

    // let Regex = /string/g

    // let Search = [str.search(Regex)]

    // console.log(Search);
}

{
    // let str = 'This is string search Method!'

    // let result = str.search('string')

    // console.log(result)
}

/* Javascript string.match() and String.matchAll() Method */

//The match() Method of string value retrieves the result of matching this string against a regular expression.

//The match() Method of string value returns an iterator of all results  matching this string against a regular expression, including capturing groups.

//match(regexp)
//matchAll(regexp)

// {
//     let Str = 'This is String Match Method!'

//     let regex = /[A-Z]/g

    // let Match = Str.match(regex)

    // let MatchAll = [...Str.matchAll(regex)]

    // console.log(Match);   //return Array

    // console.log(MatchAll);
// }

{
    // let str = 'This is string'

    // let str2 = [...str]

    // console.log(str2);
}