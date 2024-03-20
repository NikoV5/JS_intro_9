


// AFTER ES6:



class Person {
    
    // Provided by default
    // constructor() {

    // } 

    eat() {
        console.log('EAT');
    }
    sleep() {
        console.log('SLEEP');
    }
};





console.log('\n-----------------------programmer--------------------------\n');





// Use extends for inheritance 
class Programmer extends Person {
    code() {
        console.log('CODE');
    }
};


const programmer_mustafa = new Programmer();

programmer_mustafa.code(); // CODE
programmer_mustafa.eat(); // EAT
programmer_mustafa.sleep(); // SLEEP






console.log('\n----------------------singer---------------------------\n');





// Create Singer class and inherit Person methods
// Create a sing method for Singer class
class Singer extends Person {
    sing() {
        console.log('SING');
    }
};



// Create a Singer object and execute the sing(), eat() and sleep() method:
const singer_niko = new Singer();

singer_niko.sing(); // SING
singer_niko.eat(); // EAT
singer_niko.sleep(); // SLEEP







