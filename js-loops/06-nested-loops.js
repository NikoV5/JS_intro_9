
// 24 hours loop

// 00:00:00

// \t indents your code in the output
let attempt = 0;

for(let i = 1; i <= 24; i++) {
    console.log('Hour', i);

    for(let j = 1; j <= 60; j++) {
        console.log('\tMinute', j);

        for(let k = 1; k <= 60; k++) {
            console.log('\t\tSecond', k);
            attempt++
        }
    }
}

console.log(attempt); // 60 * 60 * 24



console.log('\n--------------------------------------------------------------------------------');



// loops go from up to down and with each iteration it resets and goes back up, and then back down.
for(let i = 1; i <= 3; i++) {
    console.log(i); // 1
    console.log('Inner loop'); // inner loop
    for(let j = 1; j <= 5; j++) { // j = 1
        console.log('\t' + j); // 1
    } 
}



console.log('\n--------------------------------------------------------------------------------');



const students = [
    [
        ['Ameer', 'Ali', 'Hicran'],
        ['Emre', 'Abdullah', 'Tania', 'Mustafa'],
        ['Marta', 'Niko', 'Mykola']
    ],
    [
        ['Jane', 'Alex', 'John'],
        ['Maria', 'Max']
    ]
];
for(let i = 0; i < students.length; i++) {
    for(let j = 0; j < students[i].length; j++) {
        for(let k = 0; k < students[i][j].length; k++) {
            console.log(students[i][j][k]);
        }
    }
}