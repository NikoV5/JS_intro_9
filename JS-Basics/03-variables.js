let age = 25;

console.log(age); // Should be 25 because we put 25 in a container

console.log('age'); // when you put the apostrophe in between age, you will just get age when you run it and not what is in your container

console.log(age + 5); // since 25 is in our "age" container, if you add 5, it should be 30

// The age is 25

// concatanation: combining multiple data together (strings) together
console.log('The age is', age); //Adding a comma adds a space
console.log('The age is ' + age); // putting a space in between the comma adds a space

/*
create a variable and store your name inside it
output the name with a message like below

Niko
My name is Niko.
*/

let name = 'Niko';

console.log('My name is', name + '.');

console.log(`My name is ${name}.`);


let favNumber = 7; 

//square of the 7 is 49

console.log('the second square of the', favNumber + ' is ' + favNumber * favNumber + '.')
console.log('the second square of the ' + favNumber + ' is ' + favNumber * favNumber + '.')

console.log(`the second square of the ${favNumber * favNumber}.`);


const student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 45,
    emailAddress: 'johndoe@gmail.com',
    address: '123 St Chicago IL 12345'
} 
console.log(student1.lastName);



const student1 = {
    firstName: 'John',
    lastName: 'Doe',
    Age: 25,
    address: 'Chicago',
    phoneNumber: '630-352-6089'
};
console.log(lastName);