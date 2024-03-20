

// Task 1 


function noSpace(str) {
    return str.trim().split(' ').join('');
}


console.log(noSpace("")); 
console.log(noSpace("Javascript")); 	
console.log(noSpace("    Hello   "));  
console.log(noSpace(" Hello World   ")) 
console.log(noSpace("Tech Global")) 	




// Task 2 


function replaceFirstLast(str) {
    str = str.trim();

    if (str.length < 2) {
        return "";
    } else {
        return str.charAt(str.length - 1) + str.substring(1, str.length - 1) + str.charAt(0);
    }
}

console.log(replaceFirstLast(""));           
console.log(replaceFirstLast("Hello"));      
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"));          
console.log(replaceFirstLast("    A    "));  





// Task 3 



function hasVowel(str) {
    str = str.toLowerCase();
    
    for (let i = 0; i < str.length; i++) {
        if ('aeiou'.indexOf(str[i]) !== -1) {
            return true; 
        }
    }
    
    return false;
}

console.log(hasVowel("")); 
console.log(hasVowel("Javascript")); 
console.log(hasVowel("Tech Global")); 
console.log(hasVowel("1234")); 
console.log(hasVowel("ABC")); 



// Task 4 

function checkAge(yearOfBirth) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearOfBirth;

    if (age < 16) {
        return "AGE IS NOT ALLOWED";
    } else if (age >= 16 && age <= 120) {
        return "AGE IS ALLOWED";
    } else if (age > 120 || yearOfBirth > currentYear) {
        return "AGE IS NOT VALID";
    }
}

console.log(checkAge(2015)); 
console.log(checkAge(2007)); 
console.log(checkAge(2050)); 
console.log(checkAge(1920)); 
console.log(checkAge(1800)); 








// Task 5 

function averageOfEdges(a, b, c) {
    const min = Math.min(a, b, c);
    const max = Math.max(a, b, c);
    
    const average = (min + max) / 2;
    
    return average;
}

console.log(averageOfEdges(0, 0, 0));     
console.log(averageOfEdges(0, 0, 6));     
console.log(averageOfEdges(-2, -2, 10));  
console.log(averageOfEdges(-3, 15, -3));  
console.log(averageOfEdges(10, 13, 20));  






// Task 6 



function noA(array) {
    return array.map(element => {
        if (element.toLowerCase().startsWith('a')) {
            return '###';
        } else {
            return element;
        }
    });
}
console.log(noA(["javascript", "hello", "123", "xyz"])); 
console.log(noA(["apple", "123", "ABC", "javascript"])); 
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));




// Task 7 


function no3and5(arr) {
    return arr.map(function(num) {
        if (num % 3 === 0 && num % 5 === 0) {
            return 101;
        } else if (num % 3 === 0) {
            return 100;
        } else if (num % 5 === 0) {
            return 99;
        } else {
            return num;
        }
    });
}

console.log(no3and5([7, 4, 11, 23, 17])); 
console.log(no3and5([3, 4, 5, 6])); 
console.log(no3and5([10, 11, 12, 13, 14, 15])); 





// Task 8 



function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function countPrimes(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 1 && isPrime(arr[i])) {
            count++;
        }
    }
    return count;
}

console.log(countPrimes([-10, -3, 0, 1])); 
console.log(countPrimes([7, 4, 11, 23, 17])); 
console.log(countPrimes([41, 53, 19, 47, 67])); 




// Task 9 



function removeDuplicates(array) {
    return array.filter((value, index, self) => self.indexOf(value) === index);
}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])); 
console.log(removeDuplicates([1, 2, 5, 2, 3])); 
console.log(removeDuplicates([0, -1, -2, -2, -1])); 
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"])); 






// Task 10 





function isDateFormatValid(dateString) {
    if (dateString.trim() === "") {
        return false;
    }
    
    const date = new Date(dateString);
    
    return !isNaN(date.getTime()) && dateString === formatDate(date);
}

function formatDate(date) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

console.log(isDateFormatValid(""));          
console.log(isDateFormatValid("15/30/2020")); 
console.log(isDateFormatValid("10-30-2020")); 
console.log(isDateFormatValid("10.30.2020")); 
console.log(isDateFormatValid("5/30/2020"));  
console.log(isDateFormatValid("05/30/2020")); 
console.log(isDateFormatValid("10/2/2020"));  
console.log(isDateFormatValid("10/02/2020")); 






// Task 11 





function secondMax(arr) {
    arr.sort((a, b) => b - a);
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return arr[i];
        }
    }
    
    return arr[0];
}

console.log(secondMax([7, 4, 4, 4, 23, 23, 23])); 
console.log(secondMax([3, 4, 5, 6]));            
console.log(secondMax([10]));                    




// Task 12 




function secondMin(arr) {
    arr.sort((a, b) => a - b);
    
    let uniqueArr = arr.filter((value, index, self) => self.indexOf(value) === index);
    
    return uniqueArr.length > 1 ? uniqueArr[1] : uniqueArr[0];
}

console.log(secondMin([7, 4, 4, 4, 23, 23, 23])); 
console.log(secondMin([3, 4, 5, 6])); 
console.log(secondMin([10])); 






// Task 13 


function mostRepeated(arr) {
    const counts = new Map();
    
    arr.forEach(element => {
        counts.set(element, (counts.get(element) || 0) + 1);
    });
    
    let mostRepeatedElement;
    let maxCount = 0;
    counts.forEach((count, element) => {
        if (count > maxCount) {
            mostRepeatedElement = element;
            maxCount = count;
        }
    });
    
    return mostRepeatedElement;
}

console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])); 
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])); 
console.log(mostRepeated([10])); 
console.log(mostRepeated(["TechGlobal"]));

