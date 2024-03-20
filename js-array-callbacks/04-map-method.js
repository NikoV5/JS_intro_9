
const sentences = ['Good morning', 'I like arrays', 'It is sunday'];



// get each sentences first word -> ['Good', 'I', 'It']:


/* solution with loops

const newArr = [];

for(const sentence of sentences) {
    newArr.push(sentence.split(' ')[0]);
}
// or
for(const sentence of sentences) {
    newArr.push(sentence.slice(0, sentence.indexOf(' ')));
}
*/




// solution with map() function

/*
const newArr = sentences.map(function (sent) {
    return sent.split(' ')[0]
})
*/

// or
const newArr = sentences.map(sent => sent.split(' ')[0]); 

console.log(sentences); // [ 'Good morning', 'I like arrays', 'It is sunday' ]
console.log(newArr) // [ 'Good', 'I', 'It' ]



console.log('\n-----------------------------------------------------------\n');



// Each sentences last word -> ['Morning, ' arrays', 'sunday'];
const lastWords = sentences.map(sentence => sentence.split(' ').slice(-1)).flat();
// or 
// const lastWords = sentences.map(sentence => sentence.slice(sentence.lastIndexOf(' ') + 1);;
// const lastWords = sentences.map(sentence => sentence.split(' ').pop());

console.log(sentences); // [ 'Good morning', 'I like arrays', 'It is sunday' ]
console.log(lastWords) // [ [ 'morning' ], [ 'arrays' ], [ 'sunday' ] ]



console.log('\n-----------------------------------------------------------\n');





const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50];
// Create a new array storing the given salaries with 2 decimals -> [1000.23, 5234.35, 721.98, 3452.50]

const newSalaries = salaries.map(salary => Number(salary.toFixed(2)));
//or
// const newSalaries = salaries.map(salary => parseFloat(salary.toFixed(2)));

console.log(newSalaries);





console.log('\n-----------------------------------------------------------\n');





