
const person = {
    firstName: 'John',
    lastName: 'Doe',
    spouse: 'Jane Doe',
    age: 45,
    favNumber: 7,
    favCities: ['Chicago', 'Miami'],
    address: {
        street1: '123 Chicago St',
        street2: 'APT 2',
        city: 'Chicago',
        state: 'IL',
        ZIP: 12345,
        country: 'US'
    },
    jobTitle: 'Software Engineer in Test',
    likesJS: true,
    SSN: null
};
console.log(person.firstName);




const phone1 = []; //  empty object
const phone2 = new Object(); // empty object




/*
properties (key-value pair)                keys             values
firstName: 'John',                         firstName        'john'
lastName: 'Doe',                           lastName         'Doe'
spouse: 'Jane Doe',                        Spouse           'Jane Doe'
age: 25,                                   age               25
favNumber: 7                               favNumber         7


*** Keys cannot be duplicates ***
*** Values can be duplicates ***
*** You can have duplicate values in keys ***
*** Keys are strings by default. But, values can be of any data value ***
*/





const mug = {
    price: 10.99,
    color: 'White',
    capacity: 8
};

console.log(mug); // { price: 10.99, color: 'White', capacity: 8 }


// How to get property values  ->  object.key or object['key']
mug.price
mug.color

console.log(mug.price);
console.log(mug.color);
console.log(mug['capacity']);


// How to add a new property
mug.material = 'Glass';
console.log(mug); // { price: 10.99, color: 'White', capacity: 8, material: 'Glass' }

console.log(mug['material']); // 'Glass or you can use mug.material


// How to remove a property form an object
delete mug.capacity;
delete mug['material'];

console.log(mug); // { price: 10.99, color: 'White' }


// Something that doesnt exist in the object
console.log['material']; // undefined


