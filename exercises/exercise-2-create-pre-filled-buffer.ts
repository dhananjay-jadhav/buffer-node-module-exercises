// Task Requirements

// Create a buffer of 8 bytes filled with value 0xFF (255)
// Create a buffer of 8 bytes filled with the letter 'A' (65)
// Create a buffer of 10 bytes filled with the string 'XY'
// Display each buffer in hex format


const buffer1 = Buffer.alloc(8,255);
const buffer2 = Buffer.alloc(8,'A');
const buffer3 = Buffer.alloc(8,'XY');


console.log('Buffer 1',buffer1.toString('hex'));
console.log('Buffer 2',buffer2.toString('hex'));
console.log('Buffer 3',buffer3.toString('hex'));