
// Task 1 COMPELTE

function hasUpperCase(string) {
    for (let i = 0; i < string.length; i++) {
        if(string[i] !== string[i].toLowerCase())
        return true
    }
    return false
}


console.log(hasUpperCase("javascript")); 
console.log(hasUpperCase("John"));       
console.log(hasUpperCase("$125.0"));     
console.log(hasUpperCase(""));           





// Task 2 COMPLETE


function noDigit(string) {
    let result = '';
    for(let i = 0; i < string.length; i++) {
        if(string[i] >= '0' && string[i] <= '9') {
            continue;
        }
        result += string[i];
    }
    return result;
}
console.log(noDigit("")); 
console.log(noDigit("Javascript")); 
console.log(noDigit("123Hello")); 
console.log(noDigit("123Hello World149")); 
console.log(noDigit("123Tech456Global149"));

// Task 3 COMPLETE

function noVowel(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let result = ''
    for (let i = 0; i < string.length; i++) {
        if(!vowels.includes(string[i])) {
            result += string[i];
        }
    }
    return result;
}


console.log(noVowel("TechGlobal")); 
console.log(noVowel("AEOxyz"));   
console.log(noVowel("Javascript"));  
console.log(noVowel(""));      
console.log(noVowel("125$"));         


// Task 4 COMPLETE

function no13(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 13) {
            arr[i] = 0;
        }
    }
    return arr;
}

console.log(no13([1, 2, 3, 4])); 
console.log(no13([13, 2, 3])); 
console.log(no13([13, 13, 13, 13, 13])); 
console.log(no13([])); 


// Task 5




// Task 6



// Task 7




// Task 8