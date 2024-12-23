// 1
function checkPrime(num) {
    for(let i = 2; i < num; i++) {
        if(num % i == 0) return false;
    }
    return true;
}
// 2
function changeToCapital(str) {
    return str.toUpperCase();
}
// 3
function minMaxValue(arrOfNumber) {
    let minValue = arrOfNumber[0];
    let maxValue = arrOfNumber[0];

    for(let i = 0; i < arrOfNumber.length; i++) {
        if(minValue > arrOfNumber[i]) {
            minValue = arrOfNumber[i];
        }
        if(maxValue < arrOfNumber[i]) {
            maxValue = arrOfNumber[i];
        }
    }
    
    return {
        min : minValue,
        max : maxValue
    };
}
// 4
function countVocal(str) {
    let result = {
        a : 0,
        i : 0,
        u : 0,
        e : 0,
        o : 0,
    }

    for(let i = 0; i < str.length; i++) {
        if(str[i] === 'a') {
            result.a++;
        } else if(str[i] === 'i') {
            result.i++;
        } else if(str[i] === 'u') {
            result.u++;
        } else if(str[i] === 'e') {
            result.e++;
        } else if(str[i] === 'o') {
            result.o++;
        }
    }

    return result;
}
// 5
function averageArr(arr) {
    let avg = 0;
    let total = 0;

    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    avg = total / arr.length;

    return avg;
}
function findAverageMax(arr2D) {
    let avgMax = 0;
    let avg;
    let index;

    for(let i = 0; i < arr2D.length; i++) {
        avg = averageArr(arr2D[i]);

        if(avg > avgMax) {
            avgMax = avg;
            index = i;
        }
    }

    return "The array at index " + (index+1) + " is the average max";
}

console.log(findAverageMax([
    [10,3,5,7,9],
    [5,6,4,1,2],
    [7,8,12,10,5]
]))

console.log("> checkPrime(5): " + checkPrime(5));
console.log("> checkPrime(9): " + checkPrime(9));
console.log("> changeToCapital(\"Hello World\"): " + changeToCapital("Hello World"));
console.log("> changeToCapital(\"JaVa ScrIpT\")): " + changeToCapital("JaVa ScrIpT"));
console.log("> minMaxValue([5, 9, 1])");
console.log(minMaxValue([5, 9, 1]));
console.log("> countVocal(\"You imagine ocean\")");
console.log(countVocal("You imagine ocean"));