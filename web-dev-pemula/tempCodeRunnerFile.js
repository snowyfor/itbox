// 3
function countChar(str) {
    return str.length;
}
function isValidPassword(pwd) {
    if(countChar(pwd) >= 8 && countChar(pwd) <= 16) {
        return "Password accepted";
    } else {
        return "Enter a password between 8 and 16 characters";
    }
}
console.log(isValidPassword("12345"))
console.log(isValidPassword("qwertyuiop"));