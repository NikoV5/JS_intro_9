
// Find the first city that has the odd length  -> Chicago
const cities = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo'];

let firstOddLengthCity;

for(const city of cities) {
    if(city.length % 2 !== 0) {
        firstOddLengthCity = city;
        break;
    }
}

console.log(firstOddLengthCity);





// Find the first city that has length more than 5  -> [ 'Berlin', 'Chicago', 'Istanbul' ]

const citiesWithLength6OrMore = [];

for(const city of cities) {
    if(city.length > 5) citiesWithLength6OrMore.push(city);
}

console.log(citiesWithLength6OrMore);






// Find the first city that has i or I in it -> [ 'Berlin', 'Chicago', 'Kyiv', 'Istanbul' ];

const citiesWithI = [];

for(const city of cities) {
    if(city.indexOf('i') >= 0 || city.indexOf('I') >= 0) citiesWithI.push(city);
}
console.log(citiesWithI);
