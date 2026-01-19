// Task Requirements

// Create three buffers: "Hello", ", ", "World!"
// Concatenate them into one buffer
// Display the combined result
// Try concatenating with a totalLength shorter than actual (observe truncation)
// Measure the performance difference when providing totalLength


const buffer1 = Buffer.from('Hello');
const buffer2 = Buffer.from(', ');
const buffer3 = Buffer.from('World!');

console.time();
const concatenatedBuffer = Buffer.concat([buffer1, buffer2, buffer3]);
console.timeEnd();

console.log(concatenatedBuffer);
console.log(concatenatedBuffer.toString());
console.log(concatenatedBuffer.length);


console.time();
const concatTrunBuffer = Buffer.concat([buffer1, buffer2, buffer3], 10);
console.timeEnd();

console.log(concatTrunBuffer);
console.log(concatTrunBuffer.toString());
console.log(concatTrunBuffer.length);