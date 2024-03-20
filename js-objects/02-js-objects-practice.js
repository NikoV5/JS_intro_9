
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

// Find and print "persons" city and state  ->  'Chicago', IL'
// find and print "persons" favCities  ->   'Chicago', 'Miami' ]
// Print GOOD GUY if the person likes JS, or 'STAY AWAY' otherwise. -> GOOD GUY

console.log(`${person.address.city}, ${person.address.state}`); // Chicago, IL

console.log(person.favCities); // [ 'Chicago', 'Miami' ]

console.log(person.likesJS === true ? 'GOOD GUY' : 'STAY AWAY'); // GOOD GUY
// or
console.log(person.likesJS ? 'GOOD GUY' : 'STAY AWAY'); // GOOD GUY
// or
if(person.likesJS) console.log('GOOD GUY'); // GOOD GUY
else console.log('STAY AWAY'); // GOOD GUY



let countFavCitiesStartingWithM = 0;

for(const city of person.favCities) {
    if(city.toLowerCase().startsWith('M')) countFavCitiesStartingWithM++;
}
console.log(countFavCitiesStartingWithM);