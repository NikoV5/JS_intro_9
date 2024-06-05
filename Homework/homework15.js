
// 1
function toCamelCase(str) {
  let words = str.split(' ').filter(word => word !== '').map(word => word.toLowerCase());
  for (let i = 1; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join('');
}

console.log(toCamelCase("first name"));         
console.log(toCamelCase("last     name"));         
console.log(toCamelCase("   ZIP CODE"));           
console.log(toCamelCase("I Learn Java Script"))
console.log(toCamelCase("helloWorld"));          




// 2

function toSnakeCase(str) {
  return str.trim().toLowerCase().replace(/\s+/g, '_'); 
}

console.log(toSnakeCase("first name"));          
console.log(toSnakeCase("last    name"));         
console.log(toSnakeCase("    I love Java Script")); 
console.log(toSnakeCase("already_snake_case"));  
console.log(toSnakeCase("hello"));             


// 3
function alternatingCases(string) {
  let result = '';
  let shouldUppercase = true;

  for (let i = 0; i < string.length; i++) {
      let char = string[i];
      
      if (/[a-zA-Z]/.test(char)) {
          if (shouldUppercase) {
              result += char.toUpperCase();
          } else {
              result += char.toLowerCase();
          }
          shouldUppercase = !shouldUppercase;
      } else {
          result += char;
      }
  }
  
  return result;
}

console.log(alternatingCases("Hello"));        
console.log(alternatingCases("basketball"));   
console.log(alternatingCases("Tech Global"));  
console.log(alternatingCases(""));              
console.log(alternatingCases("123!@#aB"));      


// 4

function isNeutral(str1, str2) {
  let result = '';

  for (let i = 0; i < str1.length; i++) {
      if ((str1[i] === '+' && str2[i] === '-') || (str1[i] === '-' && str2[i] === '+')) {
          result += '0';
      } else {
          result += str1[i];
      }
  }

  return result;
}

console.log(isNeutral("-", "+"));           
console.log(isNeutral("-+", "-+"));       
console.log(isNeutral("-++-", "-+-+"));    
console.log(isNeutral("--++--", "++--++")); 
console.log(isNeutral("+++", "+++"));    



// 5

function isTrueOrFalse(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const positiveLetters = new Set(alphabet.slice(0, 13).toLowerCase().split('')); 
  
  const words = str.split(' ');
  let positiveCount = 0;
  let negativeCount = 0;
  
  words.forEach(word => {
      let firstLetter = word[0].toLowerCase();
      if (alphabet.toLowerCase().includes(firstLetter)) {
          if (positiveLetters.has(firstLetter)) {
              positiveCount++;
          } else {
              negativeCount++;
          }
      }
  });

  return positiveCount >= negativeCount;
}

console.log(isTrueOrFalse("A big brown fox caught a bad rabbit")); 
console.log(isTrueOrFalse("Xylophones can obtain Xenon."));
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK"));
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe")); 
