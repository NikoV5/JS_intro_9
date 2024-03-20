
const person = {
    first_name: 'Adam',
    last_name: 'Smith',
    date_of_birth: 1790,
    isAlive: false,
    fullname: function () {
        return `${this.first_name} ${this.last_name}`; 
    },
    info: function () {
        return `${this.fullname()} was born in ${this.date_of_birth}.`;
    }
};

// "this" is a keyword that refers to the current object (gives the containing object its in unless you give it something specific such as the example here) 



person.fullname(); // Adam Smith
console.log(this); // {}  ->  empty object



// Create a person function named as info and it prints information as shown -> 'Adam Smith was born in 1790'.

console.log(person.fullname()); // Adam Smith
console.log(person.info()); // Adam Smith was born in 1790.

