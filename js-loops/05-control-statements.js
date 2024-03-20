
// We dont want to see 6 and 13
// We dont like to get any number that is 14 or more
for(let i = 1; i <= 15; i++) {
    if(i === 6 || i === 13) continue; // This will make it so it ignores 6 and 13
    else if(i === 14) break; // this will make it so it doesnt output 14 and up.
    console.log('The number is', i)
} 

