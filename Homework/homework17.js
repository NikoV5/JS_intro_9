// Task 1 

function findMedian(nums1, nums2) {
  let combined = nums1.concat(nums2).sort((a, b) => a - b);

  let n = combined.length;

  if (n % 2 === 1) {
      return combined[Math.floor(n / 2)];
  } 
  else {
      let mid1 = Math.floor(n / 2) - 1;
      let mid2 = Math.floor(n / 2);
      return (combined[mid1] + combined[mid2]) / 2;
  }
}
console.log(findMedian([1, 3], [2]));      
console.log(findMedian([1, 2], [3, 4]));     
console.log(findMedian([4], [3]));           
console.log(findMedian([4], []));            
console.log(findMedian([0], [0, 1]));     



// Task 2 

function calculateFactorial(num) {
  if (num < 0) {
      return -1; 
  } else if (num === 0 || num === 1) {
      return 1; 
  } else {
      let factorial = 1;
      for (let i = 2; i <= num; i++) {
          factorial *= i;
      }
      return factorial;
  }
}
console.log(calculateFactorial(0));  
console.log(calculateFactorial(1)); 
console.log(calculateFactorial(5));  
console.log(calculateFactorial(6));  
console.log(calculateFactorial(10)); 
console.log(calculateFactorial(4));  



// Task 3

function calculateGCD(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  
  while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
  }
  
  return a;
}

console.log(calculateGCD(8, 12));   
console.log(calculateGCD(17, 5));   
console.log(calculateGCD(48, 18));
console.log(calculateGCD(0, 5));    
console.log(calculateGCD(21, 14));  
console.log(calculateGCD(60, 48));  



// Task 4

function calculateLCM(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  
  if (a === 0 || b === 0) {
      return 0;
  }
  
  function calculateGCD(x, y) {
      while (y !== 0) {
          let temp = y;
          y = x % y;
          x = temp;
      }
      return x;
  }
  let gcd = calculateGCD(a, b);
  return (a * b) / gcd;
}

console.log(calculateLCM(8, 12));  
console.log(calculateLCM(17, 5));   
console.log(calculateLCM(48, 18));  
console.log(calculateLCM(0, 5));   
console.log(calculateLCM(21, 14));  
console.log(calculateLCM(60, 48)); 