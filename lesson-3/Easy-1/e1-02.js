// How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

//

str1.endsWith('!')
str1[str1.length - 1] === '!'
str1.slice(-1) === '!'
