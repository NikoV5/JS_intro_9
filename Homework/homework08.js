
// task 1 

function hasLowerCase(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= 'a' && str[i] <= 'z') {
        return true;
      }
    }
    return false;
  }
  
console.log(hasLowerCase("")); 
console.log(hasLowerCase("JAVASCRIPT")); 
console.log(hasLowerCase("hello")); 
console.log(hasLowerCase("125$")); 
console.log(hasLowerCase("   a   ")); 
  



// task 2 

function noZero(arr) {
    return arr.filter(num => num !== 0);
}
console.log(noZero([1])); 
console.log(noZero([1, 1, 10])); 
console.log(noZero([0, 1, 10])); 
console.log(noZero([0, 0, 0])); 
console.log(noZero([10, 100, 0])); 




// task 3

function numberAndSquare(arr) {
    var result = [];
    
    for (var i = 0; i < arr.length; i++) {
        var squared = arr[i] * arr[i];
        
        result.push([arr[i], squared]);
    }
    
    return result;
}
console.log(numberAndSquare([1, 2, 3]));  
console.log(numberAndSquare([0, 3, -6]));  
console.log(numberAndSquare([1, 4]));      
console.log(numberAndSquare([0, 0, 0]));   
console.log(numberAndSquare([0, 1, -10])); 




// task 4 complete

function containsValue(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}
console.log(containsValue(["abc", "foo", "javascript"], "hello")); 
console.log(containsValue(["abc", "def", "123"], "Abc")); 
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")); 




// task 5 

function reverseSentence(sentence) {
    const words = sentence.split(' ');

    if (words.length < 2) {
        return "There is not enough words!";
    }

    return words.reverse().join(' ');
}
console.log(reverseSentence("Hello")); 
console.log(reverseSentence("Javascript is fun")); 
console.log(reverseSentence("This is a sentence")); 




// task 6 

function removeStringSpecialsDigits(str) {
    let result = "";
    for (let char of str) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === ' ') {
            result += char;
     }
   }
   return result;
}

console.log(removeStringSpecialsDigits("123Javascript #$%is fun")); 
console.log(removeStringSpecialsDigits("Cypress")); 
console.log(removeStringSpecialsDigits("Automation123#$%")); 
  



// task 7 

function removeArraySpecialsDigits(arr) {
    const result = [];
    
    for (let str of arr) {
        let cleanStr = '';
        for (let char of str) {
            if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === ' ') {
                cleanStr += char;
            }
        }
        result.push(cleanStr);
    }
    
    return result;
}
console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])); 
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"])); 
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"])); 




// task 8 

function getCommons(arr1, arr2) {
    const commons = [];
    const seen = new Set(); 
    
    for (let word of arr1) {
        if (arr2.includes(word) && !seen.has(word)) {
            commons.push(word);
            seen.add(word);
        }
    }
    
    return commons;
}
console.log(getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"])); 
console.log(getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"])); 
console.log(getCommons(["Javascript", "C#", "C#"], ["Python", "C#", "C++"])); 




// task 9 

function noXInVariables(arr) {
    return arr.map(element => {
      if (typeof element === 'string' && (element.includes('x') || element.includes('X'))) {
        return element.split('').filter(char => char.toLowerCase() !== 'x').join('');
      } else {
        return element;
      }
    }).filter(element => {
      return !(typeof element === 'string' && element.length === 0);
    });
}
  
console.log(noXInVariables(["abc", 123, "#$%"])); 
console.log(noXInVariables(["xyz", 123, "#$%"])); 
console.log(noXInVariables(["x", 123, "#$%"])); 
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"])); 
  