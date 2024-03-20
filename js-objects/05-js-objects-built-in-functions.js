
const car = {
    color : 'red',
    year : 2023,
    make : 'BMW',
    model : 'X7'
};

// Keys: 'color', 'year', 'make', 'model'
// values: 'red', 2023, 'BMW', 'X7'
//Key-value pairs: [ [ 'color', 'red' ], [ 'year', 2023 ], [ 'make', 'BMW' ], [ 'model', 'X7' ] ]

console.log(Object.keys(car)); // [ 'color', 'year', 'make', 'model' ]
console.log(Object.values(car)); // [ 'red', 2023, 'BMW', 'X7' ]
console.log(Object.entries(car)); // [ [ 'color', 'red' ], [ 'year', 2023 ], [ 'make', 'BMW' ], [ 'model', 'X7' ] ]


for(const key of Object.keys(car)) {
    console.log(key);
}
/*
Output result:

color
year
make
model
*/

for(const values of Object.values(car)) {
    console.log(values);
}
/*
Output result:

red
2023
BMW
X7
*/

for(const entry of Object.entries(car)) {
    console.log(entry);
}
/* 
output result:

[ 'color', 'red' ]
[ 'year', 2023 ]
[ 'make', 'BMW' ]
[ 'model', 'X7' ]
*/



for(const [key, value] of Object.entries(car)) {
    console.log(key, value);
}



