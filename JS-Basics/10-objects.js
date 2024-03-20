const student1 = {
    firstName: 'John',
    lastName: 'Doe',
    Age: 25,
    address: 'Chicago',
    phoneNumber: '630-352-6089'
}; // Keys cant be duplicated, but names can be duplicated if its under a different key

// Get student 1 information
console.log(student1); // Shows everything you assigned to student 1

// Get specific information about student 1

console.log(student1.firstName); // output will be john
console.log(student1['firstName']); // if you want to do bracket notation but in the end of the day it will give you the same information. dot is easier
console.log(student1.Age); // output will be 25

//undefined properties or keys will output undefined
console.log(student1.ssn); // output will be undefined because we never specified ssn information
console.log(student1.lastname); // if you misspell your key you will also get undefined


// Update properties of the object
student1.address = 'Miami';

console.log(student1); // output should show all info about student 1 but with an updated address of miami
console.log(student1.address); // output will be 'Miami'


// adding a new property
student1.phoneNumber = '630-352-6089';


console.log(student1);


// How to remove/delete an existing property

delete student1.phoneNumber;
console.log(student1);