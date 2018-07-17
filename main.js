// Algorithms for Front-End Development

// Challenge 1: Reverse a string
//ex: "hello" === "olleh"

//solution 1
function reverseString(strInput) {
    return strInput.split('').reverse().join('');
}

console.log(reverseString("hello"));

// solution 2

function reverString2(strInput) {
    let revString = "";
    for (let i = strInput.length - 1; i >= 0; i--) {
        revString = revString + strInput[i];
    }
    return revString;
}

console.log(reverString2("hello"));

//solution 3

function reverString3(strInput) {
    let revString = "";
    for (let char of strInput ) {
        revString = char + revString;
    }
    return revString;
}

console.log(reverString3("hello"));

//solution 4

function reverString4(strInput) {
    let revString = "";
    strInput.split('').forEach(char => {
        revString = char + revString; 
    });
    return revString;
}

console.log(reverString4("hello"));

//solution 5

function reverString5(strInput) {
    return strInput.split("").reduce((revString, char) => {
        return char + revString;
    }, "");
}

console.log(reverString5("hello"));

// Challenge 2: Validate a palidrome 
// ex: racecar === true, hello === false 

function isPalidrome(strInput) {
    return strInput.split("").reduce((revString, char) => {
        return char + revString;
    }, "");
}
console.log(isPalidrome("racecar") === "racecar" ? "true" : "false");

console.log(isPalidrome("hello") === "hello" ? "true" : "false");

console.log(isPalidrome("madam") === "madam" ? "true" : "false");

// Challenge 3: Reverse an integer

function revInt(intInput) {
    let intOutput = intInput.toString().split("").reduce((revString, char) => {
        return char + revString;
    }, "");
    return parseInt(intOutput)*Math.sign(intInput);
}
console.log(revInt(-123));
console.log(revInt(100000));

// Challenge 4: capitalize letters
// return the string that the first letter of every word capitalized
// ex: "i love you" ==> "I Love You"

//solution 1
function capitalizeLetter(strInput) {
    let strArray = strInput.toLowerCase().split(' ');
    for (let i = 0; i < strArray.length; i++) {
        strArray[i] = strArray[i].substring(0, 1).toUpperCase() + strArray[i].substring(1);
    }
    return strArray.join(' ');
}

console.log(capitalizeLetter("i love you, javascript"));

//solution 2
function capitalizeLetter2(strInput) {
    return strInput.toLowerCase().split(' ').map(word => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(' ');
}
console.log(capitalizeLetter2("i love you, javascript"));

//solution 3
function capitalizeLetter3(strInput) {
    return strInput.replace(/\b[a-z]/gi, (char) => {
        return char.toUpperCase();
    });
}
console.log(capitalizeLetter3("i love you, javascript"));

//Challenge 5: max character
// return the most common character of a given string

function maxCharacter(strInput) {
    const charMap = {};
    let maxNum = 0, maxChar = '';
    strInput.split('').forEach((char) => {
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    });

    for(let char in charMap) {
        // debugger;
        if (charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

console.log(maxCharacter("javascript"));
console.log(maxCharacter("iiiiaaaaa"));

//Challenge 6: FizzBuzz
// write a program that prints all numbers from 1 to 100. For more details, multiples of 3, instead of numbers, print "Fizz", and for multiples of 5 print "Buzz". For numbers are multiples of both 3 and 5, print "FizzBuzz". 

function printFizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        console.log((i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "") || i);
    }
}

printFizzBuzz();