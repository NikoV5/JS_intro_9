
// Task 1 complete
function firstPos(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            return arr[i];
        }
    }
}

console.log(firstPos([0, 3, -9,  5, 8]))
console.log(firstPos([-2, 0, -7, 10, -5]))
console.log(firstPos([1, 2, 3, -2]))




// Task 2 complete
function lastNeg(arr) {
    arr.reverse()
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            return arr[i];
        }
    }
}

console.log(lastNeg([0, 3, -9,  5, 8]))
console.log(lastNeg([-2, 0, -7, 10, -5]))
console.log(lastNeg([1, 2, 3, -2]))



// Task 3 complete

function firstLongest(words) {
    let longestWord = "";
    for (const word of words) {
        if (word.length > longestWord.length) longestWord = word
    }
    return longestWord;
}

console.log(firstLongest(["red", "blue", "yellow", "white"]))
console.log(firstLongest(["Apple", "Banana", "Orange"]))
console.log(firstLongest(["purple", "yellow", "orange"]))


// Task 4 complete

function lastShortest (arr) {
    arr.reverse()
    let shortestWord = arr[0];
    for(const word of arr){
        if (word.length < shortestWord.length) shortestWord = word
    }
    return shortestWord;
}

console.log(lastShortest(["red", "blue", "yellow", "white"]))
console.log(lastShortest(["Apple", "Banana", "Mango"]))
console.log(lastShortest(["white", "yellow", "brown"]))



// Task 5 complete

function max(arr) {
    let newBiggest = arr [0];

    for (const numbers of arr) {

        if(numbers > newBiggest ) newBiggest = numbers 
    }
    return newBiggest        
}

console.log(max([0, 3, -9,  5, 8]));   
console.log(max([-2, 0, -7, 10, -5])); 
console.log(max([1, 2, 3, -2]));

// Task 6 complete

function min(arr) {
    let newSmallest = arr [0]
    for (const numbers of arr) {

        if (numbers < newSmallest ) newSmallest = numbers
    }
    return newSmallest
}
console.log(min([0, 3,  5, 8]))
console.log(min([-2, 0, -7, 10, -5]))
console.log(min([1, 2, 3, 15]))



// Task 7

function commonElements(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            arr3.push(arr1[i]);
        }
    }
    return arr3;
}

console.log(commonElements([10, 20, 30, 50, 70], [20, 50, 70])); //[20, 50, 70]
console.log(commonElements([30, 50, 70], [20, 100, 300])); //[]
console.log(commonElements(["30", "abc", "hi"], [30, "Hi", "abc"])); //["abc"]