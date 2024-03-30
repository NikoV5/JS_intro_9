

function generateRandomNumber(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);

    return Math.floor(Math.random() * (max - min + 1)) + min
}


function maxOfArray(arr) {
    return Math.max(...arr);
}



function minOfArray(arr) {
    return Math.min(...arr);
}




// THE DIFFERENT WAYS TO EXPORT FUNCTIONS:

// 1. Exporting your reusable methods one by one
module.exports.generateRandomNumber = generateRandomNumber;
module.exports.maxOfArray = maxOfArray;
module.exports.minOfArray = minOfArray;


// 2. Exporting all the methods as an object 1
// module.exports.MathHelper = {
//     generateRandomNumber,
//     minOfArray,
//     maxOfArray
// }

// 3. Exporting all the methods as an object 2
// const MathHelper = {
//     generateRandomNumber,
//     minOfArray,
//     maxOfArray
// }

// 4. Exporting methods and fields as a class

/* 
DOESNT MAKE SENSE HAVING BOTH INDIVIDUAL EXPORTS AND COMBINEC EXPORTS.
ONLY KEPT IT AS AN EXAMPLE TO SHOW HOW TO DO ALL 3.
ONLY USE ONE OUT OF THE 3 INSTEAD OF MULTIPLE OR ALL
*/

// Exporting methods and fields as a ES6 class
// class MathHelper {
//     static pi = 3.14;
//     static favNumber = 7;
//     static generateRandomNumber(a, b) {
//         let max = Math.max(a, b);
//         let min = Math.min(a, b);
    
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
    
//     static maxOfArray(arr) {
//         return Math.max(...arr);
//     }
    
//     static minOfArray(arr) {
//         return Math.min(...arr);
//     }
// }

// module.exports.MathHelper = MathHelper;