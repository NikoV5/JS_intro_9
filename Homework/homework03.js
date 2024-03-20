// Task 1 

const {generateRandomNumber} = require('../utilities/MathHelper');
let r1 = generateRandomNumber(1, 100);
let r2 = generateRandomNumber(1, 100);
let r3 = generateRandomNumber(1, 100);
let avg = (r1 + r2 + r3)/3

console.log(`${r1}, ${r2}, ${r3}`);
if (avg >= 50) {
console.log('true');
}
else {
console.log('false');
}




// Task 2 

const {generateRandomNumber} = require('../utilities/MathHelper');
let r4 = generateRandomNumber(1, 3);
let r5 = generateRandomNumber(1, 3);
let r6 = generateRandomNumber(1, 3);

console.log(`${r4}, ${r5}, ${r6}`);

if (r4 !== r5 && r5 !== r6 && r4 !== r6) {
    console.log('NO MATCH');
}
else if (r4 === r5 && r5 === r6) {
    console.log('TRIPLE MATCH');
}
else {
    console.log('DOUBLE MATCH');
}




// Task 3 

function hasA(word) {
    return word.toLowerCase().includes('a') || word.includes('A')
}
console.log(hasA('Tech'));
console.log(hasA('Global'));
console.log(hasA(''));
console.log(hasA('Apple'));




// Task 4 

function doubleOrTripleWord(word) {
    if (word.length % 2 === 0) {
        return word.repeat(3);
    } else {
        return word.repeat(2);
    }
}
console.log(doubleOrTripleWord('Tech'));
console.log(doubleOrTripleWord('Apple'));
console.log(doubleOrTripleWord(''));
console.log(doubleOrTripleWord(' '));
console.log(doubleOrTripleWord('1'));
console.log(doubleOrTripleWord('22'));




// Task 5 

function firstWord(word) {
    word = word.trim();
    words = word.split(' ');
    if (words.length > 0) {
        return words[0];
    }
    else {
        return ''
    }
}
console.log(firstWord('Hello World'));
console.log(firstWord('I like JavaScript'));
console.log(firstWord('Hello'));
console.log(firstWord(''));
console.log(firstWord(' '));




// Task 6 

function lastWord(word) {
    word = word.trim();
    let words = word.split(' ');
    if (words.length === '') {
        return '';
    }
    else {
        return words[words.length - 1];
    }
}
console.log(lastWord('Hello World'));
console.log(lastWord('I like JavaScript'));
console.log(lastWord('Hello'));
console.log(lastWord(''));
console.log(lastWord(' '));





// Task 7 

function firstlastWord(word) {
    const wordsArray = word.trim().split(' ');

    if (wordsArray.length === 0) {
        return "";
    }

    const firstWord = wordsArray[0];
    const lastWord = wordsArray[wordsArray.length - 1];

    return firstWord + lastWord;
}
console.log(firstlastWord("Hello World")); 
console.log(firstlastWord("I like JavaScript")); 
console.log(firstlastWord("Hello")); 
console.log(firstlastWord("")); 
console.log(firstlastWord(" ")); 




// Task 8 

function startVowel(word) {
    if (typeof word !== 'string' || word.length === 0) {
        return false;
    }
    
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const firstChar = word.trim()[0]; 
    
    return vowels.includes(firstChar); 
}
console.log(startVowel("Hello"));    
console.log(startVowel("Apple"));  
console.log(startVowel("orange"));   
console.log(startVowel(""));         
console.log(startVowel(" "));    
console.log(startVowel("123"));      





// Task 9 

function swap4(word) {
    if (word.length < 8) {
        return "";
    } else {
        return word.slice(-4) + word.slice(4, -4) + word.slice(0, 4);
    }
}
console.log(swap4("abc"));           
console.log(swap4("JavaScript"));    
console.log(swap4("TechGlobal"));    
console.log(swap4(""));              
console.log(swap4(" "));          
console.log(swap4("Apple"));         




// Task 10 
       
function swapFirstLastWord(strWord) {
    firstWord = strWord.trim().split(' ')[0];
    lastWord = strWord.trim().slice(strWord.trim().lastIndexOf(' ') + 1);
    middleWord = strWord.trim().slice(strWord.trim().indexOf(' '), strWord.trim().lastIndexOf(' ') + 1);
    if (strWord.trim().split(' ').length < 2) console.log('');
    else console.log(lastWord + middleWord + firstWord);
}
    swapFirstLastWord("Hello World");
    swapFirstLastWord("I like JavaScript");
    swapFirstLastWord("foo bar foo bar");
    swapFirstLastWord("");
    swapFirstLastWord("    ");
    swapFirstLastWord("Hello");
    swapFirstLastWord("Hello   ");