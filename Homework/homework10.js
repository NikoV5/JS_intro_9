

// Task 1 

function calculateTotalPrice1(items) {
    const prices = {
        apple: 2.00,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25
    };

    let totalPrice = 0;
    for (const item in items) {
        if (prices.hasOwnProperty(item)) {
            totalPrice += prices[item] * items[item];
        }
    }

    return totalPrice.toFixed(2);
}

console.log(calculateTotalPrice1({ apple: 3, mango: 1 })); 
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 })); 
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 })); 
console.log(calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango: 1 })); 



// Task 2 

function calculateTotalPrice2(items) {
    const prices = {
        Apple: 2.00,
        Orange: 3.29,
        Mango: 4.99,
        Pineapple: 5.25
    };

    let totalPrice = 0;

    for (const item in items) {
        switch (item) {
            case 'Apple':
                totalPrice += (items[item] - Math.floor(items[item] / 2)) * prices[item];
                break;
            case 'Mango':
                totalPrice += ((items[item] - Math.floor(items[item] / 4)) * prices[item]);
                break;
            default:
                totalPrice += items[item] * prices[item];
        }
    }

    return totalPrice.toFixed(2);
}
console.log(calculateTotalPrice2({ Apple: 3, Mango: 5 })); 
console.log(calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 })); 
console.log(calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 })); 
console.log(calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango: 3 }));




// Task 3 

function nthWord(str, n) {
    const words = str.split(" ");
    
    if (n <= words.length && n > 0) {
        return words[n - 1];
    } else {
        return "";
    }
}

console.log(nthWord("I like programming languages", 2)); 
console.log(nthWord("QA stands for Quality Assurance", 4)); 
console.log(nthWord("Hello World", 3)); 
console.log(nthWord("Javascript", 1)); 
console.log(nthWord("", 1));



// Task 4 

function isArmstrong(number) {
    const numString = number.toString();
    const numDigits = numString.length;
    
    let sum = 0;
    for (let digit of numString) {
        sum += Math.pow(parseInt(digit), numDigits);
    }
    
    return sum === number;
}
console.log(isArmstrong(153));  
console.log(isArmstrong(123));   
console.log(isArmstrong(1634));  
console.log(isArmstrong(1111));  




// Task 5 

function reverseNumber(num) {
    let reversed = 0;

    while (num !== 0) {
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }

    return reversed;
}
console.log(reverseNumber(371));  
console.log(reverseNumber(123));   
console.log(reverseNumber(12));   
console.log(reverseNumber(0));    
console.log(reverseNumber(111));   



// Task 6 

function doubleOrTriple(arr, isDouble) {
    return arr.map(function(num) {
        return isDouble ? num * 2 : num * 3;
    });
}
console.log(doubleOrTriple([1, 5, 10], true)); 
console.log(doubleOrTriple([3, 7, 2], false)); 
console.log(doubleOrTriple([-1, -2], true)); 
console.log(doubleOrTriple([0], false)); 
console.log(doubleOrTriple([-1, 0, 1], true)); 



// Task 7 

function splitString(str, num) {
    if (str.length < num || str.length % num !== 0) {
        return "";
    }

    let result = "";
    for (let i = 0; i < str.length; i += num) {
        result += str.slice(i, i + num) + " ";
    }

    return result.trim();
}

console.log(splitString("JavaScript", 5));    
console.log(splitString("Java", 2));          
console.log(splitString("Automation", 3));   
console.log(splitString("Hello", 6));      
console.log(splitString("12", 1));          

