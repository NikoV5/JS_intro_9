
const names = [ 'John', 'Jane', 'Alex', 'Max' ];



// looping array elements with for loop
for(let i = 0; i <= names.length-1; i++) {
    console.log(names[i]);
}




console.log('\n------------for...of loop---------------\n');
// looping arrray elements with for...of loop
for(const name of names) {
    console.log(name);
}





// Count how many names start with j or J ->
console.log('\n------------for...of loop j start---------------\n');

let countJ1 = 0;

for(const name of names) {
    if(name.toLowerCase().startsWith('j')) countJ1++;
}

console.log('The total count of names starting with j or J is =', countJ1);


// or
console.log('\n------------for loop j start---------------\n');

let countJ2= 0;
for(let i = 0; i< names.length; i++) {
    if(names[i].toUpperCase()[0] === 'J') countJ2++;
}

console.log('The total count of names starting with j =', countJ2);



// or  
let count = 0

for(const name of names) {
    if(name[0] === 'J' || name[0] === 'j') {
        count++
    }
}

console.log(`There are ${count} names that start with 'J' or 'j'.`)