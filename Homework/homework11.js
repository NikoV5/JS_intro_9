
// Task 1 

function isPalindrome(word) {
  word = word.toLowerCase();

  let reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

function countPalindrome(str) {
  let words = str.toLowerCase().match(/\b[a-z]+\b/g);

  if (!words) return 0;

  let palindromeCount = 0;

  for (let i = 0; i < words.length; i++) {
      if (isPalindrome(words[i])) {
          palindromeCount++;
      }
  }
  return palindromeCount;
}
console.log(countPalindrome("Mom and Dad")); 
console.log(countPalindrome("See you at noon")); 
console.log(countPalindrome("Kayak races attracts racecar drivers")); 
console.log(countPalindrome("")); 
console.log(countPalindrome("No palindrome here")); 




// Task 2 

function sum(arr, isEvenIndex) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
      if ((i % 2 === 0 && isEvenIndex) || (i % 2 !== 0 && !isEvenIndex)) {
          result += arr[i];
      }
  }
  return result;
}

console.log(sum([1, 5, 10], true));       
console.log(sum([3, 7, 2, 5, 10], false));
console.log(sum([-1, 1, -2, 2], true));    
console.log(sum([0, -1, 15, 1], false));   
console.log(sum([1, 2, 3, 4, -4], true));  




// Task 3 

function nthChars(str, n) {
  let result = '';
  for (let i = n - 1; i < str.length; i += n) {
      result += str[i];
  }
  return result;
}

console.log(nthChars("Java", 2)); 
console.log(nthChars("JavaScript", 5));
console.log(nthChars("Java", 3)); 
console.log(nthChars("Hi", 4)); 
console.log(nthChars("0123456789", 2)); 




// Task 4 

function canFormString(str1, str2) {
  const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

  const freqMap1 = new Map();
  const freqMap2 = new Map();

  for (const char of cleanStr1) {
      freqMap1.set(char, (freqMap1.get(char) || 0) + 1);
  }

  for (const char of cleanStr2) {
      freqMap2.set(char, (freqMap2.get(char) || 0) + 1);
  }

  for (const [char, count] of freqMap2) {
      if (!freqMap1.has(char) || freqMap1.get(char) < count) {
          return false;
      }
  }

  return true;
}
console.log(canFormString("Hello", "Hi")); 
console.log(canFormString("programming", "gaming")); 
console.log(canFormString("halogen", "hello")); 
console.log(canFormString("CONVERSATION", "voices rant on")); 
console.log(canFormString("12", "123")); 




// Task 5 

function isAnagram(str1, str2) {
  const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

console.log(isAnagram("Apple", "Peach")); 
console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("astronomer", "moon starer")); 
console.log(isAnagram("CINEMA", "iceman")); 
console.log(isAnagram("123", "1234")); 




// Task 6 


function count(numbers, isEven) {
  let count = 0;
  
  for (let i = 0; i < numbers.length; i++) {
      if ((numbers[i] % 2 === 0 && isEven) || (numbers[i] % 2 !== 0 && !isEven)) {
          count++;
      }
  }
  
  return count;
}

console.log(count([1, 5, 10], true));       
console.log(count([3, 7, 2, 5, 10], false)); 
console.log(count([-1, 1, -2, 2], true));    
console.log(count([0, -1, 15, 1], false));   
console.log(count([1, 2, 3, 4, -4], true));  




// Task 7 

function sumDigitsDouble(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
      if (!isNaN(parseInt(str[i])) && parseInt(str[i]) >= 0) {
          sum += parseInt(str[i]);
      }
  }
  if (sum === 0) {
      return -1; 
  } else {
      return sum * 2;
  }
}

console.log(sumDigitsDouble("Javascript")); 
console.log(sumDigitsDouble("23abc45"));  
console.log(sumDigitsDouble("Hi-23"));    
console.log(sumDigitsDouble("ab12"));     
console.log(sumDigitsDouble("n0numh3r3")); 




// Task 8 


function countOccurrence(str1, str2) {
  let count1 = new Array(256).fill(0);

  for(let i = 0; i < str1.length; i++) {
      count1[str1[i].toLowerCase().charCodeAt(0)]++;
  }

  let result = Infinity;

  for(let i = 0; i < str2.length; i++) {
      let maxOccur = count1[str2[i].toLowerCase().charCodeAt(0)];

      result = Math.min(result, maxOccur);
  }

  if(result === Infinity) {
      return 0;
  }

  return result;
}

console.log(countOccurrence("Javascript", "Java"));  
console.log(countOccurrence("Hello", "World"));     
console.log(countOccurrence("Can I can a can", "anc")); 
console.log(countOccurrence("Hello", "l"));          
console.log(countOccurrence("IT conversations", "IT")); 






