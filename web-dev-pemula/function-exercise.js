/* EXERCISES (Check answers on line 45)

Create a function to:
1) check whether it is odd or even

[Modular Funcion]
2.1) Converts sentences to array
2.2) Counts the number of elements of an array
example: 
2.1) splitToArray("Hello, Good Morning!") -> ["Hello,", "Good", "Morning!"]
2.1) countElement("Hello, Good Morning!") -> 3

3) Check is the length of password between 8 and 16
so make a function to:
- count the number of character
- check is the length of password between 8 and 16
example:
password : 12345 -> "Enter a password between 8 and 16 characters"
password : qwertyuiop -> "Password accepted"

*/

// Code here





















// Answers
// 1
function checkOddEven(num) {
    if(num % 2 == 0) {  //even
        console.log("Even");
    } else {  //odd
        console.log("Odd");
    }
}
checkOddEven(5);
checkOddEven(4);
// 2
function splitToArray(str) {
    return str.split(" ");
}
function countElm(str) {
    let arr = splitToArray(str);
    return arr.length;
}
console.log(countElm("Hello, Good Morning!"));
// 3
function countChar(str) {
    return str.length;
}
function isValidPassword(pwd) {
    if(countChar(pwd) >= 8 && countChar(pwd) <= 16) {  //password between 8 and 16 characters
        return "Password accepted";
    } else {  //password is not between 8 and 16 characters
        return "Enter a password between 8 and 16 characters";
    }
}
console.log(isValidPassword("12345"))
console.log(isValidPassword("qwertyuiop"));