
// Destructuring (this is not the preferred way)
const favMovies = [ 'Harry Potter', 'Godfather', 'Lord of the Rings' ]; 

const fav1 = favMovies[0];
const fav2 = favMovies[1];
const fav3 = favMovies[1];

console.log(fav2); // Godfather


console.log('\n-----------------------------------------');
// Destructuring (preferred way)
const [ fav01, fav02, fav03, fav04 ] = favMovies;

console.log(fav02); // Godfather
console.log(fav04); //  undefined because there are only 3 movies in favMovies




console.log('\n-----------------------------------------');
// destructure usernamae, password, email: 
const credentials = [ 'TechGlobal', 'Test123', 'TechGlobal@gmail.com' ];

const [username, password, email] = credentials

console.log(username);
console.log(password);
console.log(email);



console.log('\n-----------------------------------------');

const numbers = [ -1, 10, 0, 100, 200 ];
const [, , , hundred, two_hundred ] = numbers

console.log(hundred); // 100
console.log(two_hundred); //  200


const [ , ten, zero, , twoo_hundred ] = numbers;

console.log(ten); // 10
console.log(zero); // 0 
console.log(twoo_hundred); // 200