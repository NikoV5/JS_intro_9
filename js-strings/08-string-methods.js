// Extracting partial strings (substring)

let language = 'JavaScript';

// slice() method
language.slice(0, 4); // start with 0 and stop at 3. means take 0, 1, 2, 3 and stop at 4.
console.log(language.slice(0, 4)); // 'Java'
console.log(language.slice(4, 10)); // 'Script'
    // or 
console.log(language.slice(4)); // 'Script' (if you are starting at some point and asking for that point all the way to the end of the statement, you can use this as well)


let quote = 'Practice makes it perfect!';

/*
Get:
'Practice'
'Perfect'
'makes it perfect!'
*/

console.log(quote.slice(0, 8));  // 'Practice'
console.log(quote.slice(18, 25)); // 'perfect'
console.log(quote.slice(9)); // 'makes it perfect!'


/*
TASK: Used ot extract partial string from the original string by using indexes
RETURN: Returns a partial string (substring)
        slice(startIndex) -> this will extract substring starting from the startIndex going all the way to the end
        slice(startIndex, endIndex) -> this will extract substring starting from the startIndex (inclusive) and going through the endIndex (exclusive)
ARGUMENTS: takes one or 2 arguments which are indexes
CHANGE ORIGINAL VALUE: Does not change the original value
STATIC or NON-STATIC: non-static

The only difference between slice() and substring() is the way they handle the negative indexes
slice() counts backwards when you pass negative arguments
substring() converts negative indexes to ZERO
*/


// Tricky part
console.log('abc'.slice(5)); // '' 
console.log('abc'.slice(4, 10)); // '' 
console.log('abc'.slice(2, 100)); // 'c' 

    // Negative indexes

console.log('JavaScript'.slice(-3)); // 'ipt' 
console.log('JavaScript'.slice(-6)); // 'Script'
console.log('JavaScript'.slice(-10, -6)); // 'Java'
console.log('JavaScript'.slice(-5, -7)); // ''

console.log('Hello'.slice(3, 2)); // ''




// substring() methods
let obj = 'Table';
console.log(obj.substring(0, 3));
console.log(obj.substring(1));

console.log(obj.slice(0, 3));
console.log(obj.slice(1));

console.log(obj.slice(-2)); // 'le'
console.log(obj.substring(-5)); // 'Table' // substring considers negative numbers as 0
console.log(obj.substring(-5, -10)); // 'Table' // substring considers negative numbers as 0
console.log(obj.substring(-3, 2)); // 'Ta'





// split() methods
let shoppingList = 'Apple, Orange, Bananas, Milk, Eggs';

const shoppingListArray = shoppingList.split(', ');

console.log(shoppingListArray);

console.log(shoppingListArray[0]); // 'Apple'
console.log(shoppingListArray[2]); // 'Bananas'



/*
Mouse | Computer | Keyboard     -> ' | '

Today is Sunday -> 'is'     ['Today ', ' Sunday']
Today is Sunday -> 'ay'     ['Tod ', ' is Sund', '']
Hello world     -> 'l'      ['he', ''. 'o wor', 'd']
*/
console.log('Mouse | Computer | Keyboard'.split(' | '));


/*
TASK: used to split the string into array elements with the given seperator
RETURN: it returns an array
ARGUMENTS: Takes one argument
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non static
*/