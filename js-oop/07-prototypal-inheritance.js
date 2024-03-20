

// BEFORE ES6






// Create a template with constructor function

function Person () {
    // block
};

Person.prototype.eat = function () {
    console.log('EAT');
};

Person.prototype.sleep = function () {
    console.log('SLEEP');
}





console.log('\n------------------------programmer-------------------------\n');






function Programmer () {
    // block
};



// inherit all the Person methods into Programmer
Programmer.prototype = Object.create(Person.prototype);

Programmer.prototype.code = function () {
    console.log('CODE');
};


const programmer_mustafa = new Programmer();


programmer_mustafa.code(); // CODE
programmer_mustafa.eat(); // EAT
programmer_mustafa.sleep(); // SLEEP









console.log('\n-----------------------singer--------------------------\n');









// Create Singer template which inherits from Person and add sing method to it.
// Create a singer object and execute the sing(), eat() and sleep() method


// PROTOTYPE SINGER
// constructor
function Singer () {
    // body
};



// Inheriting all of the Person prototype functions into Singer prototype:
Singer.prototype = Object.create(Person.prototype);



// Creating a new Singer prototype function
Singer.prototype.sing = function () {
    console.log('SING');
};



const singer_niko = new Singer();

singer_niko.sing(); // SING
singer_niko.eat(); // EAT
singer_niko.sleep(); // SLEEP
