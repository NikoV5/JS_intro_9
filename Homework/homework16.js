// Task 1 

function toInitials(fullName) {
  const [firstName, lastName] = fullName.split(' ');
  
  const initials = `${firstName[0]}. ${lastName[0]}.`;
  
  return initials;
};
console.log(toInitials("Joe Doe"));       
console.log(toInitials("Alex Reyes"));     
console.log(toInitials("Tom Cruise"));   
console.log(toInitials("Bruce Willis"));   
console.log(toInitials("Ja Le"));          


// Task 2

function hasNumbers(str) {
  for (let i = 0; i < str.length; i++) {
      if (!isNaN(str[i]) && str[i] !== ' ') {
          return true;
      }
  }
  return false;
}
console.log(hasNumbers(""));                   
console.log(hasNumbers("John is 34 years old")); 
console.log(hasNumbers("Hello 3"));      
console.log(hasNumbers("125$"));              
console.log(hasNumbers("   a   "));          
console.log(hasNumbers("      "));             
console.log(hasNumbers("!@#$%^&*()_+"));        


// Task 3

function elementLength(arr) {
  return arr.map(element => element.length);
}
console.log(elementLength(["Hello", "World"]));                       
console.log(elementLength(["Apple", "Banana", "Orange", "Pear"]));    
console.log(elementLength(["BMW", "Mercedes", "Audi"]));               
console.log(elementLength([]));                                        
console.log(elementLength(["Trampoline", "", "Tennis", "Basketball"]));

// Task 4

function isArraySumEvenOrOdd(arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  
  return sum % 2 === 0 ? "even" : "odd";
}

console.log(isArraySumEvenOrOdd([]));          
console.log(isArraySumEvenOrOdd([0, -1, -5]));   
console.log(isArraySumEvenOrOdd([7, 1, 8, 1]));    
console.log(isArraySumEvenOrOdd([0, 0]));          
console.log(isArraySumEvenOrOdd([1, 1, 1, 1, 1]));  


// Task 5

function reverse(str) {
  return str.split('').reverse().join('');
}
console.log(reverse("Hello World"));      
console.log(reverse("TechGlobal"));         
console.log(reverse("Basketball is fun"));  
console.log(reverse(""));                  
console.log(reverse("Apples 456"));         

// Task 6

function reverseWords(str) {
  let words = str.split(' ');

  let reversedWords = words.map(word => {
      return word.split('').reverse().join('');
  });

  let reversedString = reversedWords.join(' ');

  return reversedString;
}
console.log(reverseWords("Hello World")); 
console.log(reverseWords("TechGlobal")); 
console.log(reverseWords("Basketball is fun")); 
console.log(reverseWords("")); 
console.log(reverseWords("Apples 456")); 
