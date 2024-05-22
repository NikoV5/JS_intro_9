// Task 1 

function countVC(string) {
  let counts = { vowels: 0, consonants: 0 };
  
  const vowels = 'aeiouAEIOU';
  
  for (let char of string) {
      let charCode = char.charCodeAt(0);
      
      if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
          if (vowels.includes(char)) {
              counts.vowels++;
          } else {
              counts.consonants++;
          }
      }
  }
  
  return counts;
}

console.log(countVC("Hello"));       
console.log(countVC("Programming"));  
console.log(countVC("123AbC"));      
console.log(countVC("123!@#xyz"));   
console.log(countVC(""));           




// Task 2 

function countChars(string) {
  const counts = {};
  
  for (let char of string) {
      if (char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z') {
          counts.letters = (counts.letters || 0) + 1;
      } else if (char >= '0' && char <= '9') {
          counts.numbers = (counts.numbers || 0) + 1;
      } else if (char !== ' ') {
          counts.specials = (counts.specials || 0) + 1;
      }
  }
  
  return counts;
}

console.log(countChars("Hello"));           
console.log(countChars("Programming 123"));  
console.log(countChars("123AbC!@#"));         
console.log(countChars("0987654321"));        
console.log(countChars("     "));             
console.log(countChars(""));                 



// Task 3 

function maxOccurrences(string) {
  const counts = [];
  let maxChar = '';
  let maxCount = 0;

  for (let char of string) {
      if (char === ' ') continue;
      
      counts[char] = (counts[char] || 0) + 1;
      
      if (counts[char] > maxCount) {
          maxChar = char;
          maxCount = counts[char];
      }
  }
  
  return maxChar;
}

console.log(maxOccurrences("Hello"));           
console.log(maxOccurrences("Occurrences"));      
console.log(maxOccurrences("    ab    "));      
console.log(maxOccurrences("12   3   21"));       
console.log(maxOccurrences("      "));            
console.log(maxOccurrences(""));                  




// Task 4 

function starOut(string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
      if (string[i] === '*' || (i > 0 && string[i - 1] === '*') || (i < string.length - 1 && string[i + 1] === '*')) {
          continue; 
      }
      result += string[i];
  }

  return result;
}

console.log(starOut("ab*cd"));   
console.log(starOut("ab**cd"));  
console.log(starOut("xm*sm*sy")); 
console.log(starOut("abc"));      
console.log(starOut("***"));      
console.log(starOut("   "));     
console.log(starOut(""));         



// Task 5

function romanToInt(roman) {
  const values = {
      'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
  };
  let total = 0;

  for (let i = 0; i < roman.length; i++) {
      const currentVal = values[roman[i]];
      const nextVal = values[roman[i + 1]];

      total += nextVal > currentVal ? -currentVal : currentVal;
  }

  return total;
}

console.log(romanToInt("I"));                     
console.log(romanToInt("IV"));                    
console.log(romanToInt("CXII"));                 
console.log(romanToInt("MMM"));                 
console.log(romanToInt("MMMDCCCLXXXVIII"));        
console.log(romanToInt("MDCLXVI"));                