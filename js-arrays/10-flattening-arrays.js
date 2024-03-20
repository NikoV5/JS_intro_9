
// flat() method

const students = [
    [
        ['Ameer', 'Ali', 'Hicran'],
        ['Emre', 'Abdullah', 'Tania', 'Mustafa'],
        ['Marta', 'Niko', 'Mykola']

    ],
    [
        ['Jane', 'Alex', 'John'],
        ['Maria', 'Max', [ 'Ali', 'James' ]]
    ],
];

// In total, how many students we have? 15

console.log(students.flat(Infinity).length); // 15 (infinity flattens all the brackets into 1 bracket)


console.log(students.flat().length); // 5 (5 blue brackets)
console.log(students.flat(3).length); // 17


